import { useState } from "react";
import {
  StyleSheet, View, ScrollView, Image, Modal,
  TouchableOpacity, Text,
  GestureResponderEvent
} from "react-native";

import ProfileHeader from "../Components/AppTopBar";
import CustomBottomBar from "../Components/BottomNavigationBar";
import NavBarButtons from "../Components/BottomNavigationButton";
import TicketBox from "../Components/TicketDisplayBoxes";
import HorizontalScrollWithArrows from "../Components/TicketFilterRow";
import GreyOutlineButton from "../Components/TicketFilterRowButton";

import { getHeight, getWidth } from "../utils/utils";
import { FontStyles } from "../utils/fonts";
import { DropdownOption } from "../Components/DropdownComponent";
import DropdownBox from "../Components/DropdownComponent";
import SubmitButton from "../Components/LoginSubmitButton";

type userType = {
  userType?: string;
};

const TimeOptions: DropdownOption[] = [
  { label: "Last 7 days", value: "7" },
  { label: "Last 30 days", value: "30" },
  { label: "Last 90 days", value: "90" }
];

const StatusOptions: DropdownOption[] = [
  { label: "All Status", value: "All" },
  { label: "New", value: "New" },
  { label: "In Progress", value: "In Progress" },
  { label: "Resolved", value: "Resolved" },
  { label: "Closed", value: "Closed" }
];

const DepartmentOptions: DropdownOption[] = [
  { label: "All Departments", value: "All" },
  { label: "IT", value: "IT" },
  { label: "Operations", value: "Operations" },
  { label: "Sales", value: "Sales" },
  { label: "Marketing", value: "Marketing" }
];

const LocationOptions: DropdownOption[] = [
  { label: "All Locations", value: "All" },
  { label: "North Region", value: "North" },
  { label: "South Region", value: "South" },
  { label: "East Region", value: "East" },
  { label: "West Region", value: "West" }
];

const TicketTypeOptions: DropdownOption[] = [
  { label: "All Types", value: "All" },
  { label: "Hardware", value: "Hardware" },
  { label: "Software", value: "Software" },
  { label: "Network", value: "Network" },
  { label: "Security", value: "Security" }
];

export default function AdminTicketsDisplay({ userType }: userType) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All tickets');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string>('7');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedTicketType, setSelectedTicketType] = useState<string>('All');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <ProfileHeader
        name={"Tickets"}
        subtitle={""}
        rightContent={
          <View style={styles.row}>
            <TouchableOpacity onPress={toggleModal}>
              <Image
                source={require('../assets/static/FilterIcon.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Image
              source={require('../assets/static/CSV_download.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        }
      />

      <View style={styles.screenContainer}>
        <HorizontalScrollWithArrows>
          <GreyOutlineButton title="All tickets" onPress={() => setSelectedFilter('All tickets')} selected={selectedFilter === 'All tickets'} />
          <GreyOutlineButton title="Assigned to me" onPress={() => setSelectedFilter('Assigned to me')} selected={selectedFilter === 'Assigned to me'} />
          <GreyOutlineButton title="Resolved" onPress={() => setSelectedFilter('Resolved')} selected={selectedFilter === 'Resolved'} />
          <GreyOutlineButton title="Closed" onPress={() => setSelectedFilter('Closed')} selected={selectedFilter === 'Closed'} />
        </HorizontalScrollWithArrows>

        <ScrollView style={styles.ticketContainer}>
          <TicketBox voucherNumber={"ASK"} status={"New"} />
          <TicketBox voucherNumber={"ASKJ"} status={"Resolved"} />
          <TicketBox voucherNumber={"ASKJD"} status={"Resolved"} />
          <TicketBox voucherNumber={"ASKJ"} status={"Reopen"} />
          <TicketBox voucherNumber={"ASKJD"} status={"In progress"} />
          <TicketBox voucherNumber={"ASKJ"} status={"In progress"} />
        </ScrollView>
      </View>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[FontStyles.SemiBold_18_Black, styles.modalTitle]}>Filter Tickets</Text>

            {(userType === 'agent' || userType === 'admin' || userType === 'supervisor') && (
              <>
                <View style={styles.pickerContainer}>
                  <Text style={FontStyles.Regular_12_Black}>Department</Text>
                  <DropdownBox
                    options={DepartmentOptions}
                    value={selectedDepartment}
                    onSelect={setSelectedDepartment}
                    placeholder="Select department"
                  />
                </View>

                <View style={styles.pickerContainer}>
                  <Text style={FontStyles.Regular_12_Black}>Store Location</Text>
                  <DropdownBox
                    options={LocationOptions}
                    value={selectedLocation}
                    onSelect={setSelectedLocation}
                    placeholder="Select location"
                  />
                </View>

                <View style={styles.pickerContainer}>
                  <Text style={FontStyles.Regular_12_Black}>Ticket Type</Text>
                  <DropdownBox
                    options={TicketTypeOptions}
                    value={selectedTicketType}
                    onSelect={setSelectedTicketType}
                    placeholder="Select ticket type"
                  />
                </View>
              </>
            )}

            <View style={styles.pickerContainer}>
              <Text style={FontStyles.Regular_12_Black}>Time Period</Text>
              <DropdownBox
                options={TimeOptions}
                value={selectedDays}
                onSelect={setSelectedDays}
                placeholder="Select time period"
              />
            </View>

            <View style={styles.pickerContainer}>
              <Text style={FontStyles.Regular_12_Black}>Ticket Status</Text>
              <DropdownBox
                options={StatusOptions}
                value={selectedStatus}
                onSelect={setSelectedStatus}
                placeholder="Select status"
              />
            </View>

              {/* <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={toggleModal}>
                <Text style={FontStyles.Regular_12_Black}>Cancel</Text>
              </TouchableOpacity> */}

              <SubmitButton title={"Search"} backgroundColor="green" textColor="white" onPress={function (event: GestureResponderEvent): void {
                throw new Error("Function not implemented.");
              } }>

              </SubmitButton>
              {/* <TouchableOpacity style={[styles.button, styles.applyButton]} onPress={toggleModal}>
                <Text style={[FontStyles.Regular_12_Black, { color: 'white' }]}>Apply</Text>
              </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  ticketContainer: {
    flex: 1,
    marginBottom: getHeight(10)
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 300,
  },
  modalTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  applyButton: {
    backgroundColor: '#f9b200',
  },
});
