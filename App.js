import React, { Component } from 'react';
import axios from 'axios'
import { AppRegistry, ScrollView, StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Photo: { screen: ProfileScreen },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {news: ''};
  }
  componentWillMount() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=weP4e0Cpi6i6dKhqTOiXOmfeBSeTwXj6q0BcZBef'
    axios.get(url).then(({data}) => {
      this.setState({news:data})
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>{this.state.news.copyright}</Text>
          <Text style={styles.content}>{this.state.news.explanation}</Text>
          <Image 
            style={styles.image} 
            source={{uri: this.state.news.url}} 
            style={{width: 400, height: 400}} 
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1ba2c4',
    textAlign: 'center'
  },
  content: {
    padding: 5
  },
  images: {
    marginTop:10,
    marginBottom:10
  }
});
