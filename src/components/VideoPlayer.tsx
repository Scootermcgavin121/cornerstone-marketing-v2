"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";

export function VideoPlayer({ src, label }: { src: string; label?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(false);

  // Show controls then auto-hide after 2.5s of inactivity
  const revealControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setControlsVisible(false), 2500);
  }, []);

  const cancelHide = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    setControlsVisible(true);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setProgress(v.currentTime);
    const onMeta = () => setDuration(v.duration);
    const onDurationChange = () => setDuration(v.duration);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    // Pick up duration if it was already loaded before listener attached
    if (v.readyState >= 1 && !isNaN(v.duration) && v.duration > 0) {
      setDuration(v.duration);
    }

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("durationchange", onDurationChange);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("durationchange", onDurationChange);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  // Cleanup hide timer on unmount
  useEffect(() => () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
    revealControls();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
    revealControls();
  };

  const seek = (clientX: number, rect: DOMRect) => {
    const v = videoRef.current;
    if (!v) return;
    // Use videoRef's duration directly so we don't depend on React state
    // having caught up (fixes "0:00 / 0:00" race causing scrub to snap to 0)
    const dur = v.duration || duration;
    if (!dur || isNaN(dur)) return;
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    v.currentTime = pct * dur;
    setProgress(v.currentTime);
  };

  const onProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    seek(e.clientX, e.currentTarget.getBoundingClientRect());
    revealControls();
  };

  const onProgressTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.touches.length === 0) return;
    seek(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
    revealControls();
  };

  const fmt = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    revealControls();
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 group"
      onMouseEnter={revealControls}
      onMouseMove={revealControls}
      onMouseLeave={() => {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => setControlsVisible(false), 600);
      }}
      onTouchStart={revealControls}
    >
      {label && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 text-xs text-slate-300 font-semibold pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {label}
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full cursor-pointer"
        onClick={togglePlay}
      />

      {/* Controls overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 transition-opacity duration-300 ${controlsVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onMouseEnter={cancelHide}
        onMouseMove={cancelHide}
      >
        {/* Progress bar */}
        <div
          className="w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer hover:h-2.5 transition-all"
          onClick={onProgressClick}
          onTouchStart={onProgressTouch}
          onTouchMove={onProgressTouch}
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={Math.floor(duration) || 100}
          aria-valuenow={Math.floor(progress)}
        >
          <div
            className="h-full bg-cyan-400 rounded-full relative pointer-events-none"
            style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Play/pause */}
          <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white hover:text-cyan-400 transition-colors" aria-label={playing ? "Pause" : "Play"}>
            {playing ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>

          {/* Time */}
          <span className="text-white/60 text-xs font-mono">{fmt(progress)} / {fmt(duration)}</span>

          <div className="flex-1" />

          {/* Fullscreen */}
          <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} className="text-white/80 hover:text-white transition-colors" aria-label="Fullscreen">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>

          {/* Mute */}
          <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-xs font-semibold">
            {muted ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
                </svg>
                Click for audio
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                </svg>
                Mute
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
