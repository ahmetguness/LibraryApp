import { Text } from "react-native";
import { useSelector } from "react-redux";

export default function MemberBookDetailsScreen() {
  const selectedBookData = useSelector((state) => state.book.selectedBook);
  console.log(selectedBookData);
  return <Text>{selectedBookData.bookName}</Text>;
}
