import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { nav } from "../../App";
import database from "@react-native-firebase/database"

interface ContactButtonProps {
    navigation? : nav,
    imagem: ImageSourcePropType,
    username: string,
    id: number,
}

export default function ContactButton({navigation, username, imagem} : ContactButtonProps) {

    //console.log(imagem)

    const CreateOrAccess = async () => {
        database().ref(`/chats`).push();
        const ChatData = {
            participants : {}
        }
    }

    return (
    <TouchableOpacity onPress={() => {navigation.navigate('ChatPage11')}} style={style.container}> 
         <Image style={style.ProfileImage} source={imagem}/>    
        <Text style={style.textNome}>{username}</Text>
    </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        paddingLeft: 10,
    },
    textNome: {
        fontSize: 22, 
        fontWeight: '500'
    },
    ProfileImage: {
        height: 50,
        width: 50
    }
})