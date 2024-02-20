import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextField from "../components/textfields/TextField";
import { styles } from "./style";
import { nav } from "../App";
import { useState } from "react";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import db from '@react-native-firebase/database'
export default function CreateAccountPage({navigation} : nav) {
    const [email, setEmail] = useState<string>('')
    const [passw, setPassw] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const registerAndGoLogin = async () => { 
        if (email && passw) {
            console.log(email + passw)
            //navigation.navigate('ContactsPage')
            try {
                const response = await auth().createUserWithEmailAndPassword(
                    email, 
                    passw
                )
                if (response.user){
                    await createProfile(response)
                    navigation.replace('Login')
                }
            }catch (err) {
                console.log(err)
                Alert.alert('Ops, por favor cheque seus dados e tente novamente')
            }
        }
        else {
            console.log('Email ou Senha Incorretos')
        }
    }

    const createProfile = async (response : FirebaseAuthTypes.UserCredential) =>{
        db().ref(`/users/${response.user.uid}`).set({nome});
        console.log("adicionado com sucesso")
    }
    return(
        <View style={styles.body}>
            <Image style={stylePg.accountImage} source={require('../assets/images/menseract_icon5.jpg')} /> 
            <TextField onChange={setNome} placeholderText="Nome">
                <Text style={styles.TextLabel}>Nome de Usuário:</Text>
            </TextField>
            <TextField onChange={setEmail}  placeholderText="E-mail">
                <Text style={styles.TextLabel}>Email:</Text>
            </TextField>
            <TextField onChange={setPassw} hiddenText={true} placeholderText="Senha">
                <Text style={styles.TextLabel}>Senha:</Text>
            </TextField>
            <TextField hiddenText={true} placeholderText="Confirme a Senha" />
            <TextField placeholderText="Nome" />
            <TouchableOpacity onPress={registerAndGoLogin} style={[styles.button,styles.buttonLogon]}> 
                    <Text style={[styles.title,{color: 'white'}]}>CRIAR CONTA</Text>
            </TouchableOpacity>
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