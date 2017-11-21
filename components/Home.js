import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { Card, Button, Header } from 'react-native-elements'
import axios from 'axios'

export default class HomeAjah extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [{
        title: '',
        urlToImage: 'tuturu'
      }]
    }
  }
  componentDidMount () {
    axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5f0060b13e974711adcdbd1d10b62286').then((response) => {
      var articlesFromAxios = response.data.articles
      this.setState({
        articles: articlesFromAxios
      })
    }).catch((err) => {
      console.error('sini b ukan',err)
    })
  }
  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          {this.state.articles.map((article, index) => {
            return (
              <Card title={article.title} key={index}>
                <Image
                  style={styles.imageStyle}
                  source={{uri:article.urlToImage}}
                />
                <Card>
                  <Text>{article.description}</Text>
                </Card>
                <Button
                  raised
                  icon={{name: 'library-books', color:'black'}}
                  title='Read More'
                  backgroundColor="cyan"
                  color="black"
                />
              </Card>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    width: null,
    height: Math.round(fullWidth * 3 / 8)
  }
});
