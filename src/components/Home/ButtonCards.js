import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../theme/colors";

function ButtonCards({ buttonName, onPressFunc }) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPressFunc} activeOpacity={0.8}>
      <Text style={styles.text}>{buttonName}</Text>
    </TouchableOpacity>
  );
}

export default ButtonCards;

const styles = StyleSheet.create({
  root: {
    marginRight: 8,
    marginVertical: 16,
    backgroundColor: COLORS.primaryBlue5Opacity,
    opacity: 0.9,
    height: 120,
    width: 160,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
  },
});
