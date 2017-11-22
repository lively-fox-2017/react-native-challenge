import React, { Component } from 'react'
import {StyleSheet, Text, View, ListView, FlatList, Image, Button} from 'react-native'
// import { NavigationActions } from 'react-navigation';

class ListScreen extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <View>
        {/* <Text>{this.props.listVideo[0]}</Text> */}
        <FlatList
          data={this.props.listVideo}
          renderItem={({item, index}) => (
            // let idLink=""
            // if (item.id.videoId) {
            //   idLink = item.id.videoId
            // } else {
            //   idLink = item.id
            // }
            <View key={index}>
              <Text>{item.snippet.title}</Text>
              <Image
                style={{width: 150, height: 150}}
                source={{uri: item.snippet.thumbnails.medium.url}}
              />
              <Text>{item.snippet.publishedAt}</Text>
              {/* <Button
                onPress={() => navigate('DetailScreen', {id: item.id})}
                title="Watch"
              /> */}
            </View>
          )}
        />
      </View>
    )
  }
}

export default ListScreen
