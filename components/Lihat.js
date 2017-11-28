import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Native API'
  };

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
      // console.log(self.state.dataApi)
    })
    .catch(function (error) {
      console.log(error);
    })
    console.log('bisa karna biasa', self.state.dataApi)
  }

  render() {
    const { navigate } = this.props.navigation;
    // alert(JSON.stringify(this.props.navigation))
    return (
      <View style={styles.container}>

      <Button
        onPress={() => navigate('HomeScreenRedux')}
        title="Mode React Redux Click Disini"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

       <ScrollView contentContainerStyle={styles.contentContainer}>

        {this.state.dataApi.map((data, key) => {
          return (

            <View style={[styles.pembungkus]} key={key}>
              <View style={[styles.kontainer]}>
                <TouchableOpacity onPress={() => navigate('Homedua', {data: data})}><Text style={[styles.judul]}>{data.title}</Text>
                <Text style={[styles.description]}>{data.description}</Text></TouchableOpacity>
              </View>

              <View style={[styles.kontainer]}>
                <TouchableOpacity onPress={() => navigate('Homedua', {data: data})}><Image source={{uri: data.urlToImage}} style={{width: 150, height: 100}} /></TouchableOpacity>
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
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 50,
  },
  pembungkus: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  kontainer: {
    flex: 1,
    flexDirection:'column',
  },
});
