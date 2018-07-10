import Expo from 'expo'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    View,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
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
            <Container>
                <Content>
                {this.props.items.articles !== undefined ? 
                <FlatList
                data={this.props.items.articles}
                renderItem={({item}) =>
                <TouchableOpacity onPress={() => navigate('DetailsScreen', {id: item.title})}>
                    <Card>
                        <CardItem>
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
                        <Left>
                            <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                }
                />
                :
                <Text>Loading Image</Text>
                }
                </Content>
            </Container>
        )
    }

  async componentWillMount() {
    await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
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