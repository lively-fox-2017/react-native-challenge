import React from 'react';
import { StyleSheet,
  Text,
  View
} from 'react-native';

import axios from 'axios'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      news: []
    }
  }
  //
  componentWillMount () {
    const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e339ce0c756d41b4b750a34a5f778ccf'
    axios.get(url)
    .then(resp => {
      this.state.news = resp
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>HERE WE GO.</Text>
        {console.log(this.state.news)}
        {/* {if (this.state.news.articles) {
        <Text> { this.state.news.articles } </Text>
        }} */}
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
});
