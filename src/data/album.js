// Album content lives here so the photos, songs, and personal copy are easy to edit.
export const albumMeta = {
  siteName: "for luce",
  title: "shivi's album",
  eyebrow: "a little corner of my heart",
  subtitle: "a few things that were tailored specifically for you 🌺.",
  heroVideo: "/videos/cover-hero.mp4",
};

// Add your own paragraphs to each `copy` array when they are ready.
// Add the matching MP3 files to public/audio/ using the filenames below.
export const tracks = [
  {
    id: "chandni",
    route: "/chandni",
    theme: "chandni",
    index: "01",
    trait: "warmth",
    title: "Chandni",
    artist: "",
    kicker: "01 / warmth",
    heading: "chandni",
    copy: [],
    image: {
      src: "/images/luce/photo-01.jpg",
      alt: "Album photograph 1",
      variant: "rounded",
    },
    audio: "/audio/chandni.mp3",
    embed: null,
  },
  {
    id: "fade-into-you",
    route: "/fade-into-you",
    theme: "fadeIntoYou",
    index: "02",
    trait: "wonder",
    title: "Fade Into You",
    artist: "Mazzy Star",
    kicker: "02 / wonder",
    heading: "fade into you",
    copy: [],
    image: {
      src: "/images/luce/photo-02.jpg",
      alt: "Album photograph 2",
      variant: "polaroid",
    },
    audio: "/audio/fade-into-you.mp3",
    embed: null,
  },
  {
    id: "line-without-a-hook",
    route: "/line-without-a-hook",
    theme: "lineWithoutHook",
    index: "03",
    trait: "depth",
    title: "Line Without a Hook",
    artist: "Ricky Montgomery",
    kicker: "03 / depth",
    heading: "line without a hook",
    copy: [],
    image: {
      src: "/images/luce/photo-03.jpg",
      alt: "Album photograph 3",
      variant: "cinematic",
    },
    audio: "/audio/line-without-a-hook.mp3",
    embed: null,
  },
  {
    id: "mrs-magic",
    route: "/mrs-magic",
    theme: "mrsMagic",
    index: "04",
    trait: "comfort",
    title: "Mrs Magic (Strings Version)",
    artist: "Strawberry Guy",
    kicker: "04 / comfort",
    heading: "mrs magic",
    copy: [],
    image: {
      src: "/images/luce/photo-04.jpg",
      alt: "Album photograph 4",
      variant: "floating",
    },
    audio: "/audio/mrs-magic-strings.mp3",
    embed: null,
  },
  {
    id: "heaven-is-you",
    route: "/heaven-is-you",
    theme: "heaven",
    index: "05",
    trait: null,
    title: "Heaven Is You",
    artist: "Joshua Bassett",
    kicker: "05 / heaven is you",
    heading: null,
    copy: [],
    image: {
      src: "/images/luce/photo-05.jpg",
      alt: "Album photograph 5",
      variant: "portrait",
    },
    audio: "/audio/heaven-is-you.mp3",
    embed: null,
  },
];

export const sideB = {
  route: "/side-b",
  theme: "sideB",
  heading: "side b",
  heroVideo: "/videos/side-b-hero.mp4",
  copy: [],
  dedication: "for luce.",
  closing: ["end of album.", "for now."],
  image: {
    src: "/images/luce/photo-06.jpg",
    alt: "Album photograph 6",
    variant: "small-float",
  },
};

export const navOrder = [
  { label: "01 chandni", route: "/chandni" },
  { label: "02 fade into you", route: "/fade-into-you" },
  { label: "03 line without a hook", route: "/line-without-a-hook" },
  { label: "04 mrs magic", route: "/mrs-magic" },
  { label: "05 heaven is you", route: "/heaven-is-you" },
  { label: "side b", route: "/side-b" },
];

export const getTrackByRoute = (route) => tracks.find((track) => track.route === route);
