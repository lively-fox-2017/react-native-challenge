import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import { Card } from 'react-native-elements'
import FitImage from 'react-native-fit-image';
import axios from 'axios'


export default class MainContent extends Component {
  constructor () {
    super()
    this.state = {
      news: []
    }
  }
  componentDidMount () {
    const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e339ce0c756d41b4b750a34a5f778ccf'
    axios.get(url)
    .then(respond => {
      this.setState({
        news: respond.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <ScrollView styles={styles.contentContainer}>
        <Card title="Your News Today From Google APi" style={ {backgroundColor: 'blue'} }>
        { this.state.news.length == 0 ?
            <Text>Loading ....</Text> :
            this.state.news.articles.map((data, i) => {
              return (
                <View key={i}>
                <FitImage  source={{ uri: data.urlToImage }} style={styles.fitImage} ></FitImage>
                <Text style={{fontWeight: 'bold' }} > { data.title } </Text>
                <Text> { data.description } </Text>
              </View>
              )
            })
        }
      </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    textAlign: 'justify',
    padding: 20
  },
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
});
