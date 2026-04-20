"use client";
import React, { useRef, useState } from "react";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative bg-slate-950 py-16">
      {/* Section header */}
      <div className="text-center mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
          See It In Action
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          The full platform,{" "}
          <span className="text-cyan-400">in 60 seconds.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          From sales pipeline to homeowner portal — watch how Cornerstone runs your entire operation.
        </p>
      </div>

      {/* Video container */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
          <video
            ref={videoRef}
            src="/video/cornerstone-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />

          {/* Mute/unmute button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-black/80 transition-all duration-200"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                Click for audio
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                Mute
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
