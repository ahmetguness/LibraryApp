import { StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../theme/colors";

function CategoryCard({ categoryName, onPressFunc }) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPressFunc} >
      <Image style={styles.img} source={require("../../assets/books.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.text} >{categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryCard;

const styles = StyleSheet.create({
  root: {
    height: 350,
    width: 350,
    backgroundColor: COLORS.primaryBlue1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 24,
  },
  img: {
    height: 250,
    width: 250,
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 10,
    backgroundColor: COLORS.primaryBlue,
    width: 250,
    height: 33,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16
  }
});
