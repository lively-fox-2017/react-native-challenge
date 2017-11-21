import React, { Component } from 'react';
import { StyleSheet, Text, View ,Button,Image,ScrollView} from 'react-native';
import axios from 'axios'
// import { Card } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';
import ArticleItem from './ArticleItem'

class App extends Component {
  constructor(){
    super()
    this.state={
      articles:[]
    }
  }

  componentWillMount() {
    axios.get('https://newsapi.org/v1/articles?source=ign&apiKey=58adf3a0fbb940bf8cf2f688c308ef7e')
    .then(({data})=>{
      this.setState({articles:data.articles})
    }).catch(err=>{
      // console.error(err);
    })
  }


  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
      <View style={styles.container}>
        {this.state.articles.map((item,index)=>{
          return(
            <View key={index}>
            <Image source={{uri: item.urlToImage}} style={{width: 300, height: 90}} />
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

const AppNav = StackNavigator({
  Home: { screen: App },
  Detail: { screen: ArticleItem },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppNav
