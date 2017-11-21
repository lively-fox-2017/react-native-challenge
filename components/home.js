import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Text,
    View,
    ScrollView,
    Image,
    FlatList,
    Button
  } from 'react-native';

import { 
  fetchNews
} from '../actions/index'

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            items: []
        }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
            <Text>Hai saya home page</Text>
            {this.props.items.articles !== undefined ? 
            <FlatList
            data={this.props.items.articles}
            renderItem={({item}) =>
            <View>
                <Text>{item.title}</Text>
                <Button title="Details" onPress={() => navigate('DetailsScreen', {id: item.title})}/>
                <Image style={{width: 1080, height: 1080}} source={{uri:item.urlToImage}} alt="Source"/>
            </View>
            }
            />
            :
            <Text>Loading Image</Text>
            }
            </View>
        )
    }

  componentWillMount() {
    this.props.fetchNews()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchNews: () => dispatch(fetchNews())
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.items
  }
}

var ConnectedComponent = connect(
  mapStateToProps, mapDispatchToProps
)(Home)

export default ConnectedComponent