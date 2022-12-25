import React, { useReducer } from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const INCREAMENT_AMOUNT = 1

const reducer = (state, action) => {
    // state === {counter: number}
    // action === {type: 'increament' || 'decreament', payload: number}
    switch(action.type){
        case "increment":
            return {...state, counter: state.counter + action.payload};
        case "decrement":
            return {...state, counter: state.counter - action.payload};
        default:
            return state;
    }

};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => dispatch({type:"increment", payload: INCREAMENT_AMOUNT})}/>
            <Button
                title="Decrease"
                onPress={() => dispatch({type:"decrement", payload: INCREAMENT_AMOUNT})}/>
            <Text>Current count: {counter}</Text>
        </View>
    );
};

const style = StyleSheet.create({

});

export default CounterScreen;