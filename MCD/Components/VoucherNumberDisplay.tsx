import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getHeight, getWidth } from '../utils/utils';
import { Fonts, FontStyles } from '../utils/fonts';

type TripleBoxProps = {
  ticketText: string;
  rightBoxText: string;
};

export default function TripleBox({ ticketText, rightBoxText }: TripleBoxProps) {
  const colorScheme = getColorScheme(rightBoxText.toLowerCase());

  return (
    <View style={styles.outerBox}>
      <View style={styles.innerContainer}>
        
        {/* Left: Row with Ticket Icon + Text */}
        <View style={styles.ticketRow}>
          <Ionicons name="ticket-outline" size={10} color="#FFD700" />
          <Text style={FontStyles.Regular_10_Black}>{ticketText}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Right Box */}
        <View style={[
          styles.rightBox,
          { backgroundColor: colorScheme.bg, borderColor: colorScheme.border }
        ]}>
          <Text style={[FontStyles.Regular_10_Black, { color: colorScheme.text }]}>{rightBoxText}</Text>
        </View>
      </View>
    </View>
  );
}

// Dynamic color scheme selector
function getColorScheme(status: string) {
  switch (status) {
    case 'new':
      return { bg: '#DEC5FF', border: '#DEC5FF', text: '#5B32A0' }; // Light purple bg, dark purple text
    case 'in progress':
      return { bg: '#C0DAFF', border: '#C0DAFF', text: '#0B5198' }; // Light blue bg, dark blue text
    case 'reopen':
      return { bg: '#FFE699', border: '#FFE699', text: '#AD8A00' }; // Light yellow bg, dark yellow text
    case 'resolved':
      return { bg: '#B7E4C7', border: '#B7E4C7', text: '#1B6F3A' }; // Light green bg, dark green text
    case 'closed':
      return { bg: 'red', border: '#B7E4C7', text: '#1B6F3A' }; // Light green bg, dark green text
    default:
      return { bg: '#DEC5FF', border: '#DEC5FF', text: '#222' }; // Default fallback
  }
}

const styles = StyleSheet.create({
  outerBox: {
    borderRadius: 20,
    borderColor: '#FFD700',
    borderWidth: 1,
    height: getHeight(22),
    justifyContent: 'center',
    
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: getWidth(16),
    flex:1
  },
  ticketRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: getWidth(8),
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#FFD700',
    marginHorizontal: getWidth(8),
  },
  rightBox: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFD700',
    paddingHorizontal: getWidth(10),
  },
  text: {
    fontSize: 8,
    fontFamily: 'Montserrat_400Regular',
  },
});
