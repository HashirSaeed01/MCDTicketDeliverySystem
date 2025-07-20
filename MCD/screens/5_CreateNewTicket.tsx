import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LabeledTextField from '../Components/TextFields';
import ProfileHeader from '../Components/AppTopBar';
import CustomBottomBar from '../Components/BottomNavigationBar';
import BottomNavigationButton from '../Components/BottomNavigationButton';
import { getHeight } from '../utils/utils';
import SubmitButton from '../Components/LoginSubmitButton';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/routes/UserFlow';
import { useNavigation } from '@react-navigation/native';


type inputProp = {
  userType?: string
}





export default function AdminCreateTicket({ userType }: inputProp) {


  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();




  return (


    <><ProfileHeader name={'New Ticket'}>

    </ProfileHeader><ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>
        <LabeledTextField label="User Name" placeholder="Enter user name"
          icon={<Ionicons name="person-outline" size={20} color="#999" />} />
        <LabeledTextField label="User Location" placeholder="Enter user location"
          icon={<Ionicons name="location-outline" size={20} color="#999" />} />
        <LabeledTextField label="Department" placeholder="Enter department"
          icon={<Ionicons name="business-outline" size={20} color="#999" />} />


        <LabeledTextField label="Select Issue" placeholder="Select issue"
          icon={<Ionicons name="help-circle-outline" size={20} color="#999" />} />

          
        <LabeledTextField label="Ticket Main Category" placeholder="Enter main category"
          icon={<Ionicons name="list-outline" size={20} color="#999" />} />
        <LabeledTextField label="Ticket Second Category" placeholder="Enter second category"
          icon={<Ionicons name="list-circle-outline" size={20} color="#999" />} />

        {userType === 'agent' && (
          <LabeledTextField
            label="Ticket Third Category"
            placeholder="Enter ticket description"
            icon={<Ionicons name="document-text-outline" size={20} color="#999" />}
          />
        )}

        
        <LabeledTextField label="Ticket Title" placeholder="Enter ticket title"
          icon={<Ionicons name="pricetag-outline" size={20} color="#999" />} />
        <LabeledTextField label="Ticket Description" placeholder="Enter ticket description"
          icon={<Ionicons name="document-text-outline" size={20} color="#999" />} />









        <LabeledTextField label="Attach Documents/Image" placeholder="Enter ticket description"
          icon={
            <View style={styles.iconContainer}>
              <Ionicons name="attach" size={24} color="#000" onPress={
                ()=>
                
              navigation.navigate('AdminFileManager')
              
              } />
              <Ionicons name="camera" size={24} color="#000" />
            </View>
          } />



        <FourBoxLayout header={['Hello', 'Hello']} rows={[['Hello', 'hELLO']]} />




        <View style={{ marginBottom: getHeight(30) }}>

          <SubmitButton title={'Create Ticket'} onPress={function (event: GestureResponderEvent): void {
            throw new Error('Function not implemented.');
          }}>

          </SubmitButton>

        </View>





      </ScrollView></>




  );
}

const styles = StyleSheet.create({


  iconContainer: {
    flexDirection: 'row', // or 'column' if you want them stacked
    gap: 8, // for spacing (use margin if RN version < 0.71)
    alignItems: 'center',
  },



  documentUploadField: {
    width: '100%',
    backgroundColor: 'white',
    height: getHeight(40),
    borderRadius: 12,
    borderWidth: 0.3,
    marginVertical: 20
  },

  scrollBody: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: 'white'
  },








  columnBox: {
    flexDirection: 'column',
    marginBottom: getHeight(30)

  },

  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  HeaderRow: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },


  leftBox: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
  },
  rightBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
  },



  headerBox: {
  backgroundColor: '#F5F5F5', // Light gray tint
},

headerText: {
  fontWeight: 'bold',
  color: '#333',
},



});



type FourBoxLayoutProps = {
  header: [string, string];
  rows: [string, string][];
};

function FourBoxLayout({ header, rows }: FourBoxLayoutProps) {
  return (
    <View style={styles.columnBox}>
      {/* Header Row */}
      <View style={styles.HeaderRow}>
        <View style={[styles.leftBox, styles.headerBox]}>
          <Text style={styles.headerText}>{header[0]}</Text>
        </View>
        <View style={[styles.rightBox, styles.headerBox]}>
          <Text style={styles.headerText}>{header[1]}</Text>
        </View>
      </View>

      {/* Data Rows */}
      {rows.map(([left, right], index) => (
        <View style={styles.row} key={index}>
          <View style={styles.leftBox}>
            <Text>{left}</Text>
          </View>
          <View style={styles.rightBox}>
            <Text>{right}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
