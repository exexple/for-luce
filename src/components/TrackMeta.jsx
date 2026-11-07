export default function TrackMeta({ index, title, artist }) {
  return (
    <div className="font-sans leading-tight">
      <p className="text-sm">
        <span className="opacity-50">{index} — </span>
        <span className="font-medium">{title}</span>
      </p>
      {artist ? <p className="text-xs opacity-50">{artist}</p> : null}
    </div>
  );
}
