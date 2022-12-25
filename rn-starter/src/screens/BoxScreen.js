import React from "react";
import {Text, View, StyleSheet} from "react-native";


const BoxScreen = () => {
    return (
        <View style={styles.viewParentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.textThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewParentStyle:{
        flexDirection:"row",
        height:200,
        justifyContent:"space-between",
    },
    viewOneStyle:{
        borderWidth: 1,
        height:100,
        width: 100,
        backgroundColor:"red",
    },
    viewTwoStyle:{
        borderWidth: 1,
        height:100,
        width: 100,
        alignSelf:"flex-end",
        backgroundColor:"green",
    },
    textThreeStyle:{
        borderWidth: 1,
        height:100,
        width: 100,
        backgroundColor:"purple",
    }
});

export default BoxScreen;