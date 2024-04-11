import { StyleSheet, Text, View } from "react-native";
import InputArea from "./InputArea";
import LoginButton from "./LoginButton";
import { useState } from "react";

function LoginCard({ onPressFunc }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <InputArea
        placeholder={"Kullanıcı Adı"}
        value={userName}
        onChangeText={setUserName}
      />
      <InputArea
        placeholder={"Şifre"}
        value={password}
        onChangeText={setPassword}
      />
      <LoginButton buttonName={"Giriş Yap"} onPressFunc={onPressFunc} />
    </View>
  );
}

export default LoginCard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: "75%",
  },
});
