import { StyleSheet, Text, TextInput, View } from "react-native";
import COLORS from "../../theme/colors";

function InputArea({placeholder, value, onChangeText}){
    return <View style={styles.root} >
        <TextInput style={styles.inputArea} placeholder={placeholder} value={value} onChangeText={onChangeText} />
    </View>
}

export default InputArea;

const styles = StyleSheet.create({
    root: {
        marginHorizontal: '15%',
        marginBottom: '5%',
        backgroundColor: COLORS.primaryBlue,
        borderRadius: 8,
        height: 40,
        justifyContent: 'center'
    },
    inputArea: {
        marginLeft: 6,
        marginRight: 6
    }
})