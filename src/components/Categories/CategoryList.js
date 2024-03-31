import { FlatList, ImageBackground, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "../../assets/dummy_data/datas";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/Slice";

function CategoryList({ nextPage }) {
  const selectedId = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const onPressFunc = (item) => {
    dispatch(selectCategory(item.categoryId));
    nextPage();
  };

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
            categoryName={item.categoryTitle}
            onPressFunc={() => onPressFunc(item)}
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
