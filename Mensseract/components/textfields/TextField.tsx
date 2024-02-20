//import { AccountCircle } from "@mui/icons-material"
import { ElementType, ReactElement } from "react"
import { StyleSheet, TextInput, View } from "react-native"

interface TextFieldProps {
    icon? : ElementType,
    iconstyle?: string,
    placeholderText: string
    hiddenText?: boolean,
    children?: React.ReactNode,
    onChange?: React.Dispatch<React.SetStateAction<string>>,
}

export default function TextField({children, icon : Icon, iconstyle, placeholderText, hiddenText, onChange} : TextFieldProps) {
    return (
        <View style={{marginTop: 10}}> 
            {children}
            <View style={styles.container}>
                {Icon && <Icon style={{left: -40, position: 'absolute'}} name={iconstyle} size={28} />}  
                {/* <AccountCircleIcon /> */}
                <TextInput onChangeText={(e) => onChange ? onChange(e) : null} secureTextEntry={hiddenText || false}  style={styles.textFieldStyle}  placeholder={placeholderText}  cursorColor={'black'}/> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    textFieldStyle: {
        width: 260,
        height: 45,
        borderRadius: 4,
        borderWidth: 2, 
        borderColor: 'black',
        fontSize: 20,
        padding: 4,
        marginLeft:0,
    },
    icon:{
        width: 20,
        height: 20,
    }
}) 