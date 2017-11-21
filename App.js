import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataApi: []
    }
  }

  componentWillMount () {
    let self = this
    axios.get('https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=080e457774e54e00b8fd9315ed37c24d')
    .then(function (response) {
      const dataApi = response.data.articles
      self.setState({dataApi})
      console.log(self.state.dataApi)
    })
    .catch(function (error) {
      console.log(error);
    })
    console.log('bisa karna biasa', self.state.dataApi)
  }

  render() {
    return (
      <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.state.dataApi.map((data, key) => {
          return (
            <View style={[styles.pembungkus]} key={key}>
              <View style={[styles.kontainer]}>
                <Text style={[styles.judul]}>{data.title}</Text>
                <Text style={[styles.description]}>{data.description}</Text>
              </View>
              <View style={[styles.kontainer]}>
                <Image source={{uri: data.urlToImage}} style={{width: 150, height: 100}} />
              </View>
            </View>
          )
        })}
         </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5',
    flex: 1,
    backgroundColor: '#fff',
  },
  judul: {
    fontSize: 15,
  },
  contentContainer: {
    paddingVertical: 50,
  },
  pembungkus: {
    flexDirection: 'row',
  },
  kontainer: {
    flex: 1,
    flexDirection:'column',
  },
});
