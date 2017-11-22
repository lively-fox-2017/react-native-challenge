import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { getNews } from './actions/articles'

class ArticleListRedux extends React.Component {
  componentWillMount () {
    this.props.fetchArticles()
  }

  render() {
    // console.log("------------>", this.props);
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={ styles.container }>
        {this.props.articles.map((article, index) => {
          return (
            <TouchableOpacity style={ styles.articleItem } key={index} onPress={ () => navigate('Article', { article: article})}>
              <Image
                style={{width: 50, height: 50, borderRadius: 100, marginRight:5}}
                source={{uri: article.urlToImage}}
              />
              <View style={ styles.articleItemText }>
                <Text style={ styles.articleTitle }>{ article.title }</Text>
                <Text style={ styles.articleDescription }>{ article.description.substring(0, 60) } ...</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  articleItem: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderBottomColor: 'red',
    padding: 10,
    backgroundColor: 'black',
    opacity: 0.8
  },

  articleItemText: {
    flex: 1,
    flexDirection: 'column',
  },

  articleTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red'
  },

  articleDescription: {
    color: 'white'
  }
});

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    articles: state.articlesReducer.news
  }
}

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: () => dispatch(getNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListRedux);
