import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../services/firestoreService";
import { updateUserInfo } from "../../redux/UserSlice";
import UserNameTitle from "../../components/Home/UserNameTitle";
import ButtonCards from "../../components/Home/ButtonCards";

function MemberHomeScreen({ navigation }) {
  const loggedInUserId = useSelector((state) => state.login.loggedInUserId);
  const dispatch = useDispatch();
  const userKind = "member";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUserById(userKind, loggedInUserId);
        dispatch(
          updateUserInfo({
            userId: loggedInUserId,
            userName: user.memberUserName,
            userPassword: user.memberPassword,
          })
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (loggedInUserId) {
      fetchUserData();
    }
  }, [loggedInUserId]);

  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/catMember.png")}
    >
      <View>
        <UserNameTitle name={userInfo.userName.toUpperCase()} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCards
          buttonName={"Kategorileri Gör"}
          onPressFunc={() => navigation.navigate("MemberCategoriesScreen")}
        />
        <ButtonCards buttonName={"Favorilerim"} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCards buttonName={"Bilgilerimi Güncelle"} />
        <ButtonCards buttonName={"Kitaplarım"} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCards buttonName={"Mesaj"} />
        <ButtonCards buttonName={"İletişim"} />
      </View>
    </ImageBackground>
  );
}

export default MemberHomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: 24,
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
