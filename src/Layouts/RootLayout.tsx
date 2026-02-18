// layouts/RootLayout.tsx
import { Outlet, useNavigation } from 'react-router-dom';
// import { Navbar } from '../components/Navbar';
import styles from 'E:/Web/PROJECTS/rockside/src/styles/Layout.module.css';
import Footer from '../components/Footer';

export const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={styles.appWrapper}>
      {/* <Navbar /> */}

      {/* Global loading bar for route transitions */}
      {isLoading && <div className={styles.progressBar} />}

      <main className={styles.mainContent}>
        {/* Outlet is where the child routes (Home, Dashboard) render */}
        <Outlet />
      </main>

      {/* <Footer /> */}
      {/* <footer className={styles.footer}>
        © {new Date().getFullYear()} Your Brand
      </footer> */}
    </div>
  );
};