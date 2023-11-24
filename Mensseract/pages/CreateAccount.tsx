import { Image, StyleSheet, Text, View } from "react-native";
import TextField from "../components/textfields/TextField";
import { styles } from "./style";

export default function CreateAccountPage() {
    return(
        <View style={styles.body}>
            <Image style={stylePg.accountImage} source={require('../assets/images/menseract_icon5.jpg')} /> 
            <TextField placeholderText="Nome">
                <Text style={styles.TextLabel}>Nome de Usuário:</Text>
            </TextField>
            <TextField placeholderText="E-mail">
                <Text style={styles.TextLabel}>Email:</Text>
            </TextField>
            <TextField hiddenText={true} placeholderText="Senha">
                <Text style={styles.TextLabel}>Senha:</Text>
            </TextField>
            <TextField hiddenText={true} placeholderText="Confirme a Senha" />
            <TextField placeholderText="Nome" />
        </View>
    )
}

const stylePg = StyleSheet.create({
    accountImage: {
        borderRadius: 100, 
        width: 80,
        height: 80,
    }
}) 