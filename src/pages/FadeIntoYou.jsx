import TrackPage from "../components/TrackPage";
import { tracks } from "../data/album";

const track = tracks.find((item) => item.id === "fade-into-you");

export default function FadeIntoYou() {
  return <TrackPage track={track} />;
}
