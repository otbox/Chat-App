import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface ModalProps {
    isActive: boolean,
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContactModal({isActive, setModalActive} : ModalProps) {
    return(
        <Modal animationType="fade"
         transparent={true}
         visible={isActive}
         onRequestClose={() => {
            setModalActive(!isActive)
         }}
         >
            <View style={style.container}>
                <View style={style.userContainer}>
                    <Text>teste</Text>
                    <TouchableOpacity onPress={() => setModalActive(false)}>
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(10,10,10,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '80%',
        height: 500
    }
})