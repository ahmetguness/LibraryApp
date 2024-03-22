import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../theme/colors";

function PrimaryButton({ buttonName, onPressFunc }) {
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={onPressFunc}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{buttonName}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
