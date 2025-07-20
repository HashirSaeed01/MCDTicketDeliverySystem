import React, { ReactNode } from "react";
import { StyleSheet, View, StyleProp, ViewStyle, Text, GestureResponderEvent } from "react-native";
import ProfileHeader from "../../Components/AppTopBar";
import CategoryComponentBox from "./TicketCategoriesDisplayed";
import { getHeight, getWidth } from "../../utils/utils";
import CustomBottomBar from "../../Components/BottomNavigationBar";
import NavBarButtons from "../../Components/BottomNavigationButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/routes/UserFlow";
import SubmitButton from "../../Components/LoginSubmitButton";
import ScreenWrapper from "../ScreenWrapper";
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'GenericCategoryMappingPage'>;

type IconButton = {
  name: string;
  onPress: () => void;
};


export default function GenericCategoryMappingPage({ 
  route, navigation
}: Props) {
  const {
    headerTitle,
    headerSubtitle,
    headerBackgroundColor = "#FAFAFA",
    headerIcons,
    categoryData,
    noCategoryText = "No categories available",
    pageBackgroundColor = "white",
    wrapperStyle,
    children,
    buttonComponent,
    categoryHeaders,
    variant // Add this to receive the variant from drawer
  } = route.params;

  const handleAddNew = () => {
    navigation.navigate('AddCategoryForm', {
      variant: variant.toString()
    });
  };

  const getVariantFromTitle = (title: string): string => {
    switch (title) {
      case "Ticket Main Category":
        return "MainCategory";
      case "Second Category":
        return "SecondCategory";
      case "Third Category":
        return "ThirdCategory";
      case "Ticket Type":
        return "AddTicketType";
      case "Agent Group Configuration":
        if (categoryHeaders?.includes('Ticket Priority')) {
          return "EditTicketPriority";
        }
        if (categoryHeaders?.includes('Resolution Comments')) {
          return "ResolutionComments";
        }
        return "MainCategory";
      default:
        return "MainCategory";
    }
  };

  return (
    

  <ScreenWrapper>
    
    <View style={[styles.wrapper, { backgroundColor: pageBackgroundColor }, wrapperStyle]}>
      <View style={styles.container}>
        <ProfileHeader
          name={headerTitle}
          subtitle={headerSubtitle || ""}
          backgroundColorCode={headerBackgroundColor}
        />

        <CategoryComponentBox 
          categories={categoryData}  
          categoryHeaders={categoryHeaders}
        />
      </View>

      <View style={styles.floatingButtonContainer}>
        {buttonComponent}
      </View>



      
  <View style={{position:'absolute', bottom: getHeight(120), right: getWidth(16)}}>
    <SubmitButton 
      title={"Add new"} 
      onPress={handleAddNew}
      backgroundColor="#FFD700"
    />
  </View>

      {/* <CustomBottomBar
        LeftButtons={
          <NavBarButtons    
            icon="home-outline"
            label="Home"
            imageSource={require("../../assets/static/Ticket.png")}
            textColor="black"
          />
        }
        RightButtons={
          <NavBarButtons
            icon="person-outline"
            label="Profile"
            imageSource={require("../../assets/static/Ticket.png")}
            backgroundColor="red"
            textColor="white"
          />
        }
      /> */}


    </View>
  </ScreenWrapper>

  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: getHeight(100),
    right: getWidth(16),
  }
});
