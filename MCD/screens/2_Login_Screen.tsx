import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getHeight, getWidth } from '../utils/utils';
import LabeledTextField from '../Components/TextFields';
import SubmitButton from '../Components/LoginSubmitButton';
import { FontStyles } from '../utils/fonts';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/routes/UserFlow';

type Props = NativeStackScreenProps<RootStackParamList, 'AdminLogin'>;

export default function AdminLoginScreen({ navigation, route }: Props) {
  const { role } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/static/back.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />

        <View style={styles.box}>
          <Image
            source={require('../assets/static/McDonaldsLogo.jpg')}
            style={styles.image}
            resizeMode="cover"
          />

          <Text style={[FontStyles.SemiBold_24_Black, { marginBottom: getHeight(40) }]}>
            HelpDesk Login
          </Text>

          <LabeledTextField label={'Email'} placeholder="user@mcdonalds.com" />
          <LabeledTextField label={'Password'} placeholder="Enter your password" />
        
          <SubmitButton
            title={'Submit'}
            onPress={() => {
              if (role === 'user') {
                navigation.navigate('AppNavigator', {role});
              } else if (role === 'agent' || role === 'admin' || role === 'supervisor') {
                navigation.navigate('UserFlowSelection', { role });
              }
            }}
          />

          <Text
            style={[
              FontStyles.Regular_12_Black,
              {
                marginTop: getHeight(24),
                marginBottom: getHeight(12),
              },
            ]}
          >
            Forgot your password?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9b200',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    marginTop: getHeight(60),
  },
  box: {
    paddingHorizontal: getWidth(20),
    paddingTop: getHeight(20),
    width: getWidth(300),
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: getHeight(12),
    marginTop: getHeight(16),
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: getHeight(500),
    bottom: 0,
    left: 0,
  },
});
