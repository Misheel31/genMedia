import { useEffect, useMemo, useRef } from "react";

const VIDEO_PLAY_EVENT = "genmedia:video-play";

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

const cleanVideoSource = (src) => {
  if (!src) return "";

  return src.trim().replace(/^["']|["']$/g, "");
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

  if (value.startsWith("/")) {
    return `${window.location.origin}${value}`;
  }

  return value;
};

function VideoPlayer({
  src,
  poster = "",
  className = "",
  title = "GenMedia Portfolio Video",
}) {
  const videoRef = useRef(null);

  const cleanedSrc = useMemo(() => cleanVideoSource(src), [src]);

  const videoType = useMemo(() => detectVideoType(cleanedSrc), [cleanedSrc]);

  const resolvedVideoUrl = useMemo(
    () => resolveVideoUrl(cleanedSrc),
    [cleanedSrc],
  );

  // Pause other website-hosted videos when this video starts playing.
  useEffect(() => {
    const currentVideo = videoRef.current;

    if (!currentVideo) return;

    const handleOtherVideoPlay = (event) => {
      const playingVideo = event.detail;

      if (playingVideo && playingVideo !== currentVideo) {
        currentVideo.pause();
      }
    };

    window.addEventListener(VIDEO_PLAY_EVENT, handleOtherVideoPlay);

    return () => {
      window.removeEventListener(VIDEO_PLAY_EVENT, handleOtherVideoPlay);
    };
  }, [cleanedSrc, videoType]);

  if (!cleanedSrc) {
    return (
      <div
        className={`flex aspect-video items-center justify-center bg-[#2C2C2C] text-sm text-white/60 ${className}`}
      >
        No video available
      </div>
    );
  }

  // =====================================================
  // YOUTUBE
  // =====================================================

  if (videoType === "youtube") {
    const youtubeId = getYouTubeId(cleanedSrc);

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

  // =====================================================
  // VIMEO
  // =====================================================

  if (videoType === "vimeo") {
    const vimeoId = getVimeoId(cleanedSrc);

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

  // =====================================================
  // WEBSITE / EXTERNAL VIDEO
  // =====================================================

  return (
    <video
      ref={videoRef}
      src={resolvedVideoUrl}
      poster={poster || undefined}
      controls
      preload="metadata"
      playsInline
      className={`h-full w-full object-contain ${className}`}
      onPlay={(event) => {
        // Tell every other VideoPlayer to pause.
        window.dispatchEvent(
          new CustomEvent(VIDEO_PLAY_EVENT, {
            detail: event.currentTarget,
          }),
        );
      }}
      onLoadedMetadata={(event) => {
        console.log("Video loaded successfully");
        console.log("Original source:", src);
        console.log("Cleaned source:", cleanedSrc);
        console.log("Resolved source:", event.currentTarget.currentSrc);
        console.log("Duration:", event.currentTarget.duration);
      }}
      onError={(event) => {
        console.error("Video failed to load.");
        console.error("Original source:", src);
        console.error("Cleaned source:", cleanedSrc);
        console.error("Resolved source:", event.currentTarget.currentSrc);
        console.error("Video error:", event.currentTarget.error);
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
