import React, {Component} from 'react'
import {
  View,
  Button,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'
import axios from 'axios'
import { StackNavigator } from 'react-navigation'

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
      // console.log('ini data---->', data)
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
        <View style={styles.listStyle}>
          <Text>Data heroes </Text>
          <ScrollView>
            {this.state.swapi.map((hero) => {
              return <View style={styles.item}>
                <Text>
                  Name:  {hero.name}
                </Text>
                <Text>
                  Height: {hero.height}
                </Text>
                <Text>
                  eye_color: {hero.eye_color}
                </Text>
              </View>
            })}
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create ({
  listStyle: {
    marginTop: 30,
  },
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#FFFFFF'
   }
})
