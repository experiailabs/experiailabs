import { useEffect, useRef, useState } from "react";

const VideoPlayerWithCooldown = ({
  src,
  gapHours = 24, // hour gap before next play
}) => {
  const videoRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const lastPlayed = localStorage.getItem("videoLastPlayed");
    const now = new Date().getTime();

    if (lastPlayed) {
      const diffHours = (now - parseInt(lastPlayed, 10)) / (1000 * 60 * 60);
      if (diffHours >= gapHours) {
        setShouldPlay(true);
        localStorage.setItem("videoLastPlayed", now.toString());
      } else {
        setShouldPlay(false);
      }
    } else {
      // First-time play
      setShouldPlay(true);
      localStorage.setItem("videoLastPlayed", now.toString());
    }
  }, [gapHours]);

  useEffect(() => {
    if (shouldPlay && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Video play failed:", err);
      });
    }
  }, [shouldPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      style={{ width: "100%", height: "auto" }}
      muted
      autoPlay={shouldPlay}
      playsInline
    />
  );
};

export default VideoPlayerWithCooldown;
