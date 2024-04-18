import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";
import PrimaryButton from "../../components/buttons/PrimaryButton";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/books.png")}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Kitapların büyüleyici dünyasını keşfetmeye hazır olun. Zihninizi
          genişletecek, hayal gücünüzü ateşleyecek ve sizi unutulmaz
          yolculuklara çıkaracak hikayelere dalın. Gelin bu edebi maceraya
          birlikte başlayalım!
        </Text>
        <PrimaryButton
          buttonName={"Get Started"}
          onPressFunc={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

// Get ready to explore the captivating world of books. Dive into stories that will expand your mind, ignite your imagination, and take you on unforgettable journeys. Let's begin this literary adventure together!
