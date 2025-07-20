import { StyleSheet, View, Image, Text } from "react-native";
import { getHeight, getWidth } from "../utils/utils";
import SimpleButton from "../Components/UserFlowSelectButton";
import { FontStyles } from "../utils/fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utils/routes/UserFlow";

type Props = NativeStackScreenProps<RootStackParamList, 'UserFlowSelection'>;

export default function UserFlowSelection({ navigation, route }: Props) {
    const { role } = route.params;

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/static/back.png')}
                style={styles.backgroundImage}
                resizeMode="contain"
            />

            <Image
                source={require('../assets/static/McDonaldsLogo.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={[FontStyles.SemiBold_18_Black, { textAlign: 'center', marginBottom: getHeight(30) }]}>Please choose user flow to login into system! </Text>

            <SimpleButton 
                label="User Flow" 
                imageSource={require('../assets/static/ProfileIconUserFlow.png')}
                onPress={() => navigation.navigate('AppNavigator')}
            />
            <SimpleButton 
                label="Agent Flow" 
                imageSource={require('../assets/static/AgentFaceIcon.png')} 
                onPress={() => navigation.navigate('AppNavigator')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9b200',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: getWidth(30)
    },

    image: {
        width: getWidth(120), 
        height: getHeight(100), 
        marginTop: getHeight(120), 
        alignSelf: 'center', 
        marginBottom: getHeight(20)
    },

    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: getHeight(500),
        bottom: 0,
        left: 0,
    },
});