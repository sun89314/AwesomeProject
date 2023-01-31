<script src="http://192.168.1.177:8097"></script>
import { StatusBar } from 'expo-status-bar';
import { Modal, Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  // const [goal, setGoal] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoal = goalTitle => {
    // console.log(goal);
    setGoalList(goalList =>
      [...goalList,
      { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
    // setGoal('');
  }
  const deleteItem = function (id) {
    setGoalList(goalList => {
      return (
        goalList.filter((goal) => goal.id !== id)
      );
    });
  };
  return (
    <View style={{ padding: 50 }}>
      <Button title='Add new Goal' onPress={() => setIsAddMode(true)}></Button>
      <GoalInput
        onAddGoal={addGoal}
        visible={isAddMode} />
      <FlatList data={goalList}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData =>
          <GoalItem title={itemData.item.value}
            id={itemData.item.id}
            onDelete={deleteItem}
          />} />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    // margin: 12,
    borderWidth: 1,
    padding: 10,
  },
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
