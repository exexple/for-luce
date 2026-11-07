export default function PageHeader({ kicker, heading, accentClass = "" }) {
  return (
    <header>
      {kicker && (
        <p
          className={`font-sans text-[0.7rem] tracking-widest2 uppercase mb-4 ${accentClass}`}
        >
          {kicker}
        </p>
      )}
      {heading && (
        <h1 className="font-serif text-6xl sm:text-7xl leading-[0.95]">
          {heading}
        </h1>
      )}
    </header>
  );
}
