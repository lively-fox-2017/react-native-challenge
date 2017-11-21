import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Text,
    View,
    ScrollView,
    Image,
    FlatList,
    Linking
  } from 'react-native';

import { 
  fetchNews,
  getDetail
} from '../actions/index'

class Details extends Component {
    constructor(props) {
        super()
        this.state = {
            details: []
        }
    }

    render() {
        return (
            <View>
            <Text>Detail Page</Text>
            {this.props.details !== undefined ? 
            <FlatList
            data={this.props.details}
            renderItem={({item}) =>
            <View>
                <Text>{item.title}</Text>
                <Image style={{width: 1080, height: 1080}} source={{uri:item.urlToImage}} alt="Source"/>
                <Text>{ item.description }</Text>
                <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL(`${item.uri}`)}>
                Original Article
                </Text>
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
    this.props.getDetail(this.props.navigation.state.params.id)
    console.log(this.props.details)   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getDetail: (params) => dispatch(getDetail(params))
  }
}

const mapStateToProps = (state) => {
  return {
      details: state.details
  }
}

var ConnectedComponent = connect(
  mapStateToProps, mapDispatchToProps
)(Details)

export default ConnectedComponent