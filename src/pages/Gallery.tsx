import { useState } from "react";
// import  { LazyLoadImage } from "react-lazy-load-image-component";
import {
    galleryData,

    type GalleryImage,
    type GalleryCategory,
} from "../data/GalleryData";
import Footer from "../components/Footer";


const Gallery: React.FC = () => {
    const [filter, setFilter] = useState<string>(
        galleryData[0]?.name || ""
    );



    // Find selected category
    const selectedCategory = galleryData.find(
        (cat: GalleryCategory) => cat.name === filter
    );

    const images: GalleryImage[] = selectedCategory?.images || [];

    const [openIndex, setOpenIndex] = useState<number | null>(null);


    // const openLightbox = (img: string) => {
    //     console.log("Open:", img);
    // };

    return (<>
        <div className="min-h-screen flex flex-col bg-[#5d5c61] p-6">

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 w-full mb-5">

                {galleryData.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.name)}
                        className={`flex-1 min-w-[140px] py-3 rounded-lg transition-all duration-300 text-center
        ${filter === cat.name
                                ? "bg-gradient-to-r from-white/90 to-white/80 text-black font-bold shadow-lg"
                                : "bg-gradient-to-r from-black/90 to-black/70 text-orange-400/60 font-bold hover:bg-black/60"
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}

            </div>


            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
                {images.map((img) => (
                    <img
                        key={img.id}
                        src={img.src}
                        alt={img.name}
                        // effect="blur"
                        className="w-full h-48  object-cover rounded shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105"
                        // onClick={() => openLightbox(img.src)}

                        onClick={() => setOpenIndex(images.findIndex((i) => i.id === img.id))}

                    />
                ))}
            </div>

            {openIndex !== null && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

                    {/* Close */}
                    <div
                        onClick={() => setOpenIndex(null)}
                        className="absolute top-5 right-5 text-white text-lg cursor-pointer"
                    >
                        ✕
                    </div>

                    {/* Previous */}
                    <div
                        onClick={() =>
                            setOpenIndex(
                                openIndex === 0 ? images.length - 1 : openIndex - 1
                            )
                        }
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer"
                    >
                        ‹
                    </div>

                    {/* Next */}
                    <div
                        onClick={() =>
                            setOpenIndex(
                                openIndex === images.length - 1 ? 0 : openIndex + 1
                            )
                        }
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer"
                    >
                        ›
                    </div>

                    {/* Image */}
                    <img
                        src={images[openIndex].src}
                        alt="zoom"
                        className="max-w-[90%] max-h-[90%] rounded-sm shadow-xl animate-zoom"
                    />

                </div>
            )}


        </div>

        <Footer /></>
    );
};

export default Gallery;
