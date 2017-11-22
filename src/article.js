import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native'

class Article extends React.Component{
  render() {
    const prop = this.props.navigation.state.params.article
    const url = prop.url
    // console.log(this.props.navigation.state.params.article.title);
    return (
      <View style={ styles.container }>
        <Text>{ prop.author }</Text>
        <Text style={ styles.articleTitle }>{ prop.title }</Text>
        <Image
          style={{width: '100%', height: 300, marginBottom: 10, marginTop: 10}}
          source={{uri: prop.urlToImage}}
        />
        <Text style={ styles.articleDescription }>{ prop.description }</Text>
        <TouchableOpacity
          onPress={ () => Linking.canOpenURL(url).then( (supported) => {
            if (!supported) {
              console.log("Cant handle this url ", url);
            } else {
              return Linking.openURL(url)
            }
          }).catch((reason) => {
            console.log("Error ", reason);
          })}>
         <Text style={ styles.articleLink }>Continue Reading</Text>
       </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  articleAuthor: {
    color: 'white',
    fontSize: 14
  },

  articleTitle: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  articleDescription: {
    color: 'white',
    fontSize: 18
  },

  articleLink: {
    color: 'orange',
    fontSize: 18
  }
})

export default Article
