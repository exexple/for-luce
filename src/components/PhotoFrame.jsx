import { useState } from "react";

const VARIANTS = {
  rounded: {
    wrapper: "w-full max-w-xl mx-auto md:mx-0",
    img: "aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-25px_rgba(43,39,36,0.35)]",
  },
  polaroid: {
    wrapper:
      "w-full max-w-sm mx-auto md:mx-0 bg-ivory p-3 pb-9 -rotate-2 shadow-[0_25px_50px_-20px_rgba(43,39,36,0.3)]",
    img: "aspect-[4/5] w-full object-cover",
  },
  cinematic: {
    wrapper: "w-full",
    img: "aspect-[21/9] w-full rounded-sm object-cover",
  },
  floating: {
    wrapper: "w-full max-w-md mx-auto",
    img: "aspect-[3/4] w-full rounded-2xl object-cover shadow-[0_25px_45px_-25px_rgba(43,39,36,0.25)]",
  },
  portrait: {
    wrapper: "w-full max-w-xs mx-auto",
    img: "aspect-[3/4] w-full rounded-lg object-cover shadow-[0_30px_55px_-25px_rgba(43,39,36,0.3)]",
  },
  "small-float": {
    wrapper: "w-40 sm:w-48 mx-auto",
    img: "aspect-square w-full rounded-xl object-cover shadow-[0_20px_35px_-20px_rgba(43,39,36,0.3)]",
  },
};

export default function PhotoFrame({ image, className = "" }) {
  const [failed, setFailed] = useState(false);
  const variant = VARIANTS[image?.variant] || VARIANTS.rounded;

  return (
    <div
      className={`${variant.wrapper} ${className} transition-transform duration-700 ease-album hover:-translate-y-1`}
    >
      {failed ? (
        <div
          className={`${variant.img} flex items-center justify-center bg-ink/5 text-center text-xs tracking-wide text-ink/40 p-6`}
        >
          add {image?.src?.split("/").pop() || "a photo"} to
          public/images/luce/
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={variant.img}
        />
      )}
    </div>
  );
}
