import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import CategoryCard from "./CategoryCard";
import { listCategories } from "../../services/firestoreService";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedCategoryId } from "../../redux/Slice";
import COLORS from "../../theme/colors";

function CategoryList({ nextPage }) {
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  const filteredCategories = categories.filter((category) =>
    category.categoryName.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/books.png")}
    >
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Kategori ara..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filteredCategories}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: COLORS.primaryBlue150Opacity,
    width: "80%",
    borderWidth: 1,
    borderRadius: 8,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
