import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../theme/colors";

function Title({ title }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: "15%",
    backgroundColor: COLORS.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    height: 50,
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
