import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Text,
    View,
    ScrollView,
    Image,
    FlatList
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
        return (
            <View>
            <Text>Hai saya home page</Text>
            {this.props.items.articles !== undefined ? 
            <FlatList
            data={this.props.items.articles}
            renderItem={({item}) => <Text><Text>{item.title}</Text><Image style={{width: 1080, height: 1080}} source={{uri:item.urlToImage}} alt="Source"/></Text>}
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