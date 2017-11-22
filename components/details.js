import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    Linking  
} from 'react-native';

import { Container, 
    Header, 
    Title, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Left, 
    Right, 
    Body, 
    Icon, 
    Text,
    Card,
    CardItem,
    Thumbnail 
} from 'native-base';


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
            {this.props.details !== undefined ? 
            <FlatList
                data={this.props.details}
                renderItem={({item}) =>
                <Card>
                    <CardItem header>
                    <Left>
                        <Thumbnail source={{uri: 'Image URL'}} />
                        <Body>
                        <Text>{ item.title }</Text>
                        <Text note>{ item.author }</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem cardBody>
                    <Image source={{uri: item.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Text>{item.description }</Text>
                    </CardItem>
                    <CardItem header>
                    <Left>
                    </Left>
                    <Body>
                        <Button transparent onPress={() => Linking.openURL(item.url)}>
                        <Text>Original Article</Text>
                        </Button>
                    </Body>
                    <Right>
                    </Right>
                    </CardItem>
                </Card>
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