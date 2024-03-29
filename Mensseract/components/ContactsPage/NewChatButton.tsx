import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { nav } from "../../App";

interface newChatsButton {
    navigation? : nav,
}

export default function NewChatButton({navigation} : newChatsButton) {
    const [open, setOpen] = useState<boolean>(false);
    type buttonProps = {
        IconName : GLYPHS, 
        size : number,
        onClick?: () => void,
    }
    const ButtonIcon = ({IconName, size, onClick} : buttonProps) => (
        <TouchableOpacity onPress={onClick} style= {style.buttons}>
            <Ionicons name={IconName} size={size} />
        </TouchableOpacity>
    )
    return (
        <View style={style.container}>
            <ButtonIcon onClick={() => {navigation.navigate('SearchPage')}} IconName={'add'} size={38}/>
        </View>
    )
};

const style = StyleSheet.create({
    container : {
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        right: 20,
    },
    buttons : {
        backgroundColor: '#FFCC66',
        marginTop: 5,
        borderRadius: 10,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

