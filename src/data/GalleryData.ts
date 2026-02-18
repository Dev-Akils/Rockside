import image1 from '../assets/gallery/Balcony_5K.jpg';
import image2 from '../assets/gallery/Bathroom_5K.jpg';
import image3 from '../assets/gallery/Bedroom 02-5K.jpg';
import image4 from '../assets/gallery/Bedroom 04-5K.jpg';
import image5 from '../assets/gallery/Bedroom cam_03_5K.jpg';
import image6 from '../assets/gallery/Dumplex Reception Area Cam01-5K.jpg';
import image7 from '../assets/gallery/Dumplex Reception Area Cam02 5K.jpg';
import image8 from '../assets/gallery/Gym_5K.jpg';
import image9 from '../assets/gallery/Living Area_Sofa camera_5K.jpg';
import image10 from '../assets/gallery/Living Dining Camera 01_5K.jpg';
import image11 from '../assets/gallery/Living Dining Straight on Camera_5K.jpg';
import image12 from '../assets/gallery/Rockside Kitche Cam-5K.jpeg';


export type GalleryImage = {
    id: number;
    name: string;
    src: string;
};

export type GalleryCategory = {
    id: number;
    name: string;
    images: GalleryImage[];
};

export const galleryData: GalleryCategory[] = [
    {
        id: 1,
        name: "Interior",
        images: [
            { id: 1, name: "Balcony", src: image1 },
            { id: 2, name: "Bathroom", src: image2 },
            { id: 3, name: "Bedroom 02", src: image3 },
            { id: 4, name: "Bedroom 04", src: image4 },
            { id: 5, name: "Bedroom Cam 03", src: image5 },
            { id: 6, name: "Reception Cam 01", src: image6 },
            { id: 7, name: "Reception Cam 02", src: image7 },
            { id: 8, name: "Gym", src: image8 },
            { id: 9, name: "Living Area", src: image9 },
            { id: 10, name: "Living Dining", src: image10 },
            { id: 11, name: "Dining Straight", src: image11 },
            { id: 12, name: "Kitchen", src: image12 },
        ],
    },
    {
        id: 2,
        name: "Exterior",
        images: [
            // { id: 1, name: "Balcony", src: image1 },
            // { id: 2, name: "Bathroom", src: image2 },
            // { id: 3, name: "Bedroom 02", src: image3 },
            // { id: 4, name: "Bedroom 04", src: image4 },
            // { id: 5, name: "Bedroom Cam 03", src: image5 },
            // { id: 6, name: "Reception Cam 01", src: image6 },
            // { id: 7, name: "Reception Cam 02", src: image7 },
            // { id: 8, name: "Gym", src: image8 },
            // { id: 9, name: "Living Area", src: image9 },
            // { id: 10, name: "Living Dining", src: image10 },
            // { id: 11, name: "Dining Straight", src: image11 },
            // { id: 12, name: "Kitchen", src: image12 },
        ],
    },
];
