import React, {Component} from 'react'
import {
  View,
  Button,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native'
import axios from 'axios'
// import { StackNavigator } from 'react-navigation'
import { List, ListItem, Card } from 'react-native-elements'

export default class ListApi extends Component {
  constructor() {
    super()
    this.state = {
      swapi: [],
      animating: true
    }
  }

  closeActivityIndicator = () => setTimeout(() => this.setState({
    animating: false
  }), 6000)

  fetchApiSwapi(){
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cae471f07529494b80feef7591afce50';
    axios.get(url)
    .then(({ data }) => {
      // console.log('ini data---->', data.articles)
      this.setState({
        swapi: data.articles
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  componentWillMount() {
    this.fetchApiSwapi()
    this.closeActivityIndicator()
  }

  render() {
    const { navigate }  = this.props.navigation
    const animating = this.state.animating
    return (
        <View containerStyle={{marginBottom: 20}}>
            <Button
              onPress={ () => navigate('ListBerita')}
              title="ListBerita"
            />
            <View style={styles.buttonStyle}>
              <Button
                large
                icon={{name: 'envira', type: 'font-awesome'}}
                onPress={ () => navigate('ListBeritaRedux')}
                title="list dgn react-redux"
              />
            </View>
            <FlatList
              data={this.state.swapi}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                   >
                   <Image
                    style={{width: 300, height: 100}}
                    source={{uri: item.urlToImage}}
                  />
                  <Text style={{marginBottom: 10}}>
                    {item.description}
                  </Text>
                </Card>
              )}
            />
            <ActivityIndicator
              animating size="large"
              animating = {animating}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10
  }
})
