import { motion } from "framer-motion";
import TrackMeta from "./TrackMeta";
import { useMusic } from "../context/MusicContext";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function PlayIcon() {
  return (
    <svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor" aria-hidden="true">
      <path d="M0 0.5L12.5 7.5L0 14.5V0.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="12" height="15" viewBox="0 0 12 15" fill="currentColor" aria-hidden="true">
      <rect width="3.5" height="15" />
      <rect x="8.5" width="3.5" height="15" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M4 1.5H10.5V8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 1.5L1.5 10.5" strokeLinecap="round" />
    </svg>
  );
}

export default function SongPlayer({ track, accentClass = "", panelClass = "" }) {
  const {
    activeTrackId,
    isPlaying,
    currentTime,
    duration,
    volume,
    audioError,
    togglePlayback,
    seek,
    setVolume,
  } = useMusic();

  const isActive = activeTrackId === track.id;
  const isTrackPlaying = isActive && isPlaying;
  const trackFailed = isActive && audioError;
  const hasWorkingAudio = Boolean(track.audio) && !trackFailed;
  const panel = `rounded-2xl border border-current/10 p-5 ${panelClass} ${accentClass}`;

  if (!hasWorkingAudio && !track.embed) {
    return (
      <div className={panel}>
        <TrackMeta index={track.index} title={track.title} artist={track.artist} />
        <p className="mt-3 text-xs opacity-45 font-sans">
          {trackFailed
            ? `couldn't load this track — add the file at ${track.audio} and try again.`
            : "playback isn't configured for this track yet — add its MP3 file in public/audio/."}
        </p>
      </div>
    );
  }

  if (!hasWorkingAudio && track.embed) {
    return (
      <div className={panel}>
        <TrackMeta index={track.index} title={track.title} artist={track.artist} />
        {track.embed.type === "iframe" ? (
          <iframe
            className="mt-4 w-full rounded-lg"
            src={track.embed.url}
            height="80"
            title={`${track.title} on Spotify`}
            loading="lazy"
            allow="encrypted-media"
          />
        ) : (
          <a
            href={track.embed.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-sans tracking-wide border-b border-current/30 pb-0.5 hover:border-current/70 transition-colors"
          >
            listen on Spotify <ExternalIcon />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={panel}>
      <div className="flex items-center gap-4">
        <motion.button
          type="button"
          onClick={() => togglePlayback(track)}
          whileTap={{ scale: 0.88 }}
          aria-label={isTrackPlaying ? "Pause" : "Play"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/25 hover:border-current/60 transition-colors"
        >
          {isTrackPlaying ? <PauseIcon /> : <PlayIcon />}
        </motion.button>
        <TrackMeta index={track.index} title={track.title} artist={track.artist} />
      </div>

      <div className="mt-4 flex items-center gap-3 font-sans text-[0.7rem] tabular-nums opacity-70">
        <span>{formatTime(isActive ? currentTime : 0)}</span>
        <input
          type="range"
          className="album-range"
          min={0}
          max={isActive ? duration || 0 : 0}
          value={isActive ? Math.min(currentTime, duration || 0) : 0}
          onChange={(event) => seek(Number(event.target.value))}
          aria-label="Seek"
          disabled={!isActive || !duration}
        />
        <span>{formatTime(isActive ? duration : 0)}</span>
      </div>

      <div className="mt-3 hidden sm:flex items-center gap-2 w-28 opacity-60">
        <input
          type="range"
          className="album-range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Volume"
        />
      </div>
    </div>
  );
}
