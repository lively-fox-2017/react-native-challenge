import React, { Component } from 'react';
import { StyleSheet, Text, View ,Button,Image,ScrollView} from 'react-native';
import axios from 'axios'
// import { Card } from 'react-native-elements'

export default class App extends Component {
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
    return (
      <ScrollView>
      <View style={styles.container}>
        {this.state.articles.map((item)=>{
          return(
            <View>
            <Image source={{uri: item.urlToImage}} style={{width: 90, height: 90}} />
            <Text>{item.title}</Text>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
