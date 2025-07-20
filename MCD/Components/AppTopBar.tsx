import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { getHeight, getWidth } from "../utils/utils";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Fonts, FontStyles } from "../utils/fonts";

type ProfileHeaderProps = {
  name: string;
  subtitle?: string;
  heightOverride?: number;
  backgroundColorCode?: string;
  rightContent?: React.ReactNode; // 🔑 Now accepts any custom JSX
  onBackPress?: () => void;
};

export default function ProfileHeader({
  name,
  subtitle,
  heightOverride,
  backgroundColorCode = "#FAFAFA",
  rightContent,
  onBackPress,
}: ProfileHeaderProps) {
  return (
    <View
      style={[
        styles.wrapper,
        { height: getHeight(heightOverride ?? 70), backgroundColor: backgroundColorCode },
      ]}
    >
      <View style={styles.firstRow}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={onBackPress} style={{marginRight:getWidth(10)}}>
          <Ionicons name="arrow-back" size={getWidth(20)} color="black" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={FontStyles.SemiBold_18_Black}>{name}</Text>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Right-side Custom Content */}
        {rightContent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "center",
    paddingLeft: getWidth(20), 
    paddingRight: getWidth(10),
  },
  firstRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: getWidth(18),
    fontFamily: "Montserrat_600SemiBold",
    marginLeft: getWidth(12),
    color: "#222",
  },
  spacer: {
    flex: 1,
  },
});
