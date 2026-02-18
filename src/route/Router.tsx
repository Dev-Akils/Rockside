// router.tsx
import { createBrowserRouter,
    //  Navigate
     } from 'react-router-dom';
import { RootLayout } from '../Layouts/RootLayout';
import Home from '../pages/Home';

import  Entrance from '../pages/Entrance';
import Walkthrough from '../pages/Walkthrough';
import Gallery from '../pages/Gallery';
import Explore from '../pages/Explore';
import FloorPlan from '../pages/FloorPlan';
// import { Home } from '../pages/Home';
// import { Suspense, 
    // lazy
//  } from 'react';

// Lazy load heavy components for performance
// const Dashboard = lazy(() => import('./pages/Dashboard'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // Catches bubbles-up errors
    children: [
      {
        index: true,
        element: <Entrance />,
      },
    //   {
    //     path: 'dashboard',
    //     element: (
    //       <Suspense fallback={<div>Loading Dashboard...</div>}>
    //         <Dashboard />
    //       </Suspense>
    //     ),
    //     // Advanced: Loader fetches data before the component even mounts
    //     loader: async () => {
    //       const res = await fetch('/api/user/stats');
    //       if (res.status === 401) throw new Error("Unauthorized");
    //       return res.json();
    //     },
    //   },
    //   {
    //     path: 'profile',
    //     // Example of a Protected Route redirect
    //     element: <ProtectedRoute element={<Profile />} />,
    //   },
    ],


  },

   {
    path: '/home',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // Catches bubbles-up errors
    children: [
      {
        index: true,
        element: < Home  />,
      },
    ]
  },

   {
    path: '/walkthrough',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // Catches bubbles-up errors
    children: [
      {
        index: true,
        element: <Walkthrough />,
      },
    ]
  },

   {
    path: '/gallery',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // Catches bubbles-up errors
    children: [
      {
        index: true,
        element: <Gallery />,
      },
    ]
  },
   {
    path: '/explore',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // Catches bubbles-up errors
    children: [
      {
        index: true,
        element: <Explore />,
      },
    ]
  },

  {
    path: '/floorplan/:id',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // Catches bubbles-up errors
    children: [
      {
        index: true,
        element: <FloorPlan/>,
      },
    ]
  },
]);