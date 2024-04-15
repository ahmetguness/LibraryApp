import { StyleSheet, View } from "react-native";
import CategoryList from "../../components/Categories/CategoryList";
function MemberCategoriesScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <CategoryList nextPage={() => navigation.navigate("MemberBookList")} />
    </View>
  );
}

export default MemberCategoriesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
