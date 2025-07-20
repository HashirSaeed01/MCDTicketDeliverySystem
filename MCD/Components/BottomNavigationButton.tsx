import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, ViewStyle, TextStyle } from 'react-native';
import { Fonts } from '../utils/fonts';


type NavBarButtonsProps = {
  icon?: string;
  label: string;
  onPress?: () => void;
  imageSource: ReturnType<typeof require>;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string; // <-- NEW
};


export default function BottomNavigationButton({
  icon,
  label,
  onPress,
  imageSource,
  backgroundColor = 'white',
  textColor = 'black',
  iconColor
}: NavBarButtonsProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image
  source={imageSource as any}
  style={[styles.icon, { tintColor: iconColor }]} // <-- here
  resizeMode="contain"
/>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 63,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontFamily: Fonts.montserrat.semiBold
  },
});
