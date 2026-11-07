import PageHeader from "../components/PageHeader";
import PhotoFrame from "../components/PhotoFrame";
import PageTransition from "../components/PageTransition";
import VideoHero from "../components/VideoHero";
import { sideB } from "../data/album";
import { themes } from "../data/themes";

const theme = themes.sideB;

export default function SideB() {
  return (
    <PageTransition
      className={`min-h-screen ${theme.bg} ${theme.text} px-5 pb-32 flex flex-col items-center text-center`}
    >
      <VideoHero
        src={sideB.heroVideo}
        className="-mx-5 mb-10 min-h-[64vh] w-[calc(100%+2.5rem)]"
      >
        <div className="px-5 py-20 text-ivory">
          <PageHeader heading={sideB.heading} accentClass="text-blush" />
        </div>
      </VideoHero>

      <div className="mt-2">
        <PhotoFrame image={sideB.image} />
      </div>

      <div className="mt-10 space-y-3 font-serif text-xl sm:text-2xl leading-relaxed max-w-sm">
        {sideB.copy.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <p className="mt-8 font-serif italic text-lg opacity-70">{sideB.dedication}</p>

      <div className="mt-16 space-y-1 font-sans text-xs tracking-widest2 uppercase opacity-40">
        {sideB.closing.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </PageTransition>
  );
}
