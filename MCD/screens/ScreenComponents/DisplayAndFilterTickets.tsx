import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileHeader from "../../Components/AppTopBar";
import CustomBottomBar from "../../Components/BottomNavigationBar";
import NavBarButtons from "../../Components/BottomNavigationButton";
import TicketBox from "../../Components/TicketDisplayBoxes";
import { getHeight, getWidth } from "../../utils/utils";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Fonts, FontStyles } from "../../utils/fonts";
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../../utils/routes/UserFlow";
import ScreenWrapper from "../../screens/ScreenWrapper";

type TicketsAtVendorComponentProps = {
  headerTitle?: string;
};

export default function TicketsAtVendorComponent({ 
  headerTitle = "Tickets At Vendor",
}: TicketsAtVendorComponentProps) {
    const [selectedFilter, setSelectedFilter] = useState<string>('All tickets');
    const route = useRoute<RouteProp<RootStackParamList>>();
    const voucherNumber = (route.params as any)?.voucherNumber || "DEFAULT-001";
    const status = (route.params as any)?.status || "Pending";

    // Hardcoded array of tickets using the provided ticketInfo
    const tickets = Array(4).fill({
      voucherNumber,
      status
    });

    return (
      <ScreenWrapper>
        <ProfileHeader 
          name={headerTitle}
          rightContent={
            <>
                <Ionicons name="filter-outline" size={20} color="#000" style={{ marginRight: 12 }} />
                <Ionicons name="search-outline" size={20} color="#000" />
            </>
          }        
        />

        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {tickets.map((ticket, index) => (
            <TicketBox 
              key={index}
              voucherNumber={ticket.voucherNumber} 
              status={ticket.status}
              dropdownContent={index === 0 ? (
                <View>
                  <Text style={FontStyles.SemiBold_16_Black}>
                    Voucher: {ticket.voucherNumber}
                  </Text>
                  <Text style={FontStyles.Regular_12_Black}>
                    Status: {ticket.status}
                  </Text>
                </View>
              ) : undefined}
            />
          ))}
        </View>

        <CustomBottomBar
          LeftButtons={
            <NavBarButtons 
              icon="home-outline" 
              label="Home" 
              imageSource={require('../../assets/static/iconOne.png')} 
              textColor="black" 
            />
          }
          RightButtons={
            <NavBarButtons 
              icon="person-outline" 
              label="Profile" 
              imageSource={require('../../assets/static/Ticket.png')} 
              backgroundColor="red" 
              textColor="white" 
            />
          }
        />
      </ScreenWrapper>
    );
}
