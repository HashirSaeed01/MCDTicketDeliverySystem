// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   Dimensions,
// } from 'react-native';
// import { FontStyles } from '../../utils/fonts';
// import { getHeight, getWidth } from '../../utils/utils';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import type { DrawerContentComponentProps } from '@react-navigation/drawer';

// const DRAWER_WIDTH = getWidth(280);
// const SCREEN_HEIGHT = Dimensions.get('window').height;

// export default function CustomDrawer(props: DrawerContentComponentProps) {
//   const [isConfigExpanded, setIsConfigExpanded] = useState(false);
//   const role = 'admin'; // TODO: Get this from auth context or props

//   const renderAdminMenu = () => {
//     return (
//       <>
//         <DrawerItem
//           label="Reopen Request"
//           onPress={() => props.navigation.navigate('TicketDisplay', { 
//             role,
//             voucherNumber: 'TKT-',
//             status: 'In Progress'
//           })}
//           style={styles.drawerItem}
//           labelStyle={FontStyles.Regular_12_Black}
//         />

//         <DrawerItem
//           label="Tickets at Vendor"
//           onPress={() => props.navigation.navigate('TicketDisplay', { 
//             role,
//             voucherNumber: 'VND',
//             status: 'Pending'
//           })}
//           style={styles.drawerItem}
//           labelStyle={FontStyles.Regular_12_Black}
//         />

//         <DrawerItem
//           label="Email Tickets"
//           onPress={() => props.navigation.navigate('EmailTickets', { role })}
//           style={styles.drawerItem}
//           labelStyle={FontStyles.Regular_12_Black}
//         />

//         <TouchableOpacity
//           style={styles.drawerItem}
//           onPress={() => setIsConfigExpanded(!isConfigExpanded)}
//         >
//           <View style={styles.dropdownHeader}>
//             <Text style={[FontStyles.Regular_12_Black]}>Configurations</Text>
//             <Icon 
//               name={isConfigExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
//               size={24} 
//               color="#000" 
//             />
//           </View>
//         </TouchableOpacity>

//         {isConfigExpanded && (
//           <View style={styles.dropdownContent}>
//             <DrawerItem
//               label="Ticket Main Category"
//               onPress={() => props.navigation.navigate('GenericCategoryMappingPage', {
//                 headerTitle: "Ticket Main Category",
//                 headerBackgroundColor: "#FAFAFA",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                 ],
//                 categoryData: [
//                   ['Electrical'],
//                   ['Plumbing'],
//                   ['IT'],
//                   ['Security']
//                 ],
//                 noCategoryText: "No ticket categories found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['Main Category'],
//                 variant: "MainCategory"
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />

//             <DrawerItem
//               label="Second Category"
//               onPress={() => props.navigation.navigate('GenericCategoryMappingPage', {
//                 headerTitle: "Second Category",
//                 headerBackgroundColor: "#FAFAFA",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                 ],
//                 categoryData: [
//                   ['Electrical', 'Wiring'],
//                   ['Plumbing', 'Pipes'],
//                   ['IT', 'Network'],
//                   ['Security', 'CCTV']
//                 ],
//                 noCategoryText: "No ticket categories found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['Main Category', 'Second Category'],
//                 variant: "SecondCategory"
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />

//             <DrawerItem
//               label="Third Category"
//               onPress={() => props.navigation.navigate('GenericCategoryMappingPage', {
//                 headerTitle: "Third Category",
//                 headerBackgroundColor: "#FAFAFA",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                 ],
//                 categoryData: [
//                   ['Electrical', 'Wiring', 'Copper'],
//                   ['Plumbing', 'Pipes', 'PVC'],
//                   ['IT', 'Network', 'Router'],
//                   ['Security', 'CCTV', 'Camera']
//                 ],
//                 noCategoryText: "No ticket categories found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['Main Category', 'Second Category', 'Third Category'],
//                 variant: "ThirdCategory"
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />

//             <DrawerItem
//               label="Ticket Type"
//               onPress={() => props.navigation.navigate('GenericCategoryMappingPage', {
//                 headerTitle: "Ticket Type",
//                 headerBackgroundColor: "#FAFAFA",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                 ],
//                 categoryData: [
//                   ['Electrical'],
//                   ['Plumbing'],
//                   ['IT'],
//                   ['Security']
//                 ],
//                 noCategoryText: "No ticket categories found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['Ticket Type'],
//                 variant: "AddTicketType"
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />

//             <DrawerItem
//               label="Vendor Configurations"
//               onPress={() => props.navigation.navigate('GenericCategoryMappingPage', {
//                 headerTitle: "Vendor Config",
//                 headerBackgroundColor: "#FAFAFA",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                 ],
//                 categoryData: [
//                   ['Electrical', 'Wiring', 'Copper'],
//                   ['Plumbing', 'Pipes', 'PVC'],
//                   ['IT', 'Network', 'Router'],
//                   ['Security', 'CCTV', 'Camera']
//                 ],
//                 noCategoryText: "No ticket categories found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['Vendor Name', 'Contact No.', 'City']
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />

//             <DrawerItem
//               label="User and Role"
//               onPress={() => props.navigation.navigate('UserRoleAgentBoxComponent', {
//                 headerTitle: "User and Role Configuration",
//                 headerBackgroundColor: "white",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                   { name: "add", onPress: () => console.log("Add pressed") }
//                 ],
//                 categoryData: [
//                   ['John Doe', 'Admin', 'IT Department'],
//                   ['Jane Smith', 'Manager', 'Support'],
//                   ['Mike Johnson', 'Agent', 'Sales'],
//                   ['Sarah Wilson', 'User', 'Operations']
//                 ],
//                 noCategoryText: "No users found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['User Name', 'Role', 'Department']
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />

//             <DrawerItem
//               label="Agent Group"
//               onPress={() => props.navigation.navigate('UserRoleAgentBoxComponent', {
//                 headerTitle: "Agent Group Configuration",
//                 headerBackgroundColor: "#FAFAFA",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                   { name: "add", onPress: () => console.log("Add pressed") }
//                 ],
//                 categoryData: [
//                   ['Support', 'Techni', '8'],
//                   ['Sales ', 'Sales ', '5'],
//                   ['IT', 'IT ', '10'],
//                   ['Customer ', 'General ', '12']
//                 ],
//                 noCategoryText: "No agent groups found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['Group Name', 'Type', 'Members']
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />

//             <DrawerItem
//               label="Ticket Priority"
//               onPress={() => props.navigation.navigate('GenericCategoryMappingPage', {
//                 headerTitle: "Agent Group Configuration",
//                 headerBackgroundColor: "#FAFAFA",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                   { name: "add", onPress: () => console.log("Add pressed") }
//                 ],
//                 categoryData: [
//                   ['High', 1],
//                   ['Medium', 3],
//                   ['Low', 5],
//                 ],
//                 noCategoryText: "No agent groups found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['Ticket Priority', 'Turnaround time (TAT)'],
//                 variant: "EditTicketPriority"
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />

//             <DrawerItem
//               label="Resolution Comments"
//               onPress={() => props.navigation.navigate('GenericCategoryMappingPage', {
//                 headerTitle: "Resolution Comments",
//                 headerBackgroundColor: "#FAFAFA",
//                 headerIcons: [
//                   { name: "filter-outline", onPress: () => console.log("Filter pressed") },
//                   { name: "add", onPress: () => console.log("Add pressed") }
//                 ],
//                 categoryData: [
//                   ['High', 1],
//                   ['Medium', 3],
//                   ['Low', 5],
//                 ],
//                 noCategoryText: "No resolution comments found",
//                 pageBackgroundColor: "white",
//                 categoryHeaders: ['Resolution Comments', 'Main Category'],
//                 variant: "ResolutionComments"
//               })}
//               style={styles.subItem}
//               labelStyle={FontStyles.Regular_12_Black}
//             />
//           </View>
//         )}

//         <DrawerItem
//           label="Logout"
//           onPress={() => props.navigation.navigate('HelpDeskLogin')}
//           style={styles.drawerItem}
//           labelStyle={FontStyles.Regular_12_Black}
//         />
//       </>
//     );
//   };

//   const renderAgentMenu = () => {
//     return (
//       <>
//         <DrawerItem
//           label="Vendor Tickets"
//           onPress={() => props.navigation.navigate('TicketDisplay', { 
//             role,
//             voucherNumber: 'VND-',
//             status: 'Pending'
//           })}
//           style={styles.drawerItem}
//           labelStyle={FontStyles.Regular_12_Black}
//         />

//         <DrawerItem
//           label="Reports"
//           onPress={() => props.navigation.navigate('Reports')}
//           style={styles.drawerItem}
//           labelStyle={FontStyles.Regular_12_Black}
//         />

//         <DrawerItem
//           label="Logout"
//           onPress={() => props.navigation.navigate('HelpDeskLogin')}
//           style={styles.drawerItem}
//           labelStyle={FontStyles.Regular_12_Black}
//         />
//       </>
//     );
//   };

//   const renderUserMenu = () => {
//     return (
//       <DrawerItem
//         label="Logout"
//         onPress={() => props.navigation.navigate('HelpDeskLogin')}
//         style={styles.drawerItem}
//         labelStyle={FontStyles.Regular_12_Black}
//       />
//     );
//   };

//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.drawerHeader}>
//         <Text style={[FontStyles.SemiBold_24_Black]}>Menu</Text>
//       </View>

//       {role === 'admin' 
//         ? renderAdminMenu() 
//         : role === 'agent' 
//           ? renderAgentMenu() 
//           : renderUserMenu()}
//     </DrawerContentScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   drawerHeader: {
//     height: getHeight(60),
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//   },
//   drawerItem: {
//     minHeight: getHeight(50),
//     justifyContent: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//   },
//   dropdownHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: getWidth(20),
//   },
//   dropdownContent: {
//     backgroundColor: '#f5f5f5',
//   },
//   subItem: {
//     minHeight: getHeight(40),
//     justifyContent: 'center',
//   },
// }); 



















import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontStyles } from '../../utils/fonts';
import { getHeight, getWidth } from '../../utils/utils';

const DRAWER_WIDTH = getWidth(280);
const SCREEN_HEIGHT = Dimensions.get('window').height;

interface CustomDrawerProps extends DrawerContentComponentProps {
  role: string;
}

export default function CustomDrawer({ role, navigation, ...props }: CustomDrawerProps) {
  const [isConfigExpanded, setIsConfigExpanded] = useState(false);

  const renderAdminMenu = () => (
    <View style={{flex:1}}>
      <DrawerItem
        label="Reopen Request"
        pressColor="rgba(0, 0, 0, 0.1)"
        onPress={() =>
          navigation.navigate('TicketDisplay', {
            role,
            voucherNumber: 'TKT-',
            status: 'In Progress',
          })
        }
        style={styles.drawerItem}
        labelStyle={FontStyles.Regular_12_Black}
      />

      <DrawerItem
        label="Tickets at Vendor"
        pressColor="rgba(0, 0, 0, 0.1)"
        onPress={() =>
          navigation.navigate('TicketDisplay', {
            role,
            voucherNumber: 'VND',
            status: 'Pending',
          })
        }
        style={styles.drawerItem}
        labelStyle={FontStyles.Regular_12_Black}
      />

      <DrawerItem
        label="Email Tickets"
        pressColor="rgba(0, 0, 0, 0.1)"
        onPress={() => navigation.navigate('EmailTickets', { role })}
        style={styles.drawerItem}
        labelStyle={FontStyles.Regular_12_Black}
      />

      {/* Collapsible Configurations Section */}
      <TouchableOpacity
        style={[styles.drawerItem, styles.dropdownHeaderContainer]}
        activeOpacity={0.7}
        onPress={() => setIsConfigExpanded((prev) => !prev)}
      >
        <View style={styles.dropdownHeader}>
          <Text style={[FontStyles.Regular_12_Black]}>Configurations</Text>
          <Icon
            name={isConfigExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color="#000"
          />
        </View>
      </TouchableOpacity>

      {isConfigExpanded && (
       <View style={styles.dropdownContent}>
    <DrawerItem
      label="Ticket Main Category"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('GenericCategoryMappingPage', {
        headerTitle: "Ticket Main Category",
        headerBackgroundColor: "#FAFAFA",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
        ],
        categoryData: [
          ['Electrical'],
          ['Plumbing'],
          ['IT'],
          ['Security']
        ],
        noCategoryText: "No ticket categories found",
        pageBackgroundColor: "white",
        categoryHeaders: ['Main Category'],
        variant: "MainCategory"
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />

    <DrawerItem
      label="Second Category"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('GenericCategoryMappingPage', {
        headerTitle: "Second Category",
        headerBackgroundColor: "#FAFAFA",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
        ],
        categoryData: [
          ['Electrical', 'Wiring'],
          ['Plumbing', 'Pipes'],
          ['IT', 'Network'],
          ['Security', 'CCTV']
        ],
        noCategoryText: "No ticket categories found",
        pageBackgroundColor: "white",
        categoryHeaders: ['Main Category', 'Second Category'],
        variant: "SecondCategory"
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />

    <DrawerItem
      label="Third Category"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('GenericCategoryMappingPage', {
        headerTitle: "Third Category",
        headerBackgroundColor: "#FAFAFA",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
        ],
        categoryData: [
          ['Electrical', 'Wiring', 'Copper'],
          ['Plumbing', 'Pipes', 'PVC'],
          ['IT', 'Network', 'Router'],
          ['Security', 'CCTV', 'Camera']
        ],
        noCategoryText: "No ticket categories found",
        pageBackgroundColor: "white",
        categoryHeaders: ['Main Category', 'Second Category', 'Third Category'],
        variant: "ThirdCategory"
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />

    <DrawerItem
      label="Ticket Type"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('GenericCategoryMappingPage', {
        headerTitle: "Ticket Type",
        headerBackgroundColor: "#FAFAFA",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
        ],
        categoryData: [
          ['Electrical'],
          ['Plumbing'],
          ['IT'],
          ['Security']
        ],
        noCategoryText: "No ticket categories found",
        pageBackgroundColor: "white",
        categoryHeaders: ['Ticket Type'],
        variant: "AddTicketType"
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />

    <DrawerItem
      label="Vendor Configurations"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('GenericCategoryMappingPage', {
        headerTitle: "Vendor Config",
        headerBackgroundColor: "#FAFAFA",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
        ],
        categoryData: [
          ['Electrical', 'Wiring', 'Copper'],
          ['Plumbing', 'Pipes', 'PVC'],
          ['IT', 'Network', 'Router'],
          ['Security', 'CCTV', 'Camera']
        ],
        noCategoryText: "No ticket categories found",
        pageBackgroundColor: "white",
        categoryHeaders: ['Vendor Name', 'Contact No.', 'City']
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />

    <DrawerItem
      label="User and Role"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('UserRoleAgentBoxComponent', {
        headerTitle: "User and Role Configuration",
        headerBackgroundColor: "white",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
          { name: "add", onPress: () => console.log("Add pressed") }
        ],
        categoryData: [
          ['John Doe', 'Admin', 'IT Department'],
          ['Jane Smith', 'Manager', 'Support'],
          ['Mike Johnson', 'Agent', 'Sales'],
          ['Sarah Wilson', 'User', 'Operations']
        ],
        noCategoryText: "No users found",
        pageBackgroundColor: "white",
        categoryHeaders: ['User Name', 'Role', 'Department']
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />

    <DrawerItem
      label="Agent Group"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('UserRoleAgentBoxComponent', {
        headerTitle: "Agent Group Configuration",
        headerBackgroundColor: "#FAFAFA",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
          { name: "add", onPress: () => console.log("Add pressed") }
        ],
        categoryData: [
          ['Support', 'Techni', '8'],
          ['Sales ', 'Sales ', '5'],
          ['IT', 'IT ', '10'],
          ['Customer ', 'General ', '12']
        ],
        noCategoryText: "No agent groups found",
        pageBackgroundColor: "white",
        categoryHeaders: ['Group Name', 'Type', 'Members']
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />

    <DrawerItem
      label="Ticket Priority"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('GenericCategoryMappingPage', {
        headerTitle: "Agent Group Configuration",
        headerBackgroundColor: "#FAFAFA",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
          { name: "add", onPress: () => console.log("Add pressed") }
        ],
        categoryData: [
          ['High', 1],
          ['Medium', 3],
          ['Low', 5],
        ],
        noCategoryText: "No agent groups found",
        pageBackgroundColor: "white",
        categoryHeaders: ['Ticket Priority', 'Turnaround time (TAT)'],
        variant: "EditTicketPriority"
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />

    <DrawerItem
      label="Resolution Comments"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('GenericCategoryMappingPage', {
        headerTitle: "Resolution Comments",
        headerBackgroundColor: "#FAFAFA",
        headerIcons: [
          { name: "filter-outline", onPress: () => console.log("Filter pressed") },
          { name: "add", onPress: () => console.log("Add pressed") }
        ],
        categoryData: [
          ['High', 1],
          ['Medium', 3],
          ['Low', 5],
        ],
        noCategoryText: "No resolution comments found",
        pageBackgroundColor: "white",
        categoryHeaders: ['Resolution Comments', 'Main Category'],
        variant: "ResolutionComments"
      })}
      style={styles.subItem}
      labelStyle={FontStyles.Regular_12_Black}
    />
  </View>
      )}

      <DrawerItem
        label="Logout"
        pressColor="rgba(0, 0, 0, 0.1)"
        onPress={() => navigation.navigate('HelpDeskLogin')}
        style={styles.drawerItem}
        labelStyle={FontStyles.Regular_12_Black}
      />
    </View>
  );

  const renderAgentMenu = () => (
    <>
      <DrawerItem
        label="Vendor Tickets"
        pressColor="rgba(0, 0, 0, 0.1)"
        onPress={() =>
          navigation.navigate('TicketDisplay', {
            role,
            voucherNumber: 'VND-',
            status: 'Pending',
          })
        }
        style={styles.drawerItem}
        labelStyle={FontStyles.Regular_12_Black}
      />
      <DrawerItem
        label="Reports"
        pressColor="rgba(0, 0, 0, 0.1)"
        onPress={() => navigation.navigate('Reports')}
        style={styles.drawerItem}
        labelStyle={FontStyles.Regular_12_Black}
      />
      <DrawerItem
        label="Logout"
        pressColor="rgba(0, 0, 0, 0.1)"
        onPress={() => navigation.navigate('HelpDeskLogin')}
        style={styles.drawerItem}
        labelStyle={FontStyles.SemiBold_16_Black}
      />
    </>
  );

  const renderUserMenu = () => (
    <DrawerItem
      label="Logout"
      pressColor="rgba(0, 0, 0, 0.1)"
      onPress={() => navigation.navigate('HelpDeskLogin')}
      style={styles.drawerItem}
      labelStyle={FontStyles.Regular_12_Black}
    />
  );

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.drawerHeader}>
        <Text style={[FontStyles.SemiBold_24_Black]}>Menu</Text>
      </View>
      {role === 'admin'
        ? renderAdminMenu()
        : role === 'agent'
        ? renderAgentMenu()
        : renderUserMenu()}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: getHeight(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  drawerItem: {
    
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    zIndex: 1,
  },
  dropdownHeaderContainer: {
    zIndex: 2,
  },
  dropdownHeader: {
    height: getHeight(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getWidth(20),
  },
  dropdownContent: {
    backgroundColor: '#f5f5f5',
    zIndex: 1,
  },
  subItem: {
    minHeight: getHeight(40),
    justifyContent: 'center',
    zIndex: 1,
  },
});