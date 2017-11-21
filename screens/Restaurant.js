import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';

export default class Restaurant extends React.Component {
  render() {
    const restaurant = this.props.navigation.state.params.restaurant;

    return (
      <View>
        <Image
          source={{uri: restaurant.image}}
          style={styles.fullWidthImage}
          resizeMode='cover'
        />
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>{restaurant.name}</Text>
          <Text style={styles.tagText}>{restaurant.cuisines}</Text>
          <Text>{restaurant.location}</Text>
        </View>
      </View>
    )
  }
}

const fullwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  textWrapper: {
    paddingLeft: 8,
    paddingRight: 8 
  },
  titleText: {
    color: '#A61646',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8
  },
  tagText: {
    color: '#999',
    fontSize: 12,
    marginBottom: 8
  },
  fullWidthImage: {
    height: Math.round( fullwidth * 9 / 16),
    width: fullwidth
  },
});