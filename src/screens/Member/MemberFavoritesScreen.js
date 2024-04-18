import { FlatList, ImageBackground, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import {
  fetchBookDetails,
  fetchMemberFavorites,
} from "../../services/firestoreService";
import { useEffect, useState } from "react";
import CategoryCard from "../../components/Categories/CategoryCard";
import { useDispatch } from "react-redux";
import { updateUserFavoriteBooks } from "../../redux/UserSlice";
import { changeSelectedBook } from "../../redux/BookSlice";


export default function MemberFavoritesScreen({navigation}) {
  const memberId = useSelector((state) => state.user.userInfo.userId);
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const favorites = await fetchMemberFavorites(memberId);
      if (favorites) {
        const details = await fetchBookDetails(favorites);
        setBookDetails(details);
      }
    }
    fetchData();
  }, [memberId]);

  const dispatch = useDispatch();

  async function onPressFunc(item) {
    dispatch(changeSelectedBook(item));
    let favArr = await fetchMemberFavorites(memberId);
    dispatch(updateUserFavoriteBooks(favArr));
    navigation.navigate("MemberBookDetailsScreen");
  }

  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/books.png")}
    >
      <FlatList
        data={bookDetails}
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
