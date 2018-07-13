import React, { Component } from 'react';
import { StyleSheet, Text, View ,Button,Image,ScrollView} from 'react-native';

class ArticleItem extends Component{
  render() {
  const prop = this.props.navigation.state.params.Article

  return(
    <View style={styles.container}>
        <Text style={styles.header}>{prop.title}</Text>
        <Image source={{uri: prop.urlToImage}} style={{ height: 500}} />
        <Text>{prop.description}</Text>
    </View>

  )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});


export default ArticleItem
