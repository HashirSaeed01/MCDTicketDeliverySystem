import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LabeledTextField from '../../Components/TextFields';
import { getHeight } from '../../utils/utils';
import ProfileHeader from '../../Components/AppTopBar';
import { FontStyles } from '../../utils/fonts';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/routes/UserFlow";

type Props = NativeStackScreenProps<RootStackParamList, 'NewTicketForm'>;

export default function NewTicketForm({ route, navigation }: Props) {
  const [formData, setFormData] = useState({
    department: '',
    city: '',
    storeLocation: '',
    mainCategory: '',
    secondCategory: '',
    thirdCategory: '',
    ticketTitle: '',
    description: '',
    attachments: [] // For handling document & image attachments
  });

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.wrapper}>
      <ProfileHeader
        name={'New Ticket'}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollBody} showsVerticalScrollIndicator={false}>
        <LabeledTextField 
          label="Department" 
          placeholder="Enter department" 
          icon={<Ionicons name="business-outline" size={20} color="#999" />}
          value={formData.department}
          onChangeText={handleChange('department')}
        />
        
        <LabeledTextField 
          label="City" 
          placeholder="Enter city" 
          icon={<Ionicons name="location-outline" size={20} color="#999" />}
          value={formData.city}
          onChangeText={handleChange('city')}
        />

        <LabeledTextField 
          label="Store Location" 
          placeholder="Enter store location" 
          icon={<Ionicons name="storefront-outline" size={20} color="#999" />}
          value={formData.storeLocation}
          onChangeText={handleChange('storeLocation')}
        />

        <LabeledTextField 
          label="Main Category" 
          placeholder="Select main category" 
          icon={<Ionicons name="list-outline" size={20} color="#999" />}
          value={formData.mainCategory}
          onChangeText={handleChange('mainCategory')}
        />

        <LabeledTextField 
          label="Second Category" 
          placeholder="Select second category" 
          icon={<Ionicons name="list-outline" size={20} color="#999" />}
          value={formData.secondCategory}
          onChangeText={handleChange('secondCategory')}
        />

        <LabeledTextField 
          label="Third Category" 
          placeholder="Select third category" 
          icon={<Ionicons name="list-outline" size={20} color="#999" />}
          value={formData.thirdCategory}
          onChangeText={handleChange('thirdCategory')}
        />

        <LabeledTextField 
          label="Ticket Title" 
          placeholder="Enter ticket title" 
          icon={<Ionicons name="document-text-outline" size={20} color="#999" />}
          value={formData.ticketTitle}
          onChangeText={handleChange('ticketTitle')}
        />

        <LabeledTextField 
          label="Description" 
          placeholder="Enter ticket description" 
          icon={<Ionicons name="create-outline" size={20} color="#999" />}
          value={formData.description}
          onChangeText={handleChange('description')}
        />

        <TouchableOpacity 
          style={styles.attachmentButton}
          onPress={() => {
            // Handle document & image attachment
          }}
        >
          <Ionicons name="attach-outline" size={20} color="#999" />
          <Text style={[FontStyles.Regular_12_Black, styles.attachmentText]}>
            Attach Documents & Images
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollBody: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  attachmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    marginTop: 8,
  },
  attachmentText: {
    marginLeft: 8,
  }
});