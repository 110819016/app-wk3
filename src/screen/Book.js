import {StyleSheet, Text, Pressable, View, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {BackIcon, Bookmark, Bookmarko, Star, Staro} from "../icons/CIcon";
import {useState} from "react";
import * as data from "../JSON/data.json";

function Book({route, navigation}){

  const item = route.params
  const [press, setPress] = useState(false);

  return(
    <SafeAreaView edges={["top", "left", "right", "bottom"]} style={{backgroundColor:"#fff"}}>
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Pressable
            onPress={()=>{navigation.navigate("Home")}}
            paddingHorizontal={4}
          >
            <BackIcon size={28}/>
          </Pressable>
          {press? <Pressable
            onPress={()=>{setPress(!press)}}
            paddingHorizontal={4}
          >
            <Bookmarko size={28}/>
          </Pressable>
          : <Pressable
            onPress={()=>{setPress(!press)}}
            paddingHorizontal={4}
          >
            <Bookmark size={28}/>
          </Pressable>}

        </View>
        <View style={{width:"100%",marginTop:40,justifyContent: "center",alignItems: "center",}}>
          <Image
            source={{uri: item.image}}
            style={{
              width: 230,
              height: 320,
              borderWidth: 2,
              borderRadius: 6,
              marginBottom: 28,
            }}
          />
          <Text style={{fontWeight:"bold",fontSize:24,marginBottom:8,}}>{item.name}</Text>
          <Text style={{fontSize:14,color:"#666666",marginBottom:8.5,}}>{item.artist}</Text>
          <View style={{flexDirection:"row",marginBottom:15,}}>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Staro/>
            <Text style={{marginLeft:10,color:"black",}}>4.0</Text>
            <Text style={{marginLeft:4,color:"#5f5f5f",}}>/ 5.0</Text>
          </View>
          <Text style={{fontSize:14,width:310,textAlign:"center",lineHeight:22,}}>A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.</Text>
          <Pressable
            style={{width:190,
                    height:36,
                    backgroundColor:"#fcae94",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#fcae94",
                    borderRadius: 4,
                    marginTop: 26,
            }}
          ><Text style={{color:"#FFFFFF",fontWeight:"bold",fontSize:14,}}>BUY NOW FOR 46.99</Text></Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#fff',
    padding: 8,
    paddingTop: 2,
  },

  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 27,
    marginBottom: 8,
    backgroundColor: "#fff",
  },

  componentTitle1: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  componentTitle2: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginVertical: 16,
  },
});

export default Book;