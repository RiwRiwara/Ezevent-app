// service/FontLoader.tsx
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

interface FontLoaderProps {
  children: React.ReactNode;
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'IBMPlexSansThai-Medium': require('../assets/fonts/IBMPlexSansThai-Medium.ttf'),
    'IBMPlexSansThai-Regular': require('../assets/fonts/IBMPlexSansThai-Regular.ttf'),
    'IBMPlexSansThai-SemiBold': require('../assets/fonts/IBMPlexSansThai-SemiBold.ttf'),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
    }
  }, [fontsLoaded]);

  return isReady ? <>{children}</> : null;
};

export default FontLoader;
