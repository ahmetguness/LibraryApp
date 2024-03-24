import { FlatList, ImageBackground, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "../../assets/dummy_data/datas";

function CategoryList() {
  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/books.png")}
    >
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryCard
            categoryName={item.title}
            onPressFunc={() => console.log(item.id)}
          />
        )}
      />
    </ImageBackground>
  );
}

export default CategoryList;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
});
