import { Link } from 'react-router-dom';
import styles from 'E:/Web/PROJECTS/rockside/src/styles/HeroVideo.module.css';

interface OverlayProps {
    src?: string;
    poster?: string;
    title?: string;
    subtitle?: string;

}
export const Overlay: React.FC<OverlayProps> = ({ subtitle }) => {
    return (<>

        {/* The Content Overlay */}
        <section className={styles.heroContainer}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    {/* Advanced: Logo sizing with specific height to maintain layout rhythm */}
                    <img
                        src="./Rockside1-Logo.jpg"
                        alt="Rockside Logo"
                        className={styles.heroLogo}
                    />

                    {subtitle && (
                        <p className={styles.subtitle}>
                            {subtitle}
                        </p>
                    )}

                    <Link to="/home">
                        <button className={`${styles.ctaButton} ${styles.textAdvanced}`}>
                            Click Here to Explore
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    </>)
}