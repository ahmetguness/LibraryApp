import { Alert, ImageBackground, ScrollView, StyleSheet } from "react-native";
import LoginCard from "../../components/Login/LoginCard";
import Title from "../../components/Login/Title";
import { useSelector } from "react-redux";
import { checkUserCredentials } from "../../services/firestoreService";

function LoginScreen({ navigation, route }) {
  const { isAdmin } = route.params;
  const backgroundImg = isAdmin
    ? require("../../assets/catStaff.png")
    : require("../../assets/catMember.png");

  const title = isAdmin ? "Admin" : "Member";
  const loginInfo = useSelector((state) => state.login.loginInfo) || {
    userName: "",
    password: "",
  };

  const whereToGo = async (isAdmin) => {
    if (isAdmin) {
      if (loginInfo.userName && loginInfo.password) {
        try {
          const isAdminValid = await checkUserCredentials(
            "admin",
            loginInfo.userName,
            loginInfo.password
          );
          if (isAdminValid) {
            navigation.navigate("AdminHomeScreen");
          } else {
            Alert.alert(
              "Hatalı kullanıcı adı veya şifre girdiniz. Lütfen tekrar deneyin."
            );
          }
        } catch (error) {
          console.error("Hata oluştu:", error);
        }
      } else {
        console.log("Kullanıcı adı veya şifre eksik.");
      }
    } else {
      const isMemberValid = await checkUserCredentials(
        "member",
        loginInfo.userName,
        loginInfo.password
      );

      if (isMemberValid) {
        navigation.navigate("MemberCategoriesScreen");
      } else {
        Alert.alert(
          "Hatalı kullanıcı adı veya şifre girdiniz. Lütfen tekrar deneyin."
        );
      }
    }
  };

  return (
    <ImageBackground style={styles.root} source={backgroundImg}>
      <ScrollView>
        <Title title={title} />
        <LoginCard onPressFunc={() => whereToGo(isAdmin)} />
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
