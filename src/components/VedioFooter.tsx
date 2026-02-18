import { FaPlay, FaCirclePause } from "react-icons/fa6";

import { IoIosExpand } from "react-icons/io";
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from 'react-icons/hi2';
import { NavLink } from "react-router-dom";


interface VedioFooterProps {
    handlePlay: () => void;
    handlePause: () => void;
    handleMute: () => void;
    handleFullscreen: () => void;
    isMuted: boolean;
}
export default function VedioFooter({ handlePlay, handlePause, handleMute, handleFullscreen, isMuted }: VedioFooterProps) {

    const data = [
        { id: 1, name: "Home", Link: "/home" },
        { id: 2, name: "Walkthrough", Link: "/walkthrough" },
        { id: 3, name: "Explore Homes", Link: "/explore" },
        { id: 4, name: "Gallery", Link: "/gallery" },
    ]
    return (<>

        <footer className="absolute bottom-0 bg-black/50 w-full">
            <div className="w-full h-14 flex justify-between ">
                {/* Controls */}
                <div className="w-full md:w-[20%] flex justify-center gap-6 py-3 bg-gradient-to-r from-white/90 to-white/80  shadow-lg text-black font-semibold">
                    <button onClick={handlePlay} className="hover:text-orange-400 transition">
                        <FaPlay size={20} />
                    </button>
                    <button onClick={handlePause} className="hover:text-orange-400 transition">
                        <FaCirclePause size={20} />
                    </button>
                    <button onClick={handleMute} className="hover:text-orange-400 transition">
                        {isMuted ? (
                            <HiOutlineSpeakerXMark size={20} /> // Muted icon
                        ) : (
                            <HiOutlineSpeakerWave size={20} /> // Unmuted icon
                        )}
                    </button>
                    <button onClick={handleFullscreen} className="hover:text-orange-400 transition">
                        <IoIosExpand size={22} />
                    </button>
                </div>
                <div className="flex gap-7 justify-center items-center w-[80%] flex-nowrap  p-5 ">
                    {data.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.Link}
                            className={({ isActive }) =>
                                `
      text-[rgb(244,154,67)]
      hover:text-white
      uppercase
      text-sm
      tracking-wide
      leading-[13px]
      transition
      ${isActive ? "text-white/70 " : ""}
      `
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}


                </div>

            </div>

        </footer>
    </>
    )
}