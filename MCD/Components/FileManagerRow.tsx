import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts, FontStyles } from '../utils/fonts';

type RowItemProps = {
  iconSource: any; // require('./path/to/icon.png') OR a remote URI
  title: string;
  subtitle: string;
  onOptionsPress?: () => void;
};

export default function FileManagerRow({ iconSource, title, subtitle, onOptionsPress }: RowItemProps) {
  return (
    <View style={styles.container}>
      <Image source={iconSource} style={styles.icon} />
      <View style={styles.textContainer}>

        <Text style={FontStyles.SemiBold_16_Black}>{title}</Text>

        <Text style={FontStyles.Regular_12_Black}>{subtitle}</Text>
      </View>
      <TouchableOpacity onPress={onOptionsPress}>
        <Ionicons name="ellipsis-vertical" size={20} color="#555" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    
  },
  // title: {
  //   fontSize: 16,
  //   marginBottom: 4,
  //   fontFamily: FONT_FAMILIES.semiBold
  // },
 
});
