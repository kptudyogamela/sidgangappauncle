'use client';

import { useRef, useState, useEffect } from 'react';

interface CustomVideoPlayerProps {
  src: string;
  title?: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src, title }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Start with muted true, since video will start muted
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Play/Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;  // <-- start muted here
      videoRef.current.autoplay = true;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));

      // Also update state to reflect video muted status
      setIsMuted(videoRef.current.muted);
    }
  }, []);

  return (
    <div className="relative w-full aspect-[7/3] rounded-lg overflow-hidden shadow-md bg-black">
      {/* Controls */}
      <div className="absolute top-2 left-2 flex space-x-4 bg-black bg-opacity-50 rounded p-2 z-20">
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="text-white hover:text-red-500 focus:outline-none focus:ring-0"
          type="button"
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6" />
          )}
        </button>

        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="text-white hover:text-red-500 focus:outline-none focus:ring-0"
          type="button"
        >
          {isMuted ? (
            <VolumeOffIcon className="w-6 h-6" />
          ) : (
            <VolumeUpIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Video element */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        title={title}
        controls={false}
      />
    </div>
  );
};

// Icons as React components (SVG)

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const VolumeUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z" />
  </svg>
);

const VolumeOffIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.2l-3.25-3.25H7v6h2.75l4.25 4.25v-2.2c1.48-.74 2.5-2.26 2.5-4.03zM19 12c0 1.12-.38 2.14-1.01 2.97l1.43 1.43A7.947 7.947 0 0021 12c0-2.21-.9-4.21-2.35-5.65l-1.42 1.42A5.978 5.978 0 0119 12zM3.41 2.86L2 4.27l5 5V15h4l5 5v-5.73l4.73 4.73 1.41-1.41L3.41 2.86z" />
  </svg>
);

export default CustomVideoPlayer;
