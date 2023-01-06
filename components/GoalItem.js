import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

const GoalItem = (props) => {
    return (
        <Pressable onPress={props.deleteGoal}>
            <View style={styles.goalItem}>
               <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
        
    )
};

export default GoalItem;

const styles = StyleSheet.create({
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
})