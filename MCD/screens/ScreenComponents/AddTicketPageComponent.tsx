import React, { useState } from "react";
import { StyleSheet, View, Text, GestureResponderEvent } from "react-native";
import LabeledTextField from "../../Components/TextFields";
import CustomBottomBar from "../../Components/BottomNavigationBar";
import ProfileHeader from "../../Components/AppTopBar";
import SubmitButton from "../../Components/LoginSubmitButton";
import CancelButton from "../../Components/CancelButton";
import { getWidth } from "../../utils/utils";
import ScreenWrapper from "../ScreenWrapper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/routes/UserFlow";
import DropdownBox, { DropdownOption } from "../../Components/DropdownComponent";
import { FontStyles } from "../../utils/fonts";

type AddCategoryFormProps = {
  variant: "MainCategory" | "SecondCategory" | "ThirdCategory" | "AddTicketType" | "EditTicketPriority" | "ResolutionComments";
  headerTitle: string;
  headerBackgroundColor: string;
  onSubmit?: () => void;
};

type Props = NativeStackScreenProps<RootStackParamList, 'AddCategoryForm'>;




const DepartmentOptions: DropdownOption[] = [
  { label: "All Departments", value: "All" },
  { label: "IT", value: "IT" },
  { label: "Operations", value: "Operations" },
  { label: "Sales", value: "Sales" },
  { label: "Marketing", value: "Marketing" }
];





export default function AddCategoryForm({
  route, navigation
}: Props) {

  const { variant } = route.params;

    const [selectedDepartment, setSelectedDepartment] = useState<string>('All');



  const renderFields = () => {
    switch (variant) {
      case "MainCategory":
        return (
          <>
            <LabeledTextField label="Ticket Main Category" placeholder="Enter main category" />
            <LabeledTextField label="Status" placeholder="Enter status" />
          </>
        );
      case "SecondCategory":
        return (
          <>
            <LabeledTextField label="Ticket Main Category" placeholder="Enter main category" />
            <LabeledTextField label="Second Category" placeholder="Enter second category" />
            <LabeledTextField label="Status" placeholder="Enter status" />
          </>
        );
      case "ThirdCategory":
        return (
          <>
            <LabeledTextField label="Ticket Main Category" placeholder="Enter main category" />
            <LabeledTextField label="Second Category" placeholder="Enter second category" />
            <LabeledTextField label="Third Category" placeholder="Enter third category" />
            <LabeledTextField label="Status" placeholder="Enter status" />
          </>
        );
      case "AddTicketType":
        return (
          <>
            <LabeledTextField label="Ticket Type" placeholder="Enter ticket type" />
            <LabeledTextField label="Status" placeholder="Enter status" />
          </>
        );
      case "EditTicketPriority":
        return (
          <>
            <LabeledTextField label="Ticket Priority" placeholder="Enter priority level" />
            <LabeledTextField label="Turnaround Time (TAT)" placeholder="Enter TAT in days" />
          </>
        );
      case "ResolutionComments":
        return (
          <>
            <LabeledTextField label="Ticket Main Category" placeholder="Enter main category" />
            <LabeledTextField label="Second Category" placeholder="Enter second category" />
            <LabeledTextField label="Resolution Comments" placeholder="Enter resolution comments" />
            <LabeledTextField label="Status" placeholder="Enter status" />
          </>
        );

      case "AssignUserAndRole":
        return (
          <>
            <LabeledTextField label="User Name" placeholder="Enter main category" />
            <LabeledTextField label="Login ID" placeholder="Enter second category" />
            <LabeledTextField label="Current Role" placeholder="Enter resolution comments" />
            <LabeledTextField label="Status" placeholder="Enter status" />
            <View style={styles.pickerContainer}>
              <Text style={FontStyles.Regular_12_Black}>Department</Text>
              <DropdownBox
                options={DepartmentOptions}
                value={selectedDepartment}
                onSelect={setSelectedDepartment}
                placeholder="Select department"
              />
            </View>          </>
        );
      default:
        return null;
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ProfileHeader
          name={'headerTitle'}
          backgroundColorCode={'white'}
        />

        <View style={styles.middleContainer}>
          {renderFields()}

          <View style={styles.buttonRow}>
            <SubmitButton
              title="Submit"
              onPress={(() => { })}
              backgroundColor="#FFD700"
            />
            <CancelButton
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({

    pickerContainer: {
    marginBottom: 20,
  },

  
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  middleContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  buttonRow: {
    width: '80%',
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    paddingHorizontal: getWidth(50),
    gap: getWidth(20),
  },
});
