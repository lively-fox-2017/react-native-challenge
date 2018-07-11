import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, ActivityIndicator, FlatList } from 'react-native';
import { Card, Button, Header } from 'react-native-elements'
import axios from 'axios'
import { connect } from 'react-redux'

import { GetArticlesFromApi } from '../actions/articles'

class News extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [{
        title: '',
        urlToImage: 'tuturu'
      }],
      animating: true
    }
  }
  componentDidMount () {
    // axios.get('https://newsapi.org/v2/top-headlines?sources='+this.props.navigation.state.params.id+'&apiKey=5f0060b13e974711adcdbd1d10b62286').then((response) => {
    //   var articlesFromAxios = response.data.articles
    //   this.setState({
    //     articles: articlesFromAxios,
    //     animating: false
    //   })
    // }).catch((err) => {
    //   console.error('sini bukan',err)
    // })
    this.props.getArticles(this.props.navigation.state.params.id)
  }
  render() {
    const { navigate } = this.props.navigation
    if(this.props.loading) {
      return (
        <View>
          <ActivityIndicator
               animating = {this.props.loading}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}
          />
        </View>
      )
    } else {
      return (
          <ScrollView style={styles.container}>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: this.props.navigation.state.params.name, style: { color: '#fff' } }}
              rightComponent={{ icon: 'cached', color: '#fff' }}
            />
            <FlatList
              data={this.props.articles}
              keyExtractor={ (item, index) => index}
              renderItem={({item, index}) => (<Card title={item.title} key={this._keyExtractor}>
                <Image
                  style={styles.imageStyle}
                  source={{uri:item.urlToImage}}
                />
                <Card>
                  <Text>{item.description}</Text>
                </Card>
                <Button
                  raised
                  icon={{name: 'library-books', color:'black'}}
                  title='Read More'
                  backgroundColor="cyan"
                  color="black"
                  onPress={() =>
                    navigate('NewsDetails', {uri:item.url})
                  }
                />
              </Card>)}
            />
          </ScrollView>
      );
    }
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    width: null,
    height: Math.round(fullWidth * 3 / 8)
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  }
});

const mapStateToProps = (state) => {
  return {
    articles: state.Articles.articles,
    loading: state.Articles.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: (source) => dispatch(GetArticlesFromApi(source))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
