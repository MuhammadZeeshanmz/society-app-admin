import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const history = useHistory(); // Use history hook to navigate

  useEffect(() => {
    // Set a timeout to hide the splash screen after 5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
      history.push('/login'); // Navigate to login page after 5 seconds
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <>
      {showSplash ? (
        <div style={styles.splashContainer}>
          <h1>My App</h1>
          <p>Loading...</p>
        </div>
      ) : (
        <div style={styles.appContent}>
          {/* Your main app content goes here */}
          <h2>Welcome to the App!</h2>
        </div>
      )}
    </>
  );
};

const styles = {
  // Basic styling for splash screen
  splashContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  splashContainerH1: {
    fontSize: '3rem',
  },
  splashContainerP: {
    fontSize: '1.5rem',
  },
  // App content after splash screen
  appContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  appContentH2: {
    fontSize: '2rem',
  },
};

export default SplashScreen;
