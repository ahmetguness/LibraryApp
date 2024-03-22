import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./StackNav";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

function Navigators() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

export default Navigators;
