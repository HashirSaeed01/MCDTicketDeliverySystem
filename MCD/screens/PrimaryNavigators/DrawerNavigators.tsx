import React from 'react';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DashboardRoute from '../4_DashboardRoute';
import { DrawerParamList, RootStackParamList } from '../../utils/routes/UserFlow';
import CustomDrawer from '../ScreenComponents/CustomDrawer';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function AppNavigator({ route, navigation }: DrawerScreenProps<RootStackParamList, 'AppNavigator'>) {
    const { role } = route.params;

    return (
        <Drawer.Navigator
        

            drawerContent={(props) => <CustomDrawer {...props} role={role} />}

            screenOptions={{


                headerShown: false, // Keep header
                drawerType: 'front', // 'slide', 'front', or 'permanent'
                drawerStyle: {
                    backgroundColor: 'white', // dark background
                    width: 280,
                },

            }}
        >
               <Drawer.Screen
        name="DashboardRoute"
        component={DashboardRoute} // Properly mount the component
        initialParams={{ role }}
      />


        </Drawer.Navigator>
    );
}
