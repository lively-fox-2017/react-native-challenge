import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import actions from '../redux/actions/MovieDetail';

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      from: '',
      fontLoaded: true,
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
      this.props.fetchMovieByTitle(data.author)
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify( this.props)}</Text>
        <TouchableOpacity onPress={() => {navigate('MovieDetail', {})}}>
          <Text style={styles.quote}>{ this.state.quote }</Text>
          <Text>-{ this.state.from }-</Text>
        </TouchableOpacity>
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

function mapStateToProps(state) {
  return {
    tes: state,
  };
}

function mapActionsToProps(dispatch) {
  return {
    fetchMovieByTitle: (title) => {
      return dispatch(actions.fetchMovieByTitle(title))
    },
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Home)
