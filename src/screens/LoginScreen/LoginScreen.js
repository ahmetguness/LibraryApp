import { Alert, ImageBackground, ScrollView, StyleSheet } from "react-native";
import LoginCard from "../../components/Login/LoginCard";
import Title from "../../components/Login/Title";
import { useSelector, useDispatch } from "react-redux";
import {
  checkUserCredentials,
  getUserId,
} from "../../services/firestoreService";
import { changeLoggedInUserId } from "../../redux/Slice";

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

  const dispatch = useDispatch();

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
            const id = await getUserId(
              "admin",
              loginInfo.userName,
              loginInfo.password
            );
            dispatch(changeLoggedInUserId(id));

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
        const id = await getUserId(
          "member",
          loginInfo.userName,
          loginInfo.password
        );
        dispatch(changeLoggedInUserId(id));
        navigation.navigate("MemberHomeScreen");
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
