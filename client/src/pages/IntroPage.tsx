import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

const ONE_HOUR = 60 * 60 * 1000; // 1 hour in ms

export default function IntroPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [, setLocation] = useLocation();
  const [soundEnabled, setSoundEnabled] = useState(false);

  // ⏱ Check last played time
  useEffect(() => {
    const lastPlayed = localStorage.getItem("introPlayed");

    if (lastPlayed) {
      const lastTime = parseInt(lastPlayed, 10);
      const now = Date.now();

      // If played within 1 hour → skip intro
      if (now - lastTime < ONE_HOUR) {
        setLocation("/home");
        return;
      }
    }
  }, [setLocation]);

  // 🔊 Enable sound after first user interaction
  useEffect(() => {
    const enableSound = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});

      setSoundEnabled(true);

      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);
    window.addEventListener("keydown", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

  // 🎬 When video ends
  const handleEnded = () => {
    localStorage.setItem("introPlayedAt", Date.now().toString());
    setLocation("/home");
  };

  return (
    <video
      ref={videoRef}
      src="/video/experiai.mp4"
      autoPlay
      muted={!soundEnabled}
      playsInline
      preload="auto"
      onEnded={handleEnded}
      style={{
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        background: "black",
      }}
    />
  );
}
