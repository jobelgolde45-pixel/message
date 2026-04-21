'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const FADE_DURATION = 1.5;

    const handleTimeUpdate = () => {
      const duration = audio.duration;
      if (!duration || duration <= 0) return;

      const timeRemaining = duration - audio.currentTime;
      if (timeRemaining <= FADE_DURATION) {
        const volume = Math.max(0, timeRemaining / FADE_DURATION);
        audio.volume = volume * volume;
      } else {
        audio.volume = 1;
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/background-music.mp4"
        loop
        preload="auto"
      />
      <button
        onClick={toggleMusic}
        style={{
          position: 'fixed',
          bottom: 10,
          right: 10,
          background: 'rgba(255, 46, 99, 0.9)',
          border: 'none',
          color: 'white',
          padding: '10px 14px',
          borderRadius: 20,
          fontSize: 14,
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          boxShadow: '0 2px 10px rgba(255, 46, 99, 0.4)'
        }}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
}