import { Image, StyleSheet, Text, View } from "react-native";
import TextField from "../components/textfields/TextField";

export default function CreateAccountPage() {
    return(
        <View>
            <Image source={require('../assets/images/menseract_icon5.jpg')} /> 
            <TextField placeholderText="Nome" />
            <TextField placeholderText="E-mail">
                <Text>Email:</Text>
            </TextField>
            <TextField type={true} placeholderText="Senha">
                <Text>Senha:</Text>
            </TextField>
            <TextField type={true} placeholderText="Confire a Senha" />
            <TextField placeholderText="Nome" />
        </View>
    )
}

const styleAccount = StyleSheet.create({
    accountImage: {
        borderRadius: 100, 
        width: 80,
        height: 80,
    }
}) 