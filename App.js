import { useState } from "react";
import { 
  FlatList, 
  StyleSheet,  
  View 
} from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((courseGoals) => [
      ...courseGoals, 
      {text: enteredGoalText, key: (courseGoals.length + 1)}
    ]);
  }

  const deleteGoalHandler = () => {
    console.log('DELETE');
  }

  return (
    <View style={styles.appContainer}>
      {/*  add goalinput */}
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.key
          }}
          renderItem={({ item }) => ( 
            // insert GoalItem here
            <GoalItem text={item.text} deleteGoal={deleteGoalHandler}/>
          )} 
        />
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#feecc8'
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    backgroundColor: 'pink',
    padding: 8
  },
  goalText: {
    fontSize: 30,
    textAlign: 'center'
  }
});
