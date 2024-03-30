import { Text } from "react-native";
import { useSelector } from "react-redux";

function MemberBookList() {
  const selectedId = useSelector((state) => state.book);
  console.log({selectedId});
  return <Text>MemberBookList</Text>;
}

export default MemberBookList;
