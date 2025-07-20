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
import CustomButton from '../Components/SelectTypeOfUserButton';
import { FontStyles } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/routes/UserFlow';


type Props = NativeStackScreenProps<RootStackParamList, 'HelpDeskLogin'>;


export default function HelpDeskLogin({
    navigation,
  } : Props ) {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/static/back.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />

        <Image
          source={require('../assets/static/McDonaldsLogo.jpg')}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={[FontStyles.SemiBold_24_Black, { marginBottom: getHeight(20) }]}>
          HelpDesk Login
        </Text>

        <View style={styles.buttonColumn}>
          <CustomButton
            label="User Login"
            onPress={() =>navigation.navigate('AdminLogin', { role: 'user' })
            }

            
          />
          <CustomButton
            label="Support Agent Login"
            onPress={() => navigation.navigate('AdminLogin', { role: 'agent' })
            }
          />

          <CustomButton
            label="Supervisor Login"
            onPress={ ()=>

              navigation.navigate('AdminLogin', { role: 'supervisor' })




            }
          />
          <CustomButton
            label="Admin Login"
            onPress={ 
              ()=>
              navigation.navigate('AdminLogin', { role: 'admin' })

            }
          />
        </View>

        <View style={{ flex: 1 }} />

        <View style={styles.bottomTextContainer}>
          <CustomButton
            label={
              'Note: Select role to proceed process-flow of specific user role. (it’s a temporary screen to demonstrate process-flow)'
            }
            variant={2}
          />
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
    marginTop: getHeight(40),
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: getHeight(12),
  },
  buttonColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    flexDirection: 'column',
    gap: 16,
  },
  bottomTextContainer: {
    marginBottom: 80,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: getHeight(500),
    bottom: 0,
    left: 0,
  },
});
