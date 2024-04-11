import React, { useState, useEffect } from "react";
import { Text, FlatList } from "react-native";
import { listBooksInCategory } from "../../services/firestoreService";
import { useSelector } from "react-redux";

function MemberBookList() {
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

  return (
    <FlatList
      data={books}
      renderItem={({ item }) => (
        <Text>
          {item.bookName +
            "---" +
            item.bookAuthor +
            "---" +
            item.bookYearOfPublication}
        </Text>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default MemberBookList;
