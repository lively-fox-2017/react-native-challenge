import React, { Component } from 'react'
import store from '../store/'
import setNews from '../actions/News'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import { Card } from 'react-native-elements'

class ReduxListContent extends Component {

  render () {
    return (
      <Text> { JSON.stringify(this.props.news) } </Text>
      // <ScrollView styles={styles.contentContainer}>
      //   <Card title="Your News Today From Google APi">
      //   { this.state.listNews.length == 0 ?
      //       <Text>Loading ....</Text> :
      //       this.state.listNews.articles.map((data, i) => {
      //         return (
      //           <View key={i}>
      //           <TouchableOpacity
      //             onPress={() => this.props.navigation.navigate('Main', {mainArticle: data })}
      //           >
      //             <Text style={{fontWeight: 'bold' }} > { data.title } </Text>
      //         </TouchableOpacity>
      //         </View>
      //         )
      //       })
      //   }
      // </Card>
      // </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news
  }
}

const listContentConnect = connect(
  mapStateToProps,
  null
)(ReduxListContent)

export default listContentConnect
