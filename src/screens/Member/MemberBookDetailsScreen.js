import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import COLOR from "../../theme/colors";

function Features({ title, text }) {
  return (
    <View style={styles.line}>
      <Text style={styles.titleTitle}>{title}</Text>
      <Text style={styles.titleText}>{text}</Text>
    </View>
  );
}

export default function MemberBookDetailsScreen() {
  const selectedBookData = useSelector((state) => state.book.selectedBook);
  console.log(selectedBookData);
  return (
    <ImageBackground
      style={styles.root}
      source={require("../../assets/books.png")}
    >
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: selectedBookData.bookCover }}
            />
          </View>
          <View style={styles.textContainer}>
            <Features title={"Kitap Adı: "} text={selectedBookData.bookName} />
            <Features title={"Yazarı: "} text={selectedBookData.bookAuthor} />
            <Features
              title={"Basım Yılı: "}
              text={selectedBookData.bookYearOfPublication}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageContainer: {
    marginTop: 50,
    marginHorizontal: 24,
    width: "90%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  image: {
    height: 300,
    width: 210,
  },
  textContainer: {
    flex: 1,

    marginTop: 24,
    width: "90%",
    marginHorizontal: 24,
  },
  titleTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
    backgroundColor: COLOR.primaryBlue,
    height: 60,
    borderRadius: 8,
  },
  titleText: {
    fontSize: 18,
    color: COLOR.white,
  },
});
