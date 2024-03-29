import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import TextField from "../components/textfields/TextField";
import { Ionicons } from "@expo/vector-icons";
import { nav } from "../App";
import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes }  from '@react-native-firebase/auth'
export default function LoginPage({navigation} : nav) {
    const [email, setEmail] = useState<string>('')
    const [passw, setPassw] = useState<string>('')

    //Sistema de Logar automaticamente
    const onAuthStateChanged = (user : FirebaseAuthTypes.User | null) => {
        if (user){
            navigation.replace("ContactsPage")
        }else{
            // navigation.replace("Login")
        }
    }
    useEffect(() => {
        const sub = auth().onAuthStateChanged(onAuthStateChanged);
        return sub;
    }, [])
    const LoginAndGoHome = async () => { 
        if (email && passw) {
            try{
                const response = await auth().signInWithEmailAndPassword(
                    email,
                    passw
                )
                if(response.user) {
                    navigation.replace("ContactsPage")
                }
            }catch(err){
                Alert.alert('Ops, por favor cheque seus dados e tente novamente')
            }
            //navigation.navigate('ContactsPage')
        }
        else {
            console.log('Email ou Senha Incorretos')
        }
    }

    return(
        <View style={styles.body}>
            <Text style={styles.title}>Bem Vindo ao Mensseract</Text>
            <Image source={require('../assets/images/splash-icon.jpg')} style={styles.image} />
            <TextField onChange={setEmail} icon={Ionicons} placeholderText="Email:" iconstyle="person-circle-outline">
                <Text>Nome do Usuário:</Text>
            </TextField> 
            <TextField  onChange={setPassw} hiddenText={true} icon={Ionicons} placeholderText="Senha" iconstyle="key-outline">
                <Text>Senha do Usuário:</Text>
            </TextField> 
            <View style={styles.fotter}>
                <TouchableOpacity onPress={LoginAndGoHome } style={[styles.button,styles.buttonLogin]}> 
                    <Text  style={[styles.title,{color: 'white'}]}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('CreateAccount')}} style={[styles.button,styles.buttonLogon]}> 
                    <Text style={[styles.title,{color: 'white'}]}>CRIAR CONTA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

