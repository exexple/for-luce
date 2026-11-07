export default function VideoHero({ src, className = "", children }) {
  return (
    <section className={`relative isolate flex items-center justify-center overflow-hidden bg-plum-deep ${className}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-plum-deep/65"
        aria-hidden="true"
      />
      <div className="relative z-10 flex w-full items-center justify-center">
        {children}
      </div>
    </section>
  );
}
