import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Fonts, FontStyles } from '../utils/fonts';
import { getHeight } from '../utils/utils';

type CustomButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: 1 | 2;
  
};

export default function CustomButton({ label, onPress, variant = 1 }: CustomButtonProps) {
  const isVariantTwo = variant === 2;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.base,
        isVariantTwo ? styles.variantTwoContainer : styles.variantOneContainer
      ]}
    >
      <Text
        style={[
          styles.baseText,
          isVariantTwo ? FontStyles.Regular_12_Red : FontStyles.Regular_18_Red
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 8,
  },
  variantOneContainer: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height:getHeight(76)
  },
  variantTwoContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    color: 'black',
    textAlign:'center'
  },
  variantOneText: {
    fontSize: 16,
    fontWeight: '600',
  },
 
});
