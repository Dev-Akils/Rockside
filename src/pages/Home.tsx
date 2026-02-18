import ReusableVideoPlayer from "../components/HeroComponent/ReusableVedioPlayer";
import video from "../assets/vedio1.mp4";

const HomePage = () => {
  return (
    <ReusableVideoPlayer
      src={video}
      poster="/assets/images/video-placeholder.jpg"
      title="Build the Future"
      subtitle="Experience the next generation of React development with Type-Safe architecture."
    />
  );
};

export default HomePage;
