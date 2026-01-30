import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

const ONE_HOUR = 60 * 60 * 1000;

export default function IntroPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [, setLocation] = useLocation();

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [checkedAudio, setCheckedAudio] = useState(false);

  // ⏱ Skip intro if played recently
  useEffect(() => {
    const last = localStorage.getItem("introPlayedA");
    if (!last) return;

    if (Date.now() - Number(last) < ONE_HOUR) {
      setLocation("/home");
    }
  }, [setLocation]);

  // 🔊 Try auto-enable audio silently
  useEffect(() => {
    const tryEnableAudio = async () => {
      const video = videoRef.current;
      if (!video) return;

      try {
        video.muted = false;
        video.volume = 1;

        await video.play();

        // ✅ Browser allowed audio
        setSoundEnabled(true);
      } catch {
        // ❌ Browser blocked audio
        video.muted = true;
        setSoundEnabled(false);
      }

      setCheckedAudio(true);
    };

    setTimeout(tryEnableAudio, 300);
  }, []);

  const handleEnded = () => {
    localStorage.setItem("introPlayedAt", Date.now().toString());
    setLocation("/home");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
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
          height: "100%",
          objectFit: "cover",
          background: "black",
        }}
      />

      {/* 🔊 AUTO STATUS INDICATOR */}
      {checkedAudio && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            padding: "6px 12px",
            borderRadius: 20,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            fontSize: 14,
          }}
        >
          {soundEnabled ? "🔊 Sound On" : "🔇 Sound Off"}
        </div>
      )}
    </div>
  );
}
