import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { Card } from 'react-native-elements'

export default class ListContent extends Component {
  constructor () {
    super()
    this.state = {
      listNews: []
    }
  }
  componentDidMount () {
    const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e339ce0c756d41b4b750a34a5f778ccf'
    axios.get(url)
    .then(response => {
      this.setState({
        listNews: response.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render () {
    return (
      <ScrollView styles={styles.contentContainer}>
        <Card title="Your News Today From Google APi">
        { this.state.listNews.length == 0 ?
            <Text>Loading ....</Text> :
            this.state.listNews.articles.map((data, i) => {
              return (
                <View key={i}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Main', {mainArticle: data })}
                >
                  <Text style={{fontWeight: 'bold' }} > { data.title } </Text>
              </TouchableOpacity>
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
  }
});
