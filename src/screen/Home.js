import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {Bars, Search} from "../icons/CIcon";
import * as data from "../JSON/data.json";

function RenderItem({item}){
  return(
    <View>
        <Image
          source={{uri: item.image}}
          style={{
            width:140,
            height:200,
            borderWidth:2,
            borderColor:'#d35647',
            resizeMode:'contain',
            margin:4
          }}
        />
        <Text>{item.name}</Text>
        <Text>{item.artist}</Text>
    </View>
    )
}

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.topNav}>
            <Bars/>
            <Search/>
          </View>
          <View>
            <View><Text style={styles.componentTitle}>Popular Books</Text></View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={
                  data.PopularBooks
                }
                renderItem={
                  RenderItem
                }
                keyExtractor={
                  item => item.id
                }
              />
          </View>
          <View>
            <View><Text style={styles.componentTitle}>Newest</Text></View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={
                  data.Newest
                }
                renderItem={
                  RenderItem
                }
                keyExtractor={
                  item => item.id
                }
              />
          </View>
          <StatusBar style="auto" backgroundColor="#ffffff"/>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: "100%",
  },

  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: '#333333',
    width: "100%",
    paddingHorizontal: 8,
  },

  componentTitle: {
    fontSize: 24,
  },
});
