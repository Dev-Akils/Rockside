import React, { useEffect, useRef } from 'react';

import styles from 'E:/Web/PROJECTS/rockside/src/styles/HeroVideo.module.css';


interface HeroVideoProps {
    src?: string;
    poster?: string;
    title?: string;
    subtitle?: string;
    ref?: React.Ref<HTMLVideoElement>;

}

export const HeroVideo: React.FC<HeroVideoProps> = ({ src, poster, ref }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.warn("Autoplay was prevented. User interaction required.", error);
            })
        }
    }, [])

    return (

        <section className={styles.heroContainer}>
            <video
                ref={ref || videoRef}
                poster={poster}
                className={styles.backgroundVideo}
                playsInline
                muted
                loop
                autoPlay
            >
                <source src={src} type="video/mp4" />
            </video>


        </section>
    )
}