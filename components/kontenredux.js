import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Hyperlink from 'react-native-hyperlink';

export default class KontenRedux extends React.Component {
  static navigationOptions = {
    title: 'Konten Native Redux & Thunk'
  };

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.navigation.state.params.data
    }
  }

  render() {
    return (
      <View style={styles.container}>

      <View style={[styles.kontainer]}>
        <Text style={[styles.judul]}>{this.state.data.title}</Text>
        <Text style={{paddingVertical: 10, paddingHorizontal: 10,}}>{this.state.data.author}</Text>
        <Text style={{paddingVertical: 10, paddingHorizontal: 10,}}>{this.state.data.publishedAt}</Text>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <Image source={{uri: this.state.data.urlToImage}} style={{width: 250, height: 150, alignItems: 'center',}} />

        </View>

        <Text style={{paddingVertical: 10, paddingHorizontal: 10,}}>{this.state.data.description}</Text>

        <Hyperlink linkDefault={ true }>
          <Text style={ { paddingVertical: 10, paddingHorizontal: 10, fontSize: 15, } }>
            {this.state.data.url}
          </Text>
        </Hyperlink>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  kontainer: {
  },
  judul: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
});
