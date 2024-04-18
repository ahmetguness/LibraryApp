import React, { useState, useEffect } from "react";
import { FlatList, ImageBackground, StyleSheet } from "react-native";
import { fetchMemberFavorites, listBooksInCategory } from "../../services/firestoreService";
import { useSelector } from "react-redux";
import CategoryCard from "../../components/Categories/CategoryCard";
import { useDispatch } from "react-redux";
import { changeSelectedBook } from "../../redux/BookSlice";
import { updateUserFavoriteBooks } from "../../redux/UserSlice";

function MemberBookList({ navigation }) {
  const [books, setBooks] = useState([]);
  const selectedCategoryId = useSelector(
    (state) => state.login.selectedCategoryId
  );

  useEffect(() => {
    async function fetchBooks() {
      const booksData = await listBooksInCategory(selectedCategoryId);
      setBooks(booksData);
    }
    fetchBooks();
  }, [selectedCategoryId]);

  const dispatch = useDispatch();
  const userId = useSelector((state)=>state.user.userInfo.userId)

  async function onPressFunc(item) {
    dispatch(changeSelectedBook(item));
    let favArr = await fetchMemberFavorites(userId);
    dispatch(updateUserFavoriteBooks(favArr));
    navigation.navigate("MemberBookDetailsScreen");
  }

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/books.png")}
    >
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <CategoryCard
            categoryName={item.bookName}
            imgSource={item.bookCover}
            onPressFunc={() =>
              onPressFunc({
                bookId: item.id,
                bookName: item.bookName,
                bookAuthor: item.bookAuthor,
                bookYearOfPublication: item.bookYearOfPublication,
                bookCover: item.bookCover,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ImageBackground>
  );
}

export default MemberBookList;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
