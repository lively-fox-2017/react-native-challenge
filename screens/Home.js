import React from 'react';
import axios from 'axios';
import { Constants, Location, Permissions } from 'expo';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: null
    }
  }

  _getLocationAsync() {
    return new Promise((resolve, reject) => {
      Permissions.askAsync(Permissions.LOCATION)
      .then(resp => {
        if (resp.status === 'granted') return Location.getCurrentPositionAsync({});
      })
      .then(location => {
        resolve(location)
      })
      .catch(err => {
        reject(err);
      });
    });
  };

  _getRestaurantsFromZomatoApi(lat, lon) {
    const URL = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}`;
    return axios.get(URL, {headers: {'user-key': '668cf0ff7ba91ccbeafd4ae1c6159916'}});
  }

  componentDidMount() {
    this._getLocationAsync()
    .then(location => {
      return this._getRestaurantsFromZomatoApi(location.coords.latitude, location.coords.longitude);
    })
    .then(response => {
      const restaurants = response.data.restaurants.map(restaurant => {
        return {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          location: restaurant.restaurant.location.address,
          cuisines: restaurant.restaurant.cuisines,
          image: restaurant.restaurant.featured_image.replace('?output-format=webp', '')
        }
      });      

      this.setState({restaurants})
    })
    .catch(err => {
      throw err;
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    let restaurants = <Text>Loading ...</Text>;

    if (this.state.restaurants) {
      restaurants = this.state.restaurants.map(rest => (
        <TouchableOpacity style={styles.wrapper} key={rest.id} onPress={ () => navigate('Restaurant', {restaurant: rest})}>
          <Image
            source={{uri: rest.image ? rest.image : 'https://logopond.com/logos/a447d60b6c1ffcfcb618ed05ecd9a679.png'}}
            style={styles.fullWidthImage}
            resizeMode='cover'
          />
          <View style={styles.textWrapper}>
            <Text style={styles.titleText}>{rest.name}</Text>
            <Text>{rest.location}</Text>
          </View>
        </TouchableOpacity>
      ))
    }
    return (
      <View style={styles.container}>
        <ScrollView>
        { restaurants }
        </ScrollView>
      </View>
    );
  }
}

const fullwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  wrapper: {
    paddingBottom: 24,
    marginBottom: 8
  },
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
  fullWidthImage: {
    height: Math.round( fullwidth * 9 / 16),
    width: fullwidth
  },
});
