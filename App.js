import { SafeAreaProvider } from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screen/Home";
import Wishlist from "./src/screen/Wishlist";
import Mybooks from "./src/screen/Mybooks";


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// function DrawerNavigator(){
//   return(
//       <Drawer.Navigator>
//         <Drawer.Screen name={"Home"} component={Home} options={{headerShown:false}}/>
//       </Drawer.Navigator>
//     )
// }

function TabNavigator(){
  return(
      <Tab.Navigator>
        <Tab.Screen name={"Home"} component={Home} options={{headerShown:false}}/>
        <Tab.Screen name={"Wishlist"} component={Wishlist} options={{headerShown:false}}/>
        <Tab.Screen name={"My books"} component={Mybooks} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
}

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name={"TabNavigator"} component={TabNavigator} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <StackNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}