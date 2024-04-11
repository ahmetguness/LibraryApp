import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BottomTabNav from "./BottomTabNav";
import MemberCategoriesScreen from "../screens/Member/MemberCategoriesScreen";
import MemberBookList from "../screens/Member/MemberBookList";
import AdminHomeScreen from "../screens/Admin/AdminHomeScreen";

function StackNav() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={BottomTabNav} />
      <Stack.Screen name="MemberCategoriesScreen" component={MemberCategoriesScreen} />
      <Stack.Screen name="MemberBookList" component={MemberBookList} />
      <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />

    </Stack.Navigator>
  );
}

export default StackNav;
