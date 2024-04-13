import { Button, Text, View } from "react-native";

function MemberHomeScreen({ navigation }) {
  return (
    <View>
      <Text>MemberHomeScreen</Text>
      <Button
        title="next"
        onPress={() => navigation.navigate("MemberCategoriesScreen")}
      />
    </View>
  );
}

export default MemberHomeScreen;
