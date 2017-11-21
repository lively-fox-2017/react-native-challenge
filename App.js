import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      from: '',
    }
  }

  componentDidMount() {
    axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1/', {
      headers: {
        'X-Mashape-Key': '7VaCOmrLEGmshuGxFXwic6fjZg7op16wRA8jsn1DCWfvv0ZDX4',
        'Accept': 'application/json',
      }
    })
    .then(({ data }) => {
      this.setState({
        quote: data.quote,
        from: data.author,
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quote}>{ this.state.quote }</Text>
        <Text>-{ this.state.from }-</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
    fontSize: 30,
  }
});
