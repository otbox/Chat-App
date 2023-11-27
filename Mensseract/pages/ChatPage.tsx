import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserProfile } from "./ContactsPage";
import Messagee from "../components/ChatPage/Messagee";

interface msg{
    username: string,
    dateTime: Date,
    texto: string 
}


export default function ChatPage()  {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({headerLeft: () => (
            <TouchableOpacity> 
                <Text>teste</Text>
                <Image source={require('../assets/images/icon-app.png')} style={style.image} />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity>
                <Text>Options</Text>
            </TouchableOpacity>
        )
    })
    })
    const teste = new Date ('2012-12-12 12:12:12')
    return (
        <View>
            <Messagee  state="sent" text="Oiii, bom dia" username="Ana Claudia"  dateTime={teste} ></Messagee>
            {/* {.map((item, index) => {return(
                
            )})} */}
        </View>
    )
};

const style = StyleSheet.create({
    MsgContainer:{
        backgroundColor: 'white',
    },
    image: {
        width: 50,
        height: 50
    },
    userText: {

    }
})