import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

export default function IntroPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [, setLocation] = useLocation();
  const [soundEnabled, setSoundEnabled] = useState(false);

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
    setLocation("/home", { replace: true });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <h1 className="sr-only">Welcome to ExperiAI Labs</h1>
      <video
        ref={videoRef}
        src="/video/experiai.mp4"
        controls
        aria-label="ExperiAI Labs introduction"
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
      <a href="/home" className="absolute top-6 right-6 rounded bg-black/80 px-4 py-2 text-white">
        Skip intro
      </a>
    </div>
  );
}
