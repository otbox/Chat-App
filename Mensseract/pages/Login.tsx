import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import TextField from "../components/textfields/TextField";
import { Ionicons } from "@expo/vector-icons";
import { nav } from "../App";

export default function LoginPage({navigation} : nav) {
    return(
        <View style={styles.body}>
            <Text style={styles.title}>Bem Vindo ao Mensseract</Text>
            <Image source={require('../assets/images/splash-icon.jpg')} style={styles.image} />
            <TextField icon={Ionicons} placeholderText="Usuário" iconstyle="person-circle-outline">
                <Text>Nome do Usuário:</Text>
            </TextField> 
            <TextField hiddenText={true} icon={Ionicons} placeholderText="Senha" iconstyle="key-outline">
                <Text>Senha do Usuário:</Text>
            </TextField> 
            <View style={styles.fotter}>
                <TouchableOpacity style={[styles.button,styles.buttonLogin]}> 
                    <Text onPress={() => {navigation.navigate('ContactsPage')}} style={[styles.title,{color: 'white'}]}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('CreateAccount')}} style={[styles.button,styles.buttonLogon]}> 
                    <Text style={[styles.title,{color: 'white'}]}>CRIAR CONTA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

