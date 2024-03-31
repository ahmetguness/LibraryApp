import { Text } from "react-native";
import { useSelector } from "react-redux";

function MemberBookList() {
  const selectedId = useSelector((state) => state.book);
  return <Text>{selectedId.categoryId}</Text>;
}

export default MemberBookList;
