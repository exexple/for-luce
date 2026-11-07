import TrackPage from "../components/TrackPage";
import { tracks } from "../data/album";

const track = tracks.find((item) => item.id === "mrs-magic");

export default function MrsMagic() {
  return <TrackPage track={track} />;
}
