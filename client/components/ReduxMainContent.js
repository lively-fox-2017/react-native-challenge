import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import { Card } from 'react-native-elements'
import FitImage from 'react-native-fit-image';
import axios from 'axios'


export default class MainContent extends Component {
  render() {
    let article = this.props.navigation.state.params.mainArticle
    return (
      <ScrollView styles={styles.contentContainer}>
        <View>
        <Card title="Your News Today From Google APi" >
                <View>
                <FitImage  source={{ uri: article.urlToImage }} style={styles.fitImage} ></FitImage>
                <Text style={{fontWeight: 'bold' }} > { article.title } </Text>
                <Text> { article.description } </Text>
              </View>
      </Card>
    </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    textAlign: 'justify',
    padding: 20
  },
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
});
