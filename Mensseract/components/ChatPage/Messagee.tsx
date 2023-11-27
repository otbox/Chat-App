import { StyleSheet, Text, View } from "react-native"

interface MessageProps {
    username : string,
    dateTime: Date,
    text: string,
    state: 'sent' | 'viewed' | 'waitng'
}
export default function Messagee({username, dateTime, text, state} : MessageProps) {
    return(
        <View  style={style.container}> 
            <Text style={style.username}>{username}</Text>
            <Text style={style.text}>{text}</Text>
            <Text style={style.dateTimeText}>{dateTime.toString()}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        padding: 10,
        maxWidth: '70%',
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        marginVertical: 10,
        backgroundColor: 'orange',
        marginHorizontal: 10
    },
    username:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    text: {
        color: 'white',
        fontSize: 11,
    },
    dateTimeText:{
        color: 'gray',
        fontsize: 9
    }
})