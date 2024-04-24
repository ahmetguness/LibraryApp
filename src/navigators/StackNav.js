import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BottomTabNav from "./BottomTabNav";
import MemberCategoriesScreen from "../screens/Member/MemberCategoriesScreen";
import MemberBookList from "../screens/Member/MemberBookList";
import AdminHomeScreen from "../screens/Admin/AdminHomeScreen";
import MemberHomeScreen from "../screens/Member/MemberHomeScreen";
import MemberBookDetailsScreen from "../screens/Member/MemberBookDetailsScreen";
import MemberFavoritesScreen from "../screens/Member/MemberFavoritesScreen";
import MessageScreen from "../screens/Message/MessageScreen";

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
      <Stack.Screen
        name="MemberCategoriesScreen"
        component={MemberCategoriesScreen}
      />
      <Stack.Screen name="MemberBookList" component={MemberBookList} />
      <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
      <Stack.Screen name="MemberHomeScreen" component={MemberHomeScreen} />
      <Stack.Screen
        name="MemberBookDetailsScreen"
        component={MemberBookDetailsScreen}
      />
      <Stack.Screen
        name="MemberFavoritesScreen"
        component={MemberFavoritesScreen}
      />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
}

export default StackNav;
