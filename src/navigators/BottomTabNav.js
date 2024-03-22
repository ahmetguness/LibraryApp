import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

function BottomTabNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          title: "Admin",
        }}
        name="AdminLoginScreen"
        component={LoginScreen}
        initialParams={{ isAdmin: true }}
      />
      <Tab.Screen
        options={{
          title: "Member",
        }}
        name="MemberLoginScreen"
        component={LoginScreen}
        initialParams={{ isAdmin: false }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
