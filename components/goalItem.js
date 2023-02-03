import { StyleSheet, View, Text, Pressable } from "react-native";
function goalItem(props) {
  return (
    <View style={styles.goalIten}>
      <Pressable
        android_ripple={{ color: "#dddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default goalItem;

const styles = StyleSheet.create({
  goalIten: {
    margin: 10,
    padding: 5,
    borderRadius: 6,
    backgroundColor: "#6F1AB6",
  },
  goalText: {
    color: "white",
    textAlign: "center",
  },
});
