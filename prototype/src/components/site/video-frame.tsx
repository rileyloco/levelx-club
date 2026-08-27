import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function VideoFrame({
  src,
  srcHd,
  poster,
  className,
  overlay = "bg-linear-to-t from-bg via-bg/35 to-bg/10",
  children,
  preload = "metadata",
}: {
  src?: string;
  srcHd?: string;
  poster: string;
  className?: string;
  overlay?: string;
  children?: ReactNode;
  preload?: "none" | "metadata" | "auto";
}) {
  const [ready, setReady] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {src ? (
        <video
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-200",
            ready ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload={preload}
          poster={poster}
          disablePictureInPicture
          onLoadedData={() => setReady(true)}
        >
          {srcHd ? (
            <source src={srcHd} type="video/mp4" media="(min-width: 768px)" />
          ) : null}
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
      {overlay ? <div className={cn("absolute inset-0", overlay)} /> : null}
      {children}
    </div>
  );
}
