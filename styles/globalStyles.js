// globalStyles.js
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { FONTS } from './fonts';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.text,
    fontFamily: FONTS.regular,
    // Add more common styles here
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Add more global styles as needed
});
