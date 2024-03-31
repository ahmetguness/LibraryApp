import { View } from "react-native";
import CategoryList from "../../components/Categories/CategoryList";

function MemberCategoriesScreen({ navigation }) {
  return (
    <View>
      <CategoryList nextPage={() => navigation.navigate("MemberBookList")} />
    </View>
  );
}

export default MemberCategoriesScreen;
