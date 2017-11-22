import React, { Component } from 'react'
import store from '../store/'
import setNews from '../actions/News'
import {loadNewsFromApi} from '../actions/News'
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

  componentDidMount() {
    this.props.loadNewsFromApi()
  }

  render () {
    return (
      // <Text> { JSON.stringify(this.props.news) } </Text>
      <ScrollView styles={styles.contentContainer}>
        <Card title="Your News Today From Google APi">
        { this.props.news.length == 0 ?
            <Text>Loading ....</Text> :
            this.props.news.articles.map((data, i) => {
              return (
                <View key={i}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ReduxMainContent', {mainArticle: data })}
                >
                  <Text style={{fontWeight: 'bold' }} > { data.title } </Text>
              </TouchableOpacity>
              </View>
              )
            })
        }
      </Card>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: (news) => {
      return dispatch(setNews())
    },
    loadNewsFromApi: () => {
      return dispatch(loadNewsFromApi())
    }
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    textAlign: 'justify',
    padding: 20
  }
});


const listContentConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxListContent)

export default listContentConnect
