import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View, Image, ScrollView, Pressable} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {Bars, Search, Star} from "../icons/CIcon";
import * as data from "../JSON/data.json";



export default function Home({navigation}) {

  function RenderItem1({item}){
    return(
      <Pressable
        onPress={()=>{ navigation.navigate("Book", item)}}
        style={{marginLeft:20,}}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 140,
            height: 200,
            borderWidth: 2,
            borderRadius: 2,
            resizeMode: 'contain',
            marginBottom: 16,
          }}
        />
        <Text style={{fontWeight:"bold",fontSize:16,marginBottom:8,}}>{item.name}</Text>
        <Text style={{fontSize:12,}}>{item.artist}</Text>
      </Pressable>
    )
  }

  function RenderItem2({item}){
    return(
      <Pressable
        onPress={()=>{navigation.navigate("Book", item)}}
        style={{marginLeft:20,}}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 140,
            height: 200,
            borderWidth: 2,
            borderRadius: 2,
            resizeMode: 'contain',
            marginBottom: 12,
          }}
        />
        <View style={{flexDirection:"row",width:60,marginBottom:7,}}>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
        </View>

        <Text style={{fontWeight:"bold",fontSize:16,marginBottom:8,}}>{item.name}</Text>
        <Text style={{fontSize:12,}}>{item.artist}</Text>
      </Pressable>
    )
  }

  return (
      <SafeAreaView edges={["top", "left", "right", "bottom"]} style={{backgroundColor:"#fff"}}>
        <View style={styles.topNav}>
          <Bars/>
          <Search/>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <View><Text style={styles.componentTitle1}>Popular Books</Text></View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={
                    data.PopularBooks
                  }
                  renderItem={
                    RenderItem1
                  }
                  keyExtractor={
                    item => item.id
                  }
                />
            </View>
            <View>
              <View><Text style={styles.componentTitle2}>Newest</Text></View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={
                    data.Newest
                  }
                  renderItem={
                    RenderItem2
                  }
                  keyExtractor={
                    item => item.id
                  }
                />
            </View>
            <View style={{height: 64}}/>
            <StatusBar style="auto" backgroundColor="#ffffff"/>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 8,
    },

    topNav: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: 24,
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
