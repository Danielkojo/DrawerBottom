import { useRoute,useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView,Text } from "react-native";
import { useLayoutEffect } from "react";

import TweetContent from "../../components/TweetContent";

const TweetDetailScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({headerTitle: tweet.author.name})
  })
  const {
    params: { tweet },
  } = useRoute();
  return (
    <SafeAreaView style={{flex:1}}>

      <View testID="TweetDetailScreen" style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TweetDetailScreen;
