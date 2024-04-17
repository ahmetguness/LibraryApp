import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../../theme/colors";

export default function FavButton({ btnName, onPressFunc }) {
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={onPressFunc}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{btnName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlue1,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
