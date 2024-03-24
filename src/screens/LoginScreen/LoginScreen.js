import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import LoginCard from "../../components/Login/LoginCard";
import Title from "../../components/Login/Title";

function LoginScreen({ navigation, route }) {
  const { isAdmin } = route.params;
  const backgroundImg = isAdmin
    ? require("../../assets/catStaff.png")
    : require("../../assets/catMember.png");

  const title = isAdmin ? "Admin" : "Member";

  const whereToGo = isAdmin
    ? () => console.log("Admin")
    : () => navigation.navigate("MemberCategoriesScreen");

  return (
    <ImageBackground style={styles.root} source={backgroundImg}>
      <ScrollView>
        <Title title={title} />
        <LoginCard onPressFunc={whereToGo} />
      </ScrollView>
    </ImageBackground>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
