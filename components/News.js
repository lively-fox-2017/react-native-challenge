import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { Card, Button, Header } from 'react-native-elements'
import axios from 'axios'

export default class BBCNews extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [{
        title: '',
        urlToImage: 'tuturu'
      }],
      animating: true
    }
  }
  componentDidMount () {
    axios.get('https://newsapi.org/v2/top-headlines?sources='+this.props.navigation.state.params.id+'&apiKey=5f0060b13e974711adcdbd1d10b62286').then((response) => {
      var articlesFromAxios = response.data.articles
      this.setState({
        articles: articlesFromAxios,
        animating: false
      })
    }).catch((err) => {
      console.error('sini bukan',err)
    })
  }
  render() {
    const { navigate } = this.props.navigation
    if(this.state.animating) {
      return (
        <View>
          <ActivityIndicator
               animating = {this.state.animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}
          />
        </View>
      )
    } else {
      return (
          <ScrollView style={styles.container}>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: this.props.navigation.state.params.name, style: { color: '#fff' } }}
              rightComponent={{ icon: 'cached', color: '#fff' }}
            />
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
                    onPress={() =>
                      navigate('NewsDetails', {uri:article.url})
                    }
                  />
                </Card>
              )
            })}
          </ScrollView>
      );
    }
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
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  }
});
