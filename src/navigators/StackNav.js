import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BottomTabNav from "./BottomTabNav";
import MemberCategoriesScreen from "../screens/Member/MemberCategoriesScreen";
import MemberBookList from "../screens/Member/MemberBookList";
import AdminHomeScreen from "../screens/Admin/AdminHomeScreen";
import MemberHomeScreen from "../screens/Member/MemberHomeScreen";
import MemberBookDetailsScreen from "../screens/Member/MemberBookDetailsScreen";

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
      <Stack.Screen name="MemberHomeScreen" component={MemberHomeScreen} />
      <Stack.Screen name="MemberBookDetailsScreen" component={MemberBookDetailsScreen} />
    </Stack.Navigator>
  );
}

export default StackNav;
