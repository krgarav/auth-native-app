import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TextComp = () => {
    return (
        <Text style={styles.text}>Login!</Text>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    background: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        // opacity: 0.5,
    },
    text: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    area: {
        width: "80%",


    }
});
export default TextComp;