// service/FontLoader.tsx
import React, { useEffect, useState } from 'react';
import { useFonts,
  IBMPlexSansThai_100Thin,
  IBMPlexSansThai_200ExtraLight,
  IBMPlexSansThai_300Light,
  IBMPlexSansThai_400Regular,
  IBMPlexSansThai_500Medium,
  IBMPlexSansThai_600SemiBold,
  IBMPlexSansThai_700Bold,

 } from '@expo-google-fonts/ibm-plex-sans-thai';

interface FontLoaderProps {
  children: React.ReactNode;
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    IBMPlexSansThai_100Thin,
    IBMPlexSansThai_200ExtraLight,
    IBMPlexSansThai_300Light,
    IBMPlexSansThai_400Regular,
    IBMPlexSansThai_500Medium,
    IBMPlexSansThai_600SemiBold,
    IBMPlexSansThai_700Bold,
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
