import { useState } from 'react'
import bgImage from '../assets/gallery/Balcony_5K.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { floorData } from '../data/FloorData';
export default function Explore() {

    

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content wrapper */}
            <div className="relative z-10 h-full flex flex-col md:flex-row
             items-center justify-around gap-8 px-6">

                {/* LEFT PANEL */}
                <div className="w-full md:w-1/2 max-w-lg  p-8 
                rounded-2xl text-white flex flex-col gap-5 ">
                    <button className="bg-[rgb(215,140,32)]  hover:bg-[rgb(222,159,70)] w-[70%] py-3 
                    text-sm font-bold rounded transition-colors"
                        onClick={() => navigate(-1)}
                    >
                        ← Back
                    </button>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Explore <span className="text-[rgb(215,140,32)] ">Our Homes</span>
                        </h1>
                        <p className="text-gray-300 leading-relaxed">
                            Discover the perfect blend of luxury and comfort. Explore our collection
                            of exquisite properties designed to elevate your lifestyle.
                        </p>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="w-full md:w-1/4 max-w-md -mt-[11%]
                p-6 rounded-2xl text-white flex flex-col gap-4 
                 self-center">
                    {/* <h3 backdrop-blur-sm className="text-lg font-semibold border-b border-white/20 pb-2">Select Your Unit</h3> */}

                    <button
                        className={`w-[80%] py-3 font-bold rounded transition-all duration-300 ${open ? 'bg-white/90 text-black' : 'bg-[rgb(215,140,32)] text-white hover:bg-[rgb(222,159,70)]'
                            }`}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? 'Close Towers' : 'Towers'}
                    </button>

                    {/* ANIMATED DROPDOWN CONTAINER */}
                    <div
                        className={`overflow-hidden w-[80%] transition-all duration-500 
                            ease-in-out  bg-black/70 ${open ? "max-h-[350px] opacity-100 mt-2" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="flex flex-col gap-2 p-2 bg-white/5 
                        rounded-lg border border-white/10 max-h-[340px] overflow-y-auto custom-scrollbar">
                            {floorData.map((floor) => (
                                <Link to={`/floorplan/${floor.id}`}>  <button
                                    key={floor.id}
                                    className="w-full text-left px-4 py-3 rounded-md 
                                    bg-white/10 hover:bg-orange-500 hover:pl-6 transition-all duration-200 text-sm font-medium"
                                >
                                    {floor.name}
                                </button></Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline CSS for a cleaner scrollbar 
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
            `}</style> */}
        </div>
    );
}