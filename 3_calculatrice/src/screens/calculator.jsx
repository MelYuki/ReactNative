import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Buttons from "./buttons"

const Calculator = () => {

    const [ result, setResult ] = useState("")
    const btnsNum = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const btnsOpe = [
        {
            val: "C",
            press: () => clearResult()
        },
        {
            val: "+",
            press: () => handleButtonPress("+")
        },
        {
            val: "-",
            press: () => handleButtonPress("-")
        },
        {
            val: "*",
            press: () => handleButtonPress("*")
        },
        {
            val: "/",
            press: () => handleButtonPress("/")
        },
        {
            val: "=",
            press: () => calculateResult()
        }
    ]

    const handleButtonPress = (value) => {
        setResult(result + value)
    }

    const calculateResult = () => {
        let calculateResult
        try {
            calculateResult = eval(result)
        }
        catch (error) {
            calculateResult = "Error"
        }
        setResult(String(calculateResult))
    }

    const clearResult = () => {
        setResult("")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.result}>{result}</Text>

            <View style={styles.buttonContainer}>
                <View style={styles.gridContainer}>
                    {btnsNum.map((btn, index) => (
                        <Buttons className={btn === "0" ? styles.buttonZero : styles.button}
                        key={index} title={btn} onPress={() => handleButtonPress(btn)} />
                    ))}
                    {btnsOpe.map((btn, index) => (
                        <Buttons className={btn.val === "=" ? styles.buttonResult : styles.button}
                        key={index} title={btn.val} onPress={btn.press} />
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    result: {
        fontSize: 48,
        marginBottom: 20
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    gridContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    buttonZero: {
        width: 160,
        height: 80,
        borderRadius: 40,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    buttonResult: {
        width: "100%",
        height: 80,
        borderRadius: 40,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    }
})

export default Calculator