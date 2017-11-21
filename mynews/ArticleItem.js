import React, { Component } from 'react';
import { StyleSheet, Text, View ,Button,Image,ScrollView} from 'react-native';

class ArticleItem extends Component{
  render() {
  const prop = this.props.navigation.state.params.Article
  const url = prop.url

  return(
    <View style={styles.container}>
        <Text>{prop.title}</Text>
        <Image source={{uri: prop.urlToImage}} style={{width: 500, height: 500}} />
        <Text>{prop.description}</Text>
    </View>

  )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ArticleItem
