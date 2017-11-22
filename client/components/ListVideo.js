import React, { Component } from 'react'
import {StyleSheet, Text, View, ListView, FlatList, Image} from 'react-native'

class ListVideo extends Component{
  // constructor() {
  //   super();
  // }

  render() {
    return(
      <View>
        {/* <Text>{this.props.listVideo[0]}</Text> */}
        <FlatList
          data={this.props.listVideo}
          renderItem={({item, index}) => (
            <View key={index}>
              <Text>{item.snippet.title}</Text>
              <Image
                style={{width: 150, height: 150}}
                source={{uri: item.snippet.thumbnails.medium.url}}
              />
              <Text>{item.snippet.publishedAt}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}

export default ListVideo
