import {AntDesign, Feather, FontAwesome5, Fontisto, Ionicons, Octicons} from "@expo/vector-icons";
import {Pressable} from "react-native";

export function Bars () {
  return (
    <FontAwesome5 name={"bars"} size={24} color="#333333"/>
  )
};

export function Search () {
  return (
    <FontAwesome5 name={"search"} size={24} color="#333333"/>
  )
};

export function Star () {
  return (
    <Pressable style={{
      margin: 1,
    }}>
      <AntDesign name={"star"} size={14} color="#FFC41F"/>
    </Pressable>
  )
};

export function Staro () {
  return (
    <AntDesign name={"star"} size={14} color="#EDEDEF"/>
  )
};

export function BackIcon ({size}) {
  return (
    <Ionicons name={"chevron-back"} size={size} color="#333333"/>
  )
};

export function Bookmarko ({size}) {
  return (
    <Ionicons name={"md-bookmark-outline"} size={size} color="#333333"/>
  )
};

export function Bookmark ({size}) {
  return (
    <Ionicons name={"md-bookmark"} size={size} color="#fcae94"/>
  )
};
