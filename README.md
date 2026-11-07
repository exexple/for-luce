# For Luce — Shivi's Album

A small multi-page digital album with five song pages, six photographs, and a final Side B page.

## 1. Install dependencies

Requires Node.js 18+.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

## 3. Add the two background videos

Place the videos in `public/videos/` using these exact filenames:

```text
cover-hero.mp4
side-b-hero.mp4
```

`cover-hero.mp4` appears behind the opening screen. `side-b-hero.mp4` appears behind the Side B heading. Both videos autoplay silently, loop, and play inline on mobile. Their audio is muted; music is handled separately by the album player.

## 4. Keep or replace the six photographs

The six existing photographs are in `public/images/luce/`:

```text
photo-01.jpg   photo-02.jpg   photo-03.jpg
photo-04.jpg   photo-05.jpg   photo-06.jpg
```

They have been moved without changing the image files. Their order remains the same: the first five photographs belong to the five songs, and the sixth is used on Side B. To use different images, replace the matching file while keeping its filename, or update `image.src` in `src/data/album.js`.

## 5. Add the song files

Put the MP3 files in `public/audio/` using these filenames:

```text
chandni.mp3
fade-into-you.mp3
line-without-a-hook.mp3
mrs-magic-strings.mp3
heaven-is-you.mp3
```

The first four are placeholders for the files you will add. The archive already contains `heaven-is-you.mp3` from the previous version, and that existing file is still mapped to track five. Replace it if you want to use a different audio file for that track.

The player uses one shared audio element across the album. Pressing **Press play** on the opening screen starts Chandni. After playback has been started once, choosing another song from the index automatically switches to and plays that song. Browser autoplay rules still require the first playback to begin from a user gesture, which is why the opening button is used.

Only add audio files you have the right to use or distribute.

## 6. Add your paragraphs

All page copy is intentionally left blank for you to write. Add your paragraphs to the relevant `copy` arrays in:

```text
src/data/album.js
```

The cover title, site name, subtitle, hero video paths, track names, and Side B details are in the same file.

## 7. Build for production

```bash
npm run build
```

Output goes to `dist/`.

## 8. Deploy

This project is configured for Vite and includes `vercel.json` for React Router route rewrites. On Vercel, use:

- Build command: `npm run build`
- Output directory: `dist`

The repository's GitHub Pages URL or repository name is not changed automatically by editing this local project. Update those separately if you decide to rename or move the GitHub repository.

## Project structure

```text
for-luce/
├── public/
│   ├── audio/            ← MP3 files
│   ├── images/luce/      ← six existing photographs
│   └── videos/           ← the two muted hero videos
├── src/
│   ├── components/       ← reusable UI, video hero, player, photo frame
│   ├── context/          ← shared album music playback
│   ├── pages/            ← one page per song plus cover and Side B
│   ├── data/             ← album.js and themes.js
│   ├── hooks/
│   └── styles/
├── vercel.json
└── README.md
```
