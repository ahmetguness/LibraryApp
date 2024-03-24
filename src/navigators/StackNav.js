import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BottomTabNav from "./BottomTabNav";
import MemberCategoriesScreen from "../screens/Member/MemberCategoriesScreen";

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
    </Stack.Navigator>
  );
}

export default StackNav;
