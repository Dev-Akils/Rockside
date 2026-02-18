import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import bgLogo1 from "../assets/Rockside1-Logo.jpg";
import bgLogo2 from "../assets/Rockside1-Logo.jpg";
import audioFile from "../assets/audio1.mp3";

import EnableAudioPopup from "../components/EnableAudioPopup";

const EntrancePage: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [showAudio, setShowAudio] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  const handleYes = (): void => {
    sessionStorage.setItem("popupSeen", "true");

    setShowPopup(false);
    setShowAudio(true);

    // Safe play
    audioRef.current?.play().catch(() => {
      console.warn("Audio autoplay blocked");
    });
  };

  const handleNo = (): void => {
    sessionStorage.setItem("popupSeen", "true");
    setShowPopup(false);
  };

  const handleExplore = (): void => {
    navigate("/home");
  };

  // Show popup only first time
  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("popupSeen");

    if (alreadySeen) {
      setShowPopup(false);
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen p-4">

      {/* Popup */}
      {showPopup && (
        <EnableAudioPopup
          onYes={handleYes}
          onNo={handleNo}
        />
      )}

      {/* Hidden Audio */}
      {showAudio && (
        <audio ref={audioRef} autoPlay>
          <source src={audioFile} type="audio/mpeg" />
          Your browser does not support audio.
        </audio>
      )}

      {/* Top Logo */}
     {showPopup && (  <img
        src={bgLogo1}
        alt="Rockside Logo Top"
        className="w-[200px] h-auto object-contain"
      /> )}

      {/* Middle Image */}
      <img
        src={bgLogo2}
        alt="Rockside Logo Center"
        className="w-[600px] h-auto object-contain -mt-10"
      />

      {/* Explore Button */}
      {!showPopup && (
        <button
          onClick={handleExplore}
          className="bg-[#616161] font-bold text-xl text-white 
          hover:text-black hover:bg-gradient-to-r hover:from-white/90 hover:to-white/80 px-8 
          xl:px-28 lg:px-28 md:px-28 py-5 shadow-md transition-all rounded-sm duration-300 ease-in-out -mt-10"
        >
          Click Here to Explore
        </button>
      )}
    </div>
  );
};

export default EntrancePage;
