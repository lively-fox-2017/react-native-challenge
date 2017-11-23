import React, {Component} from 'react'
import {
  View,
  Button,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native'
import axios from 'axios'
import { StackNavigator } from 'react-navigation'
import { List, ListItem, Card } from 'react-native-elements'
import { connect } from 'react-redux'

import { fetchBerita } from '../actions/BeritaAction'

class ListBerita extends Component {

  componentWillMount() {
    console.log('------ ini this.props.fetchBerita--->')
    this.props.fetchBerita()
  }

  render() {
    const { navigate }  = this.props.navigation
    return (
        <View containerStyle={{marginBottom: 0}}>
            <FlatList
              data={this.props.berita}
              renderItem={({ item }) => (
                <Card>
                   <ListItem
                     roundAvatar
                     title={item.title}
                     avatar={{uri:item.urlToImage}}
                   />
                </Card>
              )}
            />
        </View>
    )
  }
}

const mapState = ( state ) => {
  console.log('---- dapet state ---> 6 ', state)
  return {
    berita: state.berita
  }
}

const mapDispatch = ( dispatch ) => {
  console.log('----- ini dispatch ---->', dispatch)
  return {
    fetchBerita: () => dispatch(fetchBerita())
  }
}

const ListBeritaConnect = connect(mapState, mapDispatch)(ListBerita)
export default ListBeritaConnect
