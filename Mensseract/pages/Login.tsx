import { Button, Image, Pressable, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import TextField from "../components/textfields/TextField";
import { Ionicons } from "@expo/vector-icons";

export default function LoginPage() {
    return(
        <View style={styles.body}>
            <Text style={styles.title}>Bem Vindo ao Mensseract</Text>
            <Image source={require('../assets/images/splash-icon.jpg')} style={styles.image} />
            <TextField icon={Ionicons} placeholderText="Usuário" iconstyle="person-circle-outline"/> 
            <TextField type={true} icon={Ionicons} placeholderText="Senha" iconstyle="key-outline"/>
            <View style={styles.fotter}>
                <TouchableOpacity style={[styles.button,styles.buttonLogin]}> 
                    <Text style={[styles.title,{color: 'white'}]}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.buttonLogon]}> 
                    <Text style={[styles.title,{color: 'white'}]}>CRIAR CONTA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

