import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, Button, Linking, TouchableOpacity } from 'react-native';

export default class Restaurant extends React.Component {
  render() {
    const restaurant = this.props.navigation.state.params.restaurant;

    return (
      <View>
        <Image
          source={{uri: restaurant.featured_image}}
          style={styles.fullWidthImage}
          resizeMode='cover'
        />
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>{restaurant.name}</Text>
          <Text style={styles.tagText}>Cuisines: {restaurant.cuisines}</Text>
          <Text style={styles.tagText}>Average Cost For Two: {restaurant.currency} {restaurant.average_cost_for_two}</Text>
          <Text style={styles.tagText}>Rating: {restaurant.user_rating.rating_text}</Text>
          <Text>{restaurant.location.address}</Text>
          <TouchableOpacity style={styles.restaurantButton} onPress={() => {Linking.openURL(restaurant.url)}}>
            <Text style={styles.restaurantButtonText}>Find Out More on Zomato!</Text>
          </TouchableOpacity>
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
  restaurantButton: {
    backgroundColor: '#A61646',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 32
  },
  restaurantButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FAFAFA',
  }
});