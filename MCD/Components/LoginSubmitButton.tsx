import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getHeight, getWidth } from '../utils/utils'; // optional: for responsive sizing
import { Fonts, FontStyles } from '../utils/fonts';

type YellowButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  textColor? : string; 
  backgroundColor? : string
};

export default function SubmitButton({ title, onPress, textColor, backgroundColor }: YellowButtonProps) {
  
  return ( <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor ? backgroundColor : '#FFD700'}]} onPress={onPress} activeOpacity={0.7}>
<Text style={[FontStyles.SemiBold_16_Black, {color:textColor}]}>
    {title}
</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width:'100%',
    height: getHeight(44),   
    backgroundColor: '#FFD700', // Gold/Yellow
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: getWidth(60)
  },
  
   semiBoldText: {
    fontFamily: 'Montserrat_600SemiBold', // Must match your linked font name
    fontSize: 14,
    textAlign: 'center',
    color: '#000', // or your desired color
  },
 
});
