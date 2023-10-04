import { Text, TouchableOpacity, StyleSheet } from "react-native"


const Buttons = (props) => {

    const { title, onPress, className } = props

    return(
        <TouchableOpacity style={className} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 24,
        color: "red"
    }
})

export default Buttons