import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '@gluestack-ui/themed';
import { Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { config } from "../config/gluestack-ui.config"
import { GluestackUIProvider, Button, ButtonText, Text } from "@gluestack-ui/themed";
export default function SplashScreenComponent({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    'IBMPlexSansThai-Bold': require('../assets/fonts/IBMPlexSansThai-Bold.ttf'),
  });
  const [testApi, setTestApi] = React.useState('');

  useEffect(() => {
    fetch('https://ezevent.online/api/test')
      .then((response) => response.json())
      .then((json) => setTestApi(json.message))
      .catch((error) => console.error(error));
  }, []);

  return (

    <GluestackUIProvider config={config}>

      <View style={styles.container} backgroundColor="$neutral6">



        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />

        <Text color="$gray0" fontSize={36} fontWeight="$bold" >EZEVENT</Text>
        
        <View style={styles.separator} my={10}/>
        
        <Text>{testApi}</Text>
        <Link href="/home">Home</Link>
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#44A9C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  separator: {
    width: 130,
    height: 5,
    backgroundColor: '#FF9B38',
    marginBottom: 20,
  },
  homeButton: {
    // Add any styling for the Home button here
  },
});
