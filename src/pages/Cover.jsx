import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import VideoHero from "../components/VideoHero";
import { albumMeta, tracks } from "../data/album";
import { useMusic } from "../context/MusicContext";

export default function Cover() {
  const navigate = useNavigate();
  const { startAlbum } = useMusic();
  const firstTrack = tracks[0];

  const handlePressPlay = () => {
    startAlbum(firstTrack);
    navigate(firstTrack.route);
  };

  return (
    <PageTransition className="min-h-screen bg-plum-deep text-ivory">
      <VideoHero src={albumMeta.heroVideo} className="min-h-screen">
        <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="font-sans text-[0.68rem] sm:text-xs tracking-[0.35em] uppercase text-blush">
            {albumMeta.eyebrow}
          </p>
          <h1 className="mt-8 font-serif text-5xl sm:text-7xl leading-tight">
            {albumMeta.title}
          </h1>
          <p className="mt-6 max-w-xl font-serif text-xl sm:text-2xl leading-relaxed text-ivory/90">
            {albumMeta.subtitle}
          </p>
          <button
            type="button"
            onClick={handlePressPlay}
            className="mt-14 rounded-full border border-blush/80 px-8 py-4 font-sans text-sm tracking-wide text-ivory transition-colors hover:bg-blush/10 focus-visible:bg-blush/10"
          >
            ♫ Press play
          </button>
        </div>
      </VideoHero>
    </PageTransition>
  );
}
