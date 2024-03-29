import { useEffect, useState } from "react";
import { View } from "react-native";
import database from "@react-native-firebase/database"
import ContactButton from "../components/ContactsPage/ContactButton";
import { nav } from "../App";
export default function SearchPage({navigation}: nav) {

    const [UsersArray, setUsersArray] = useState<object[]>([]);

    useEffect(() => {
        GetAllUsers();
    },[]) 

    const GetAllUsers = async () => {
        try{
            const snapshot = await database().ref('/users/').once('value')
            if(snapshot.exists()){
            const usersArray = Object.entries(snapshot.val()).map((item : any) => ({uid: item[0], nome:item[1].nome}))
            setUsersArray(usersArray);
            console.log(usersArray)
            }
        } catch (error){
            console.error('Erro ao buscar dados do Firebase:', error);
          }
    }
    return (
        <View>
            {UsersArray.map((item : any) => (
            <ContactButton key={item.uid}
                id={item.uid}
                username={item.nome} 
                imagem={require('../assets/images/icon-app.png')}
                navigation={navigation}
                />))}
        </View>
    )
}