import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

class MovieDetail extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.outerContainer}>
          <Text style={styles.title}>
            {this.props.movieDetail.title}
          </Text>
          <Image source={ { uri: this.props.movieDetail.poster } } style={{width: 300, height: 400}}/>
          <View style={{ width: 340, marginTop: 80 }}>
            <View style={styles.description}>
              <Text style={styles.label}>Director: </Text>
              <Text>{this.props.movieDetail.director}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.label}>Genre: </Text>
              <Text>{this.props.movieDetail.genre}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.label}>Actors: </Text>
              <Text>{this.props.movieDetail.actors}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.label}>Released: </Text>
              <Text>{this.props.movieDetail.released}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.label}>IMDB rating: </Text>
              <Text>{this.props.movieDetail.imdbRating}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.label}>Plot: </Text>
              <Text>{this.props.movieDetail.plot}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    movieDetail: state.MovieDetail,
  };
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 40,
    fontFamily: 'Roboto',
  },
  label: {
    fontWeight: 'bold',
  },
  description: {
    flexDirection: 'row'
  }
})

export default connect(mapStateToProps, null)(MovieDetail);
