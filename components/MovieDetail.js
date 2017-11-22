import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

class MovieDetail extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>
          {JSON.stringify(this.props.movieDetail)}
        </Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    movieDetail: state.MovieDetail,
  };
}


export default connect(mapStateToProps, null)(MovieDetail);
