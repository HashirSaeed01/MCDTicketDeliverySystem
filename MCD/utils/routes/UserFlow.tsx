import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";

// Main screens
import UserFlowSelection from "../../screens/3_UserFlowSelection";
import DashboardRoute from "../../screens/4_DashboardRoute";
import AdminDashboard from "../../screens/7_Dashboard";
import AdminTicketsDisplay from "../../screens/6_ExistingTicketsDisplay";
import AdminCreateNewTicket from "../../screens/5_CreateNewTicket";
import HelpDeskLogin from "../../screens/1_SelectionUserType";
import TicketDetailForm from "../../screens/ScreenComponents/TicketDetailForm";
import UserRoleAgentBoxComponent from "../../screens/ScreenComponents/UserRoleAgentBoxComponent";

export type RootStackParamList = {
  HelpDeskLogin: undefined;
  AdminLogin: { role: string };
  UserFlowSelection: { role: string };
  AppNavigator: {role: string};
};

export type DrawerParamList = {
  DashboardRoute: { role: string };
  AdminTicketsDisplay: undefined;
  AdminCreateNewTicket: undefined;
  TicketDisplay: { role: string; voucherNumber: string; status: string };
  AdminTicketsAtVendor: { role: string; voucherNumber: string; status: string };
  EmailTickets: { role: string };
  Reports: { role: string };
  TicketDetailForm: { ticketNumber: string; status: string; createdAt?: string };
  NewTicketForm: undefined;
  TicketMainCategoryConfig: { role: string };
  TicketSecondCategoryConfig: { role: string };
  TicketThirdCategoryConfig: { role: string };
  TicketTypeScreen: { role: string };
  VendorConfigurations: { role: string };
  UserAndRole: { role: string };
  AgentGroup: { role: string };
  TicketPriority: { role: string };
  ResolutionComments: { role: string };
  CustomDrawer: { role: string };
  AdminFileManager: undefined;
  AddCategoryForm: { variant: string };
  UserRoleAgentBoxComponent: {
    headerTitle: string;
    headerSubtitle?: string;
    headerBackgroundColor?: string;
    headerIcons?: { name: string }[];
    categoryData: string[][];
    noCategoryText?: string;
    pageBackgroundColor?: string;
    categoryHeaders?: string[];
    wrapperStyle?: any;
    children?: React.ReactNode;
    buttonComponent?: React.ReactNode;
  };
  GenericCategoryMappingPage: {
    headerTitle: string;
    headerSubtitle?: string;
    headerBackgroundColor?: string;
    headerIcons?: { name: string }[];
    categoryData: string[][];
    noCategoryText?: string;
    pageBackgroundColor?: string;
    categoryHeaders?: string[];
    wrapperStyle?: any;
    children?: React.ReactNode;
    buttonComponent?: React.ReactNode;
    variant: string;
  };
};

export type DrawerScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList>,
  NativeStackScreenProps<RootStackParamList>["navigation"]
>;

export type Props<T extends keyof DrawerParamList> = {
  navigation: DrawerScreenNavigationProp;
  route: { params: DrawerParamList[T] };
};

export const screenConfig = {
  screens: {
    UserFlowSelection,
    DashboardRoute,
    AdminDashboard,
    AdminTicketsDisplay,
    AdminCreateNewTicket,
    HelpDeskLogin,
    TicketDetailForm,
    UserRoleAgentBoxComponent,
    
  
   
  },
};
  


  