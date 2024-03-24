import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../theme/colors';

function BottomTabNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: COLORS.primaryBlue,
        tabBarInactiveBackgroundColor: COLORS.primaryBlue1,
      }}
    >
      <Tab.Screen
        options={{
          title: "Member",
          
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={26} color={'black'} />
          ),
        }}
        name="MemberLoginScreen"
        component={LoginScreen}
        initialParams={{ isAdmin: false }}
      />
      <Tab.Screen
        options={{
          title: "Admin",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="badge" size={26} color={'black'} />
          ),
        }}
        name="AdminLoginScreen"
        component={LoginScreen}
        initialParams={{ isAdmin: true }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
