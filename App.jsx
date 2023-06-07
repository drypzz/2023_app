/**
 * App.jsx
 * @author @drypzz
*/

import React, { useEffect, useState } from 'react';

import LoadingScreen from './src/components/loading/LoadingScreen';

import RootNavigation from './src/index';

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
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen title={'Carregando...'} size={30} color={'rgb(53, 153, 204)'} /> : <RootNavigation />}
    </>
  );
};

/**
 * @author @drypzz
 * @exports App
 * @description Exporting the App component
*/
export default App;