import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = function (props) {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem}
                on>
                <Text style={styles.text}>My Goal is {props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        paddig: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
    text: {
        fontSize: 30
    }
});


export default GoalItem;