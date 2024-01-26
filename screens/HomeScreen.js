import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'IBMPlexSansThai-Bold': require('../assets/fonts/IBMPlexSansThai-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  if (fontError) {
    return <Text>Error loading fonts</Text>; // Handle font loading errors
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>หน้าหลัก</Text>
        <View style={styles.separator} />
      <View style={{ width: 130, height: 5, backgroundColor: '#FF9B38', marginBottom: 20 }}></View>
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
    fontSize: 32,
    color: '#fff',
    fontFamily: 'IBMPlexSansThai-Bold',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  }
});
