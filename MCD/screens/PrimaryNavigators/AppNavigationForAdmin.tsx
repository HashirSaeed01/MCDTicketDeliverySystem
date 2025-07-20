// navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HelpDeskLogin from '../1_SelectionUserType';
import AdminLoginScreen from '../2_Login_Screen';
import DashboardRoute from '../4_DashboardRoute';
import { RootStackParamList, DrawerParamList } from '../../utils/routes/UserFlow';
import UserFlowSelection from '../3_UserFlowSelection';
import AdminTicketsDisplay from '../6_ExistingTicketsDisplay';
import AdminCreateNewTicket from '../5_CreateNewTicket';
import TicketsAtVendorComponent from '../ScreenComponents/DisplayAndFilterTickets';
import TicketDetailForm from '../ScreenComponents/TicketDetailForm';
import GenericCategoryMappingPage from '../ScreenComponents/CategoryColumnPage';
import UserRoleAgentBoxComponent from '../ScreenComponents/UserRoleAgentBoxComponent';
import AdminFileManager from '../5.1_NewTicketFileManager';
import AddCategoryForm from '../ScreenComponents/AddTicketPageComponent';
import CustomDrawer from '../ScreenComponents/CustomDrawer';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

// Drawer screens wrapper
function DrawerScreens() {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} role="admin" />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="DashboardRoute"
    >
      <Drawer.Screen 
        name="DashboardRoute" 
        component={DashboardRoute}
        initialParams={{ role: 'admin' }}
      />
      <Drawer.Screen name="AdminTicketsDisplay" component={AdminTicketsDisplay} />
      <Drawer.Screen name="AdminCreateNewTicket" component={AdminCreateNewTicket} />
      <Drawer.Screen name="UserRoleAgentBoxComponent" component={UserRoleAgentBoxComponent} />
      <Drawer.Screen name="AddCategoryForm" component={AddCategoryForm} />
      <Drawer.Screen name="TicketDisplay" component={TicketsAtVendorComponent} />
      <Drawer.Screen name="TicketDetailForm" component={TicketDetailForm} />
      <Drawer.Screen name="GenericCategoryMappingPage" component={GenericCategoryMappingPage} />
      <Drawer.Screen name="AdminFileManager" component={AdminFileManager} />
    </Drawer.Navigator>
  );
}

export default function AppNavigatorForAdmin() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="HelpDeskLogin"
        screenOptions={{ 
          headerShown: false,
          animation: 'slide_from_right'
        }}
      >
        <Stack.Screen 
          name="HelpDeskLogin" 
          component={HelpDeskLogin} 
        />
        <Stack.Screen 
          name="AdminLogin" 
          component={AdminLoginScreen} 
        />
        <Stack.Screen 
          name="UserFlowSelection" 
          component={UserFlowSelection} 
        />
        <Stack.Screen
          name="AppNavigator"
          component={DrawerScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
