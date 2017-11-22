import React from 'react'
import { Button } from 'react-native-elements'
import { ScrollView, StyleSheet, Dimensions, Text } from 'react-native'
import axios from 'axios'
import shuffle from 'shuffle-array'

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      sources: []
    }
  }
  getMoreSource () {
    axios.get('https://newsapi.org/v2/sources?language=en&country=us&apiKey=5f0060b13e974711adcdbd1d10b62286').then((response) => {
      this.setState({
        sources: response.data.sources
      })
    }).catch((err) => {
      console.error('sini bukan',err)
    })
  }
  moreSource () {
    const { navigate } = this.props.navigation
    var sources = [<Text key="1"></Text>]
    if (this.state.sources.length > 0) {
      shuffle(this.state.sources)
      sources.pop()
      for(let i = 0; i < 5; i++) {
        // var randomed = Math.round(Math.random() * this.state.sources.length)
        sources.push(
            <Button
              key={i}
              style={styles.buttonNews}
              raised
              icon={{name: 'library-books', color:'white'}}
              title={this.state.sources[i].name}
              color="white"
              backgroundColor="black"
              onPress={() =>
                navigate('News', { name: this.state.sources[i].name, id:this.state.sources[i].id })
              }
            />
        )
      }
    }
    return sources
  }
  render() {
    const { navigate } = this.props.navigation
    return(
      <ScrollView style={styles.container}>
        <Button
          style={styles.buttonNews}
          raised
          icon={{name: 'library-books', color:'black'}}
          title='CNN'
          backgroundColor="cyan"
          color="black"
          onPress={() =>
            navigate('News', { name: 'CNN', id:'cnn' })
          }
        />
        <Button
          style={styles.buttonNews}
          raised
          icon={{name: 'library-books', color:'black'}}
          title='BBC'
          backgroundColor="orange"
          color="black"
          onPress={() =>
            navigate('News', { name: 'BBC News', id: 'bbc-news' })
          }
        />
        <Button
          style={styles.buttonNews}
          raised
          icon={{name: 'library-books', color:'black'}}
          title='Fox'
          backgroundColor="pink"
          color="black"
          onPress={() =>
            navigate('News', { name: 'Fox News', id: 'fox-news' })
          }
        />
        <Button
          title='Get More Sources'
          raised
          onPress={() =>
            this.getMoreSource()
          }
          style={styles.buttonNews}
        />
        {this.moreSource().map(source => {
          return source
        })}
      </ScrollView>
    )
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonNews: {
    marginTop: 10
  }
});
