import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getHeight, getWidth } from '../utils/utils';
import { FontStyles } from '../utils/fonts';

type CancelButtonProps = {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default function CancelButton({ title = "Cancel", onPress }: CancelButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: getHeight(44),
    borderColor: '#B0B0B0',
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getWidth(20)
  },
  text: {
    ...FontStyles.SemiBold_16_Black,
    color: '#666',
  },
});
