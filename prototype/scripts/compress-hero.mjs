#!/usr/bin/env node
/**
 * Cut media/level promo.mov from 6s, keep 5s, write faststart MP4s.
 * Requires ffmpeg on PATH. Source is 1080×1920 (portrait).
 *
 *   npm run compress:hero
 */
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const src = resolve(root, "media/level promo.mov");
const videos = resolve(root, "prototype/public/videos");
const poster = resolve(root, "prototype/public/images/hero-poster-5s.jpg");

function run(args) {
  const result = spawnSync("ffmpeg", args, { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

run([
  "-y",
  "-ss",
  "6",
  "-i",
  src,
  "-t",
  "5",
  "-an",
  "-vf",
  "scale=1080:-2",
  "-c:v",
  "libx264",
  "-preset",
  "medium",
  "-crf",
  "26",
  "-pix_fmt",
  "yuv420p",
  "-g",
  "25",
  "-keyint_min",
  "25",
  "-movflags",
  "+faststart",
  resolve(videos, "hero-5s-1080.mp4"),
]);

run([
  "-y",
  "-ss",
  "6",
  "-i",
  src,
  "-t",
  "5",
  "-an",
  "-vf",
  "scale=720:-2",
  "-c:v",
  "libx264",
  "-preset",
  "medium",
  "-crf",
  "28",
  "-pix_fmt",
  "yuv420p",
  "-g",
  "25",
  "-keyint_min",
  "25",
  "-movflags",
  "+faststart",
  resolve(videos, "hero-5s-720.mp4"),
]);

run([
  "-y",
  "-ss",
  "6",
  "-i",
  src,
  "-frames:v",
  "1",
  "-update",
  "1",
  "-q:v",
  "4",
  poster,
]);

console.log("Wrote hero-5s-1080.mp4, hero-5s-720.mp4, hero-poster-5s.jpg");
