import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getWidth } from '../utils/utils';
import { FontStyles } from '../utils/fonts';

type GreyOutlineButtonProps = {
  title: string;
  onPress: () => void;
  selected?: boolean;
};

export default function GreyOutlineButton({ title, onPress, selected = false }: GreyOutlineButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        selected && { borderColor: '#FFD700', backgroundColor: '#FFF9E6' }, // Golden border & light background when selected
      ]}
    >
      <Text
        style={[
          FontStyles.Regular_12_Black,
          selected && { color: '#FFD700' }, // Golden text when selected
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: getWidth(20),
    paddingHorizontal: getWidth(12),
    paddingVertical: 4,
    marginRight: getWidth(8),
  },
  buttonText: {
    color: '#333',
    fontSize: getWidth(12),
    fontFamily: 'Montserrat_400Regular',
  },
});
