import React, { Component } from 'react';
import { StyleSheet, Text, View ,Button,Image,ScrollView} from 'react-native';
import { connect } from 'react-redux'
import { fetchNews } from './actions/NewsAction'


class ArticleList extends Component {
  componentWillMount() {
    this.props.fetchnews()
  }

  render(props) {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
      <View style={styles.container}>
        {this.props.news.articles.map((item,index)=>{
          return(
            <View key={index}>
            <Image source={{uri: item.urlToImage}} style={{ height: 100}} />
            <Text>{item.title}</Text>
            <Button title="Detail" onPress={() => navigate('Detail', { Article: item }) } />
            </View>

          )
        })}
      </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});


const mapStateToProps=(state)=>{
  return{
    'news': state.NewsReducer
  }
}

const mapActionToProps=(dispatch)=>{
  return{
    fetchnews: ()=> dispatch(fetchNews())
  }
}

export default connect (mapStateToProps,mapActionToProps)(ArticleList)
