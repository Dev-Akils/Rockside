import { useRef, useState } from "react";
import { HeroVideo } from "../HeroComponent/HeroVideo";
import VideoFooter from "../VedioFooter";

type ReusableVideoPlayerProps = {
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
};

const ReusableVideoPlayer: React.FC<ReusableVideoPlayerProps> = ({
  src,
  poster,
  title,
  subtitle,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => videoRef.current?.play();

  const handlePause = () => videoRef.current?.pause();

  const handleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    const video = videoRef.current as any;

    if (!video) return;

    video.requestFullscreen?.() ||
      video.webkitRequestFullscreen?.();
  };

  return (
    <main className="relative">

      <HeroVideo
        ref={videoRef}
        src={src}
        poster={poster}
        title={title}
        subtitle={subtitle}
      />

      <div className="absolute bottom-0 w-full z-10 bg-black/70 flex flex-col md:flex-row md:items-center">
        <VideoFooter
          handlePlay={handlePlay}
          handlePause={handlePause}
          handleMute={handleMute}
          handleFullscreen={handleFullscreen}
          isMuted={isMuted}
        />
      </div>

    </main>
  );
};

export default ReusableVideoPlayer;
