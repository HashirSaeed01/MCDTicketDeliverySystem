import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Dashboard from './7_Dashboard';
import AdminCreateTicket from './5_CreateNewTicket';
import AdminTicketsDisplay from './6_ExistingTicketsDisplay';
import { Props } from '../utils/routes/UserFlow';
import { getHeight, getWidth } from '../utils/utils';

const Tab = createBottomTabNavigator();

export default function DashboardRoute({ route, navigation }: Props<'DashboardRoute'>) {
  const { role } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: getHeight(70),
          backgroundColor: 'red',
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      {/* Left Button (Tickets) */}
      <Tab.Screen
        name="Tickets"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomNavButton
              image={require('../assets/static/Ticket.png')}
              label="Tickets"
              focused={focused}
            />
          ),
        }}
      >
        {() => <AdminTicketsDisplay userType={role} />}
      </Tab.Screen>
<Tab.Screen
  name="CreateTicket"
  component={AdminCreateTicket}
  options={{
    tabBarButton: (props) => {
      // Safely remove delayLongPress if it's null
      const { delayLongPress, ...rest } = props as any;

      return (
        <TouchableOpacity
          {...rest}
          // explicitly avoid passing delayLongPress
          style={[styles.centerButtonWrapper]}
          activeOpacity={0.7}
        >
          <View style={styles.outerCircle}>
            <Image
              source={require('../assets/static/Vector.png')}
              style={styles.centerImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      );
    },
  }}
/>


      {/* Right Button (Dashboard) */}
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomNavButton
              image={require('../assets/static/Ticket.png')}
              label="Dashboard"
              focused={focused}
            />
          ),
        }}
      >
        {() => <Dashboard userType={role} onMenuPress={() => navigation.openDrawer()} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function CustomNavButton({
  image,
  label,
  focused,
}: {
  image: ReturnType<typeof require>;
  label: string;
  focused: boolean;
}) {
  return (
    <View style={[styles.sideButton, { backgroundColor: focused ? 'white' : 'transparent' }]}>
      <Image
        source={image}
        style={[styles.icon, { tintColor: focused ? 'black' : 'white' }]}
        resizeMode="contain"
      />
      <Text style={{ color: focused ? 'black' : 'white', fontSize: 12 }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sideButton: {
    width: 120,
    height: 63,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  centerButtonWrapper: {
    top: -getHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // ensure it's above the bar
  },
  outerCircle: {
    width: getWidth(85),
    height: getWidth(85),
    borderRadius: getWidth(85) / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  centerImage: {
    width: getWidth(35),
    height: getWidth(35),
  },
});
