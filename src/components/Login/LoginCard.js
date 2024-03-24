import { StyleSheet, Text, View } from "react-native";
import InputArea from "./InputArea";
import LoginButton from "./LoginButton";

function LoginCard({onPressFunc}){
    return <View style={styles.root} >
        <InputArea placeholder={"Kullanıcı Adı"} />
        <InputArea placeholder={"Şifre"} />
        <LoginButton buttonName={"Giriş Yap"} onPressFunc={onPressFunc} />
    </View>
}

export default LoginCard;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: '75%'
    }
})