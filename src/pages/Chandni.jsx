import TrackPage from "../components/TrackPage";
import { tracks } from "../data/album";

const track = tracks.find((item) => item.id === "chandni");

export default function Chandni() {
  return <TrackPage track={track} />;
}
