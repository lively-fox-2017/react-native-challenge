import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Font } from 'expo';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
// import FontAwesome, {Icons} from 'react-native-fontawesome';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      from: '',
      fontLoaded: true,
    }
  }


  // async componentWillMount() {
  //   await Font.loadAsync({
  //     'FontAwesome': require('./assets/fonts/FontAwesome.otf'),
  //   });
  //
  //   this.setState({ fontLoaded: true });
  // }

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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.quote}>{ this.state.quote }</Text>
        <Text>-{ this.state.from }-</Text>
        <Button
         title="Other"
         onPress={() =>
           navigate('Other', {  })
         }
       />
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
    fontFamily: 'monospace',
  },
})
