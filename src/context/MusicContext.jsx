import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { getTrackByRoute } from "../data/album";

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const location = useLocation();
  const audioRef = useRef(null);
  const activeTrackIdRef = useRef(null);
  const hasStartedRef = useRef(false);

  const [activeTrackId, setActiveTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const [audioError, setAudioError] = useState(false);

  const loadTrack = useCallback(
    async (track, shouldPlay = false) => {
      const audio = audioRef.current;
      if (!audio || !track) return;

      const alreadyLoaded = activeTrackIdRef.current === track.id;
      if (alreadyLoaded) {
        if (shouldPlay) {
          hasStartedRef.current = true;
          try {
            await audio.play();
            setIsPlaying(true);
          } catch {
            setIsPlaying(false);
          }
        }
        return;
      }

      audio.pause();
      activeTrackIdRef.current = track.id;
      setActiveTrackId(track.id);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setAudioError(false);

      if (!track.audio) {
        audio.removeAttribute("src");
        audio.load();
        return;
      }

      audio.src = track.audio;
      audio.volume = volume;
      audio.load();

      if (shouldPlay) {
        hasStartedRef.current = true;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    },
    [volume]
  );

  useEffect(() => {
    const track = getTrackByRoute(location.pathname);

    if (track) {
      if (activeTrackIdRef.current !== track.id) {
        // Once playback has been started by a user gesture, moving through
        // the album index loads and plays the newly selected track.
        loadTrack(track, hasStartedRef.current);
      }
      return;
    }

    if (location.pathname === "/") {
      audioRef.current?.pause();
      activeTrackIdRef.current = null;
      hasStartedRef.current = false;
      setActiveTrackId(null);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setAudioError(false);
    }
  }, [location.pathname, loadTrack]);

  const startAlbum = useCallback(
    (firstTrack) => {
      hasStartedRef.current = true;
      loadTrack(firstTrack, true);
    },
    [loadTrack]
  );

  const togglePlayback = useCallback(
    async (track) => {
      const audio = audioRef.current;
      if (!audio || !track) return;

      if (activeTrackIdRef.current !== track.id) {
        hasStartedRef.current = true;
        await loadTrack(track, true);
        return;
      }

      if (!audio.paused) {
        audio.pause();
        setIsPlaying(false);
        return;
      }

      hasStartedRef.current = true;
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    },
    [loadTrack]
  );

  const seek = useCallback((value) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  }, []);

  const setVolume = useCallback((value) => {
    const audio = audioRef.current;
    if (audio) audio.volume = value;
    setVolumeState(value);
  }, []);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleTimeUpdate = (event) => setCurrentTime(event.currentTarget.currentTime);
  const handleMetadata = (event) => setDuration(event.currentTarget.duration || 0);
  const handleEnded = () => setIsPlaying(false);
  const handleError = () => {
    setAudioError(true);
    setIsPlaying(false);
  };

  const value = {
    activeTrackId,
    isPlaying,
    currentTime,
    duration,
    volume,
    audioError,
    startAlbum,
    togglePlayback,
    seek,
    setVolume,
  };

  return (
    <MusicContext.Provider value={value}>
      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMetadata}
        onEnded={handleEnded}
        onError={handleError}
        className="hidden"
      />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used inside MusicProvider");
  }
  return context;
}
