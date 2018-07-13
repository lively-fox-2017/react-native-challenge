import React, { Component } from 'react'
import {StyleSheet, Text, View, ListView, FlatList, Image, WebView} from 'react-native'
import Video from 'react-native-video';

class DetailScreen extends Component {
  // static navigationOptions = {
  //   title: 'Chat with Lucy',
  // };
  render() {
    let propsId=this.props.navigation.state.params.id
    let idLink=""
    if (propsId.videoId) {
      idLink = propsId.videoId
    } else {
      idLink = propsId
    }
    const link = "http://www.youtube.com/embed/" + idLink
    return (
      <View>
        <Text>{link}</Text>
        {/* <Video style={{width: 3.0, height:2.0}} source={{uri: "https://www.youtube.com/embed/_EvMYEfF_hQ"}} /> */}
        <WebView
          style={{flex:1}}
          javaScriptEnabled={true}
          source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
        />
      </View>
    );
  }
}

export default DetailScreen
