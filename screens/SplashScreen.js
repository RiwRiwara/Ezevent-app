import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function SplashScreenComponent({ navigation }) {
    const [fontsLoaded, fontError] = useFonts({
        'IBMPlexSansThai-Bold': require('../assets/fonts/IBMPlexSansThai-Bold.ttf'),
    });
    
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>EZEVENT</Text>
      <View style={styles.separator} />

      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')} // Assuming your Home screen is named 'Home'
        style={styles.homeButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44A9C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'IBMPlexSansThai-Bold',
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
