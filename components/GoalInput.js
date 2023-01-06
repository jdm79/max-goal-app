import { useState } from "react";
import { 
    View, 
    Text,  
    TextInput,
    Button,
    StyleSheet
} from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setGoalText(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
            onChangeText={goalInputHandler} 
            style={styles.textInput} 
            placeholder='Type goal'
            value={enteredGoalText}
        />
        <Button onPress={addGoalHandler} title='Add goal' />
      </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 24
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
        backgroundColor: 'white'
      },
})