import React, { useState } from 'react';
import {
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplitBox from './VoucherNumberDisplay';
import { getHeight, getWidth } from '../utils/utils';
import { FontStyles } from '../utils/fonts';
import CategoryComponentBox from '../screens/ScreenComponents/TicketCategoriesDisplayed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/routes/UserFlow';

type VoucherInfoRowProps = {
  voucherNumber: string;
  status: string;
  dropdownContent?: React.ReactNode; // Optional custom content
};

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function VoucherInfoRow({ voucherNumber, status, dropdownContent }: VoucherInfoRowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  const handleEyeIconPress = () => {
    navigation.navigate('TicketDetailForm', {
      ticketNumber: voucherNumber,
      status: status,
      createdAt: '26/02/2025 12:00pm' // You can make this dynamic if needed
    });
  };

  return (
    <>
      {/* Main Card */}
      <View style={[styles.box, isOpen ? null : { borderBottomWidth: 1, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }]}>
        <View style={styles.row}>
          <TouchableOpacity onPress={toggleDropdown} style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
              <Ionicons name="chevron-down" size={14} color="gray" />
            </View>

            <View style={styles.leftColumn}>
              <SplitBox ticketText={voucherNumber} rightBoxText={status} />
              <Text style={FontStyles.SemiBold_12_Black}>Cleaning</Text>
            </View>
          </TouchableOpacity>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <TouchableOpacity onPress={handleEyeIconPress}>
              <Image source={require('../assets/static/eyeIcon.png')} />
            </TouchableOpacity>
            <Text style={FontStyles.Regular_12_Black}>26/02/2025 12:00pm</Text>
          </View>
        </View>
      </View>

      {isOpen && (
        <View style={styles.dropdown}>
          {dropdownContent ?? (
            <>
              {/* Default dropdown content */}
              <View style={styles.horizontalLine} />

              <View style={styles.rowBetween}>
                <Text style={FontStyles.Bold_12_Black}>Requested by: John Doe</Text>
                <Text style={FontStyles.Bold_12_Black}>Dept: Housekeeping</Text>
              </View>

              <Text style={FontStyles.Regular_12_Black}>• Assigned Staff: John Doe</Text>
              <Text style={FontStyles.Regular_12_Black}>• Priority: High</Text>

              <CategoryComponentBox
                categories={[
                  ['Electrical', 'Switch Issue'],
                  ['Low Priority'],
                ]}
                categoryHeaders={['Main', 'Priority']}
              />
            </>
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: getWidth(10),
    paddingVertical: getHeight(8),
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'red',
    borderBottomWidth: 0,
    height: getHeight(75),
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    marginLeft: 8,
    justifyContent: 'space-between',
  },
  rightColumn: {
    minWidth: 70,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  dropdown: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'red',
    borderTopWidth: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    gap: 8,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'gold',
    marginBottom: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
