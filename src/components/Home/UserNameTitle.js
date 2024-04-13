import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../theme/colors";

function UserNameTitle({ name }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export default UserNameTitle;

const styles = StyleSheet.create({
  root: {
    margin: 24,
    backgroundColor: COLORS.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 60,
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    color: COLORS.white,
  },
});
