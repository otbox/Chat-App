import { Modal, Text, View } from "react-native"

interface ModalProps {
    isActive: boolean,
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContactModal({isActive, setModalActive} : ModalProps) {
    return(
        <Modal animationType="slide"
         transparent={true}
         visible={isActive}
         onRequestClose={() => {
            setModalActive(!isActive)
         }}
         >
            <View>
                <Text>teste</Text>
            </View>
        </Modal>
    )
}