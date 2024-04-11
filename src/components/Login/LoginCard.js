import { StyleSheet, Text, View } from "react-native";
import InputArea from "./InputArea";
import LoginButton from "./LoginButton";
import { useState, useEffect } from "react"; // useEffect ekledik
import { useDispatch } from "react-redux";
import { setLoginInfo } from "../../redux/Slice";

function LoginCard({ onPressFunc }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoginInfo({ userName, password }));
  }, [userName, password]);


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









// import { StyleSheet, Text, View } from "react-native";
// import InputArea from "./InputArea";
// import LoginButton from "./LoginButton";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoginInfo } from "../../redux/Slice";

// function LoginCard({ onPressFunc }) {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     dispatch(setLoginInfo({ userName, password }));
//     onPressFunc();
//   };


//   return (
//     <View style={styles.root}>
//       <InputArea
//         placeholder={"Kullanıcı Adı"}
//         value={userName}
//         onChangeText={setUserName}
//       />
//       <InputArea
//         placeholder={"Şifre"}
//         value={password}
//         onChangeText={setPassword}
//       />
//       <LoginButton buttonName={"Giriş Yap"} onPressFunc={handleLogin} />
//     </View>
//   );
// }

// export default LoginCard;

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     marginTop: "75%",
//   },
// });
