import { FlatList, ImageBackground, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "../../assets/dummy_data/datas";
import { useDispatch, useSelector } from "react-redux";

function CategoryList() {
  const selectedId = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/books.png")}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryCard
            categoryName={item.title}
            onPressFunc={()=>dispatch(selectedId(item.id))}
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
