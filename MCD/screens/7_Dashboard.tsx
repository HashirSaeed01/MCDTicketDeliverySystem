import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { getHeight, getWidth } from "../utils/utils";

import ProfileRow from "../Components/TopProfileRowDashboard";
import { Fonts } from "../utils/fonts";


type userType = {
  userType?: string,
  onMenuPress?: () => void;
}

export default function Dashboard({ userType, onMenuPress }: userType) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <ProfileRow 
        iconName={"John Doe"} 
        label={"Customer Service"} 
        value={""} 
        onTap={onMenuPress}
      />

      {/* Middle Content */}
      <View style={styles.middleContainer}>
        <Image
          source={require("../assets/static/McDonaldsLogo.jpg")}
          style={styles.middleImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },

  profileRow: {
    backgroundColor: "#FAFAFA",
    borderBottomColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    padding: 10,
  },

  personInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  personPicture: {
    marginRight: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 60,
    backgroundColor: "black",
  },
  nameColumn: {
    justifyContent: "center",
  },
  nameText: {
    fontFamily: Fonts.montserrat.semiBold,
    fontSize: 16,
    color: "black",
  },
  subtitleText: {
    fontFamily: Fonts.montserrat.regular,
    fontSize: 12,
    color: "black",
  },

  icon: {
    padding: 8,
  },

  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },

  middleImage: {
    width: getWidth(160),
    height: getHeight(160),
    borderRadius: 12,
    opacity: 0.3,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 8,
  },
  modalButtonText: {
    color: "white",
    fontSize: 14,
  },
});
