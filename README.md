# Alexandre Brown

A standalone academic website served directly from the repository root.

## Preview

From the repository root, run:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser. You can also open `index.html` directly.

## Publish

Publish the repository root with GitHub Pages. The `.nojekyll` file enables static serving without Jekyll. No build step or package installation is needed.

## Edit

- `index.html` contains the introduction, News, research direction, featured publication, visual projects, and background
- `publications.html` contains the complete publication list and citation controls
- `assets/style.css` contains the layout and colors
- `assets/site.js` contains the photo viewer and citation copy button
- `assets/segdac.bib` contains the downloadable citation
- `assets/images/` contains optimized personal photos
- `assets/fonts/` contains local fonts and their licenses

The site loads no third-party scripts or remote fonts. Photo links and publication links work without JavaScript.

Education and employment details are maintained directly in `index.html`.

## Photo sources

| Website image | Original |
| --- | --- |
| G1 Playground | PXL_20261028_222107949.jpg |
| Seated G1 | PXL_20250820_175152800.jpg |
| G1 lab | PXL_20261104_221449626.jpg |
| Franka Panda | PXL_20250211_180650087.jpg |
| SegDAC poster | IMG_1032~2.jpeg |
| SegDAC talk | IMG_9763.jpg |
| Portrait | alexbrown.jpeg |

Hardware photographs are personal lab photos. They do not document SegDAC hardware experiments.

## Project media

G1 Zero-Shot is the first project. Its real-world demo, `assets/videos/g1-zero-shot-real-frames.mp4`, emphasizes the third-person recording with a small robot POV alongside it. POV capture timestamps from the run logs restore its variable frame timing, with repeated stand movements used to align it to the third-person recording. The POV uses only real recorded frames, repeated as needed to preserve their capture timing. No temporal interpolation, frame blending, or motion smoothing is applied. Both views play at natural speed in a single 83.6-second video, so playback, seeking, and looping stay synchronized. The third-person view retains the corrected HDR-to-SDR conversion. Only the final combined video and its poster are included in the repository.

VLM-GMT plays `reach_gt.mp4`, `kneel_gt.mp4`, and `walk_to_obj_gt.mp4` from `assets/videos/` in that order, returning to the first video after the last finishes. Playback is muted and automatic, with inline playback and player controls. The poster is linked as `assets/vlm-gmt-poster.pdf`. The EV charging example uses `assets/videos/ev_charging_rl_example.mp4` with muted autoplay, looping, inline playback, and player controls.

Body text ranges from 18 px on mobile to 24 px on ultrawide screens. Content widths expand on large screens while keeping text in readable columns.
