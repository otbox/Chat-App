import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { nav } from "../App";
import { useNavigation } from "@react-navigation/native";
import ContactButton from "../components/ContactButton";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const map = [{nome: 'Geraldo', imagem : '', id: ''}]

const Tab = createMaterialTopTabNavigator(); 

export default function ContactsPage() {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({headerRight: () => (
            <Text></Text>
        )})
    },[])

    return(
        <View>
            <ContactButton 
             id={1}
             navigation={'ssd'}
             username="Pedro"
             imagem = {require('../assets/images/icon-app.png')}
             />
        </View>
    )
};
