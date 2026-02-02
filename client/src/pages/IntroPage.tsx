import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

const ONE_HOUR = 60 * 60 * 1000;

export default function IntroPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [, setLocation] = useLocation();
  const [soundEnabled, setSoundEnabled] = useState(false);

  // ⏱ Skip intro if played within 1 hour
  useEffect(() => {
    const lastPlayed = localStorage.getItem("introPlayedAt");

    if (lastPlayed) {
      const lastTime = parseInt(lastPlayed, 10);
      if (Date.now() - lastTime < ONE_HOUR) {
        setLocation("/home");
      }
    }
  }, [setLocation]);

  // 🔊 Enable sound on first interaction
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

  const handleEnded = () => {
    localStorage.setItem("introPlayedAt", Date.now().toString());
    setLocation("/home");
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src="/video/experiai.mp4"
        autoPlay
        muted={!soundEnabled}
        playsInline
        preload="auto"
        onEnded={handleEnded}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "100vh",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
