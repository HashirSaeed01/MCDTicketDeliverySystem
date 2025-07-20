import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LabeledTextField from '../../Components/TextFields';
import TripleBox from '../../Components/VoucherNumberDisplay';
import { getHeight } from '../../utils/utils';
import ProfileHeader from '../../Components/AppTopBar';
import { FontStyles } from '../../utils/fonts';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/routes/UserFlow';

export default function TicketDetailForm() {
  const route = useRoute<RouteProp<RootStackParamList, 'TicketDetailForm'>>();
  const { ticketNumber, status, createdAt = '26/02/2025 12:00pm' } = route.params;

  return (
    <View style={styles.wrapper}>
      <View style={styles.safeAreaView}>
        <ProfileHeader
          name={'Ticket Details'}
          rightContent={
            <View style={styles.columnInRow}>
              <TripleBox ticketText={ticketNumber} rightBoxText={status} />
              <Text style={FontStyles.Regular_10_Black}>Created: {createdAt}</Text>
            </View>
          }
        />

        <ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>
          <LabeledTextField 
            label="Ticket Number" 
            placeholder="Enter ticket number" 
            icon={<Ionicons name="pricetag-outline" size={20} color="#999" />}
            value={ticketNumber}
            editable={false}
          />
          <LabeledTextField 
            label="Status" 
            placeholder="Current status" 
            icon={<Ionicons name="stats-chart-outline" size={20} color="#999" />}
            value={status}
            editable={false}
          />
          <LabeledTextField 
            label="Created At" 
            placeholder="Creation date and time" 
            icon={<Ionicons name="time-outline" size={20} color="#999" />}
            value={createdAt}
            editable={false}
          />
          <LabeledTextField label="User Name" placeholder="Enter user name" icon={<Ionicons name="person-outline" size={20} color="#999" />} />
          <LabeledTextField label="User Location" placeholder="Enter user location" icon={<Ionicons name="location-outline" size={20} color="#999" />} />
          <LabeledTextField label="Ticket Type" placeholder="Enter ticket type" icon={<Ionicons name="layers-outline" size={20} color="#999" />} />
          <LabeledTextField label="Ticket Title" placeholder="Enter ticket title" icon={<Ionicons name="document-text-outline" size={20} color="#999" />} />
          <LabeledTextField label="Issue" placeholder="Describe the issue" icon={<Ionicons name="alert-circle-outline" size={20} color="#999" />} />
          <LabeledTextField label="Ticket Main Category" placeholder="Enter main category" icon={<Ionicons name="list-outline" size={20} color="#999" />} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 40,
  },
  scrollBody: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  columnInRow: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: '85%',
    justifyContent: 'space-between',
  },
});
