/**
 * App.jsx
 * @author @drypzz
*/

import React, { useEffect, useState } from 'react';

import LoadingScreen from './src/components/LoadingScreen';
import HomeScreen from './src/components/HomeScreen';

/**
 * App.jsx
 * @since 30-05-2023
 * @version 1.0.0
 * @author @drypzz
 * @returns {JSX.Element} App
*/
function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : <HomeScreen />}
    </>
  );
};

/**
 * @author @drypzz
 * @exports App
 * @description Exporting the App component
*/
export default App;