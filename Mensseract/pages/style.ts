import { StyleSheet } from "react-native";
// import { Dimensions } from "react-native";
// const widthMultiplierSizeProportinal = Dimensions.get('window').height / Dimensions.get('window').width
// const  a = Dimensions.get('window').height * 0.4
export const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        marginTop: '4%',
        //justifyContent: 'center', // Centralizar verticalmente
        alignItems: 'center', // Centralizar horizontalmente
    },
    title: {
        fontSize: 20,
        fontWeight:'bold',
    },
    TextLabel: {
        fontSize: 18,
        color: 'gray' 
    },
    textinput: {
        width: 100,
        height: 40,
        borderRadius: 4,
        borderWidth: 2, 
        borderColor: 'black',
        fontSize: 16,
    },
    image:{
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 10,
        marginVertical: 20
        //borderImage: 'linear-gradient(to right, #ff0000, #00ff00) 1',
        // borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    fotter: {
        position: 'relative',
        bottom: '-15%',
        width: '100%',
        paddingHorizontal: 40,
        height: 100,
        justifyContent: "space-between",
    },
    button: {
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
        borderRadius: 5,
    },
    buttonLogin: {
        backgroundColor: 'black',
        marginBottom: 30
    },
    buttonLogon: {
        backgroundColor: 'orange',
    }
})