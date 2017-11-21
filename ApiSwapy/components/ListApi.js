import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import axios from 'axios'

export default class ListApi extends Component {
  constructor() {
    super()
    this.state = {
      swapi: []
    }
  }

  fetchApiSwapi(){
    axios.get('https://swapi.co/api/people/')
    .then(({ data }) => {
      console.log('ini data---->', data)
      this.setState({
        swapi: data.results
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  componentWillMount() {
    this.fetchApiSwapi()
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify( this.state.swapi )}</Text>
      </View>
    )
  }
}
