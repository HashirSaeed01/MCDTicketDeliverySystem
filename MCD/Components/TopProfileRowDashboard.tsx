import { getHeight, getWidth } from '../utils/utils';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../utils/fonts';

type ProfileRowProps = {
  iconName: string;
  label: string;
  value: string;
  onTap?: () => void;
};

export default function ProfileRow({ iconName, label, value, onTap }: ProfileRowProps) {
  return (
    <View style={styles.profileRow}>
      <View style={styles.personInfo}>
        <View style={styles.personPicture}>
          <View style={styles.image} />
        </View>

        <View style={styles.nameColumn}>
          <Text style={styles.nameText}>{iconName}</Text>
          <Text style={styles.subtitleText}>{label}</Text>
        </View>
      </View>

      <View style={styles.icon}>
        <TouchableOpacity onPress={onTap}>
          <Ionicons name="menu" size={getWidth(24)} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

    
profileRow: {
    backgroundColor: "#FAFAFA",
    borderBottomColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingHorizontal: getWidth(10),
    paddingVertical: getHeight(16),
  },
  personInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  personPicture: {
    marginRight: getWidth(12),
  },
  image: {
    width: getWidth(50),
    height: getWidth(50),
    borderRadius: getWidth(60),
    backgroundColor: "black",
  },
  nameColumn: {
    justifyContent: "center",
  },
  nameText: {
    fontFamily: Fonts.montserrat.semiBold,
    fontSize: getWidth(16),
    color: "black",
  },
  subtitleText: {
    fontFamily: Fonts.montserrat.regular,
    fontSize: getWidth(12),
    color: "black",
  },
  icon: {
    padding: getWidth(8),
  },

})
