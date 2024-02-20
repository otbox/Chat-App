import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NewChatButton() {
    const [open, setOpen] = useState<boolean>(false);
    type buttonProps = {
        IconName : GLYPHS, 
        size : number
    }
    const ButtonIcon = ({IconName, size} : buttonProps) => (
        <TouchableOpacity style= {style.buttons}>
            <Ionicons name={IconName} size={size} />
        </TouchableOpacity>
    )
    return (
        <View style={style.container}>
            <ButtonIcon IconName={'add'} size={38}/>
            <ButtonIcon IconName={'add'} size={38}/>
            <ButtonIcon IconName={'add'} size={38}/>
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

