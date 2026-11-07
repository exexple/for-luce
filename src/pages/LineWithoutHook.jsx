import PageHeader from "../components/PageHeader";
import PhotoFrame from "../components/PhotoFrame";
import SongPlayer from "../components/SongPlayer";
import PageTransition from "../components/PageTransition";
import { tracks } from "../data/album";
import { themes } from "../data/themes";

const track = tracks.find((item) => item.id === "line-without-a-hook");
const theme = themes.lineWithoutHook;

export default function LineWithoutHook() {
  return (
    <PageTransition className={`min-h-screen ${theme.bg} ${theme.text} pt-20 pb-24`}>
      <PhotoFrame image={track.image} />

      <div className="mx-auto max-w-xl px-5 sm:px-0 mt-12 text-center sm:text-left">
        <PageHeader
          kicker={track.kicker}
          heading={track.heading}
          accentClass={theme.kicker}
        />
        <div className="mt-6 space-y-3 font-serif text-xl sm:text-2xl leading-relaxed mx-auto sm:mx-0 max-w-md">
          {track.copy.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="mt-10 mx-auto sm:mx-0 max-w-sm">
          <SongPlayer
            track={track}
            accentClass={theme.accent}
            panelClass={theme.panelBg}
          />
        </div>
      </div>
    </PageTransition>
  );
}
