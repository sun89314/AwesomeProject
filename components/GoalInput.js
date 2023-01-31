import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";
const GoalInput = function (props) {
    const [goal, setGoal] = useState('');
    const goalInputHandler = enteredText => {
        setGoal(enteredText);
    };
    console.log(props.visible)
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <TextInput
                    style={styles.input}
                    value={goal}
                    placeholder="Please input your goal"
                    onChangeText={goalInputHandler}
                />
                <Button title='ADD' onPress={() => props.onAddGoal(goal)}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        height: 40,
        width: '80%',
        // margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBotto: 10
    },
    text: {
        fontSize: 30
    }
});


export default GoalInput;