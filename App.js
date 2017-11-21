import React from 'react';
import axios from 'axios'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import articleScreen from './src/article'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      news: []
    }
  }

  componentWillMount () {
    axios.get('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=496adc0095e04b3e9aca4c0ad74e1e63')
    .then(({data}) => {
      // console.log(data.articles);
      this.setState({
        news: data.articles
      })
    }).catch((reason) => {
      console.log("ERROR ", reason);
    })
  }

  render() {
    // console.log("------------>", this.state.news);
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={ styles.container }>
        {this.state.news.map((article, index) => {
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
    );
  }
}

const AppNav = StackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Article: {
    screen: articleScreen,
    navigationOptions: {
      headerTitle: 'Article',
      headerBackTitle: 'Back'
    }
  }
})

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

export default AppNav;
