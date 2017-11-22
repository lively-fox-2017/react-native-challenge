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
import { List, ListItem } from 'react-native-elements'

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
    const { navigate }  = this.props.navigation
    return (
        <List containerStyle={{marginBottom: 20}}>
            <Button
              onPress={ () => navigate('DataHeroes')}
              title="DataHeroes"
            />
          <ScrollView>
            {this.state.swapi.map((hero, i) => {
              return <ListItem
                roundAvatar
                key={i}
                title={hero.name}
                subtitle={hero.height}
              />
            })}
          </ScrollView>
        </List>
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
