import { SafeAreaProvider } from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screen/Home";
import Wishlist from "./src/screen/Wishlist";
import Mybooks from "./src/screen/Mybooks";
import {Ionicons} from "@expo/vector-icons";
import Book from "./src/screen/Book";


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
      <Tab.Navigator
          screenOptions={ ({ route }) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'home'
                        : 'home-outline'
                    }
                    size={31}
                    color={color}
                  />
                );
              } else if (route.name === 'Wishlist') {
                return (
                  <Ionicons
                    name={focused ? 'md-bookmark' : 'md-bookmark-outline'}
                    size={31}
                    color={color}
                  />
                );
              } else{
                return (
                  <Ionicons
                    name={focused ? 'book' : 'book-outline'}
                    size={31}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#fcae94',
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Tab.Screen name="Wishlist" component={Wishlist} options={{tabBarBadge: 3,headerShown:false}}/>
          <Tab.Screen name="My books" component={Mybooks} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
}

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name={"TabNavigator"} component={TabNavigator} options={{headerShown:false}}/>
      <Stack.Screen name={"Book"} component={Book} options={{headerShown:false}}/>
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