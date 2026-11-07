import PageHeader from "./PageHeader";
import PhotoFrame from "./PhotoFrame";
import SongPlayer from "./SongPlayer";
import PageTransition from "./PageTransition";
import { themes } from "../data/themes";

export default function TrackPage({ track }) {
  const theme = themes[track.theme];
  // Alternate the image side by track parity, so the album doesn't repeat
  // the exact same composition three times in a row.
  const flip = Number(track.index) % 2 === 0;

  return (
    <PageTransition className={`min-h-screen ${theme.bg} ${theme.text} px-5 sm:px-10 pt-28 pb-24`}>
      <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <div className={flip ? "md:order-2" : "md:order-1"}>
          <PhotoFrame image={track.image} />
        </div>
        <div className={flip ? "md:order-1" : "md:order-2"}>
          <PageHeader
            kicker={track.kicker}
            heading={track.heading}
            accentClass={theme.kicker}
          />
          <div className="mt-6 space-y-3 font-serif text-xl sm:text-2xl leading-relaxed max-w-md">
            {track.copy.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="mt-10 max-w-sm">
            <SongPlayer
              track={track}
              accentClass={theme.accent}
              panelClass={theme.panelBg}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
