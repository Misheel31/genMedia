import { useMemo } from "react";

const getYouTubeId = (url) => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        return parsed.pathname.split("/")[2] || null;
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/")[2] || null;
      }
    }
  } catch {
    return null;
  }

  return null;
};

const getVimeoId = (url) => {
  try {
    const parsed = new URL(url);

    if (!parsed.hostname.includes("vimeo.com")) {
      return null;
    }

    const parts = parsed.pathname.split("/").filter(Boolean);

    const numericPart = [...parts].reverse().find((part) => /^\d+$/.test(part));

    return numericPart || null;
  } catch {
    return null;
  }
};

const detectVideoType = (src) => {
  if (!src) return "none";

  const value = src.trim().toLowerCase();

  if (
    value.includes("youtube.com/watch") ||
    value.includes("youtube.com/shorts/") ||
    value.includes("youtu.be/") ||
    value.includes("youtube.com/embed/")
  ) {
    return "youtube";
  }

  if (value.includes("vimeo.com/")) {
    return "vimeo";
  }

  return "file";
};

const resolveVideoUrl = (src) => {
  if (!src) return "";

  const value = src.trim();

  /*
   * Website-hosted videos
   *
   * Example stored in MongoDB:
   * /videos/US_KOL_V2.mp4
   *
   * This automatically becomes:
   * http://localhost:5173/videos/US_KOL_V2.mp4
   *
   * locally and:
   * https://thegenmedia.com.np/videos/US_KOL_V2.mp4
   *
   * in production.
   */
  if (value.startsWith("/")) {
    return `${window.location.origin}${value}`;
  }

  /*
   * Absolute URLs such as:
   *
   * https://example.com/video.mp4
   */
  return value;
};

function VideoPlayer({
  src,
  poster = "",
  className = "",
  title = "GenMedia Portfolio Video",
}) {
  const videoType = useMemo(() => detectVideoType(src), [src]);

  const resolvedVideoUrl = useMemo(() => resolveVideoUrl(src), [src]);

  if (!src) {
    return (
      <div
        className={`flex aspect-video items-center justify-center bg-[#2C2C2C] text-sm text-white/60 ${className}`}
      >
        No video available
      </div>
    );
  }

  /*
   * =====================================================
   * YOUTUBE
   * =====================================================
   */

  if (videoType === "youtube") {
    const youtubeId = getYouTubeId(src);

    if (!youtubeId) {
      return (
        <div
          className={`flex aspect-video items-center justify-center bg-[#2C2C2C] px-4 text-center text-sm text-white/70 ${className}`}
        >
          Invalid YouTube URL
        </div>
      );
    }

    return (
      <div
        className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  /*
   * =====================================================
   * VIMEO
   * =====================================================
   */

  if (videoType === "vimeo") {
    const vimeoId = getVimeoId(src);

    if (!vimeoId) {
      return (
        <div
          className={`flex aspect-video items-center justify-center bg-[#2C2C2C] px-4 text-center text-sm text-white/70 ${className}`}
        >
          Invalid Vimeo URL
        </div>
      );
    }

    return (
      <div
        className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  /*
   * =====================================================
   * WEBSITE / EXTERNAL VIDEO
   * =====================================================
   */

  return (
    <video
      src={resolvedVideoUrl}
      poster={poster || undefined}
      controls
      preload="metadata"
      playsInline
      className={`h-full w-full object-contain ${className}`}
      onLoadedMetadata={(event) => {
        console.log("Video loaded successfully");
        console.log("Original source:", src);
        console.log("Resolved source:", event.currentTarget.currentSrc);
        console.log("Duration:", event.currentTarget.duration);
      }}
      onError={(event) => {
        console.error("Video failed to load.");
        console.error("Original source:", src);
        console.error("Resolved source:", event.currentTarget.currentSrc);
        console.error("Video error:", event.currentTarget.error);
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
