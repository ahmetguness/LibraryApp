import { FlatList, ImageBackground, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";
import { listCategories } from "../../services/firestoreService";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeSelectedCategoryId } from "../../redux/Slice";

function CategoryList({ nextPage }) {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await listCategories();
      setCategories(categoriesData);
    }

    fetchCategories();
  }, []);

  const onPressFunc = (item) => {
    dispatch(changeSelectedCategoryId(item));
    nextPage();
  };
  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/books.png")}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryCard
            categoryName={item.categoryName}
            onPressFunc={() => onPressFunc(item.id)}
            imgSource={item.categoryImage}
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
