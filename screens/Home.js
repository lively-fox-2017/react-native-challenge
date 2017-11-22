import React from 'react';
import { connect } from 'react-redux';
import { Constants, Location, Permissions } from 'expo';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { getRestaurantsFromZomatoApi } from './../actions/RestaurantActions';


const mapStateToProps = (state) => ({
  restaurants: state.RestaurantReducer.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  getRestaurantsFromZomatoApi: (lat, lon) => dispatch(getRestaurantsFromZomatoApi(lat, lon))
});

class Home extends React.Component {
  componentDidMount() {
    Permissions.askAsync(Permissions.LOCATION)
    .then(resp => {
      if (resp.status === 'granted') return Location.getCurrentPositionAsync({});
    })
    .then(location => {
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      this.props.getRestaurantsFromZomatoApi(latitude, longitude)
    })
    .catch(err => {
      reject(err);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (!this.props.restaurants) {
      return <Text>Loading ...</Text>
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.props.restaurants}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.wrapper} onPress={ () => navigate('Restaurant', {restaurant: item})}>
                <Image
                  source={{ uri: item.featured_image }}
                  style={ styles.fullWidthImage }
                  resizeMode='cover'
                />
                <View style={styles.textWrapper}>
                  <Text style={styles.titleText}>{item.name}</Text>
                  <Text>{item.location.locality_verbose}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
