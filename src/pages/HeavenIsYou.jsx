import PageHeader from "../components/PageHeader";
import PhotoFrame from "../components/PhotoFrame";
import SongPlayer from "../components/SongPlayer";
import PageTransition from "../components/PageTransition";
import { tracks } from "../data/album";
import { themes } from "../data/themes";

const track = tracks.find((t) => t.id === "heaven-is-you");
const theme = themes.heaven;

export default function HeavenIsYou() {
  return (
    <PageTransition
      className={`min-h-screen ${theme.bg} ${theme.text} px-5 pt-32 pb-28 flex flex-col items-center text-center`}
    >
      <PageHeader kicker={track.kicker} heading={null} accentClass={theme.kicker} />

      <div className="mt-12">
        <PhotoFrame image={track.image} />
      </div>

      <div className="mt-12 space-y-2 font-serif text-2xl sm:text-3xl leading-relaxed max-w-sm">
        {track.copy.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="mt-14 w-full max-w-sm">
        <SongPlayer
          track={track}
          accentClass={theme.accent}
          panelClass={theme.panelBg}
        />
      </div>
    </PageTransition>
  );
}
