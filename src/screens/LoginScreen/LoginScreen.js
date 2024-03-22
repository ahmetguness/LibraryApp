import { ImageBackground, StyleSheet } from "react-native";

function LoginScreen({ navigation, route }) {
  const { isAdmin } = route.params;
  const backgroundImg = isAdmin
    ? require("../../assets/catStaff.png")
    : require("../../assets/catMember.png");

  return (
    <ImageBackground
      style={styles.root}
      source={backgroundImg}
    ></ImageBackground>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
