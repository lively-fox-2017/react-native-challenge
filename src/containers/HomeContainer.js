import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar} from 'react-native'
import { Card, ListItem, List } from 'react-native-elements'

import { fetchTrending } from '../actions/TweetActions'
import HeaderComponent from '../components/HeaderComponent'

class HomeContainer extends Component {

  constructor(props) {
    super(props)

    this.navigate = props.navigation.navigate
    this.props.fetchTrending()
  }

  generateTrending () {
    return (
      this.props.trending.map((element, index) => {
        return (
          <ListItem
            key={index}
            title={element.name}
            onPress={() => this.navigate('TrendingTweets', {query: element.query, name: element.name})}
          />
        )
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent navigation={this.props.navigation} title='Home' />
        <Card>
          <ScrollView>
            {this.props.trending.map((element, index) => (
              <TouchableOpacity key={index} onPress={() => this.navigate('TrendingTweets', {query: element.query, title: element.name})}>
                <View style={styles.item}>
                  <Text>{element.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1
 }
})

const mapStateToProps = (state) => ({
  trending: state.TweetReducer.trending
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrending: () => dispatch(fetchTrending())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
