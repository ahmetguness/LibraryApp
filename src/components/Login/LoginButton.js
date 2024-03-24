import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../../theme/colors";

function LoginButton({ buttonName, onPressFunc }) {
  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.7} onPress={onPressFunc}>
      <Text style={styles.text} >{buttonName}</Text>
    </TouchableOpacity>
  );
}

export default LoginButton;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: "15%",
    backgroundColor: COLORS.primaryBlue,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16
  },
});
