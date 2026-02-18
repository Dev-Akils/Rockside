// App.tsx
import { RouterProvider } from 'react-router-dom';
import { router } from './route/Router'; // Import the router object
import './App.css';

function App() {
  return (
    // The Provider enables the new Data APIs (Loaders, Actions, etc.)
    <RouterProvider router={router} 
    // fallbackElement={<p>Loading...</p>}
     />
  );
}

export default App;