import { ImageBackground, Text } from "react-native";

export default function MemberFavoritesScreen() {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/books.png")}
    >
      <Text>MemberFavoritesScreen</Text>
    </ImageBackground>
  );
}
