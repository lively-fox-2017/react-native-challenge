import React from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { requestHeroes } from '../actions/heroActions';
import { openDotaURI } from '../helpers';

const mapStateToProps = (state) => {
  return {
    heroes: state.heroReducer.heroes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestHeroes: () => dispatch(requestHeroes()),
  };
};

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dota 2 Heroes',
    headerStyle: {
      marginTop: 25
    },
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestHeroes();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        { !this.props.heroes.length && <ActivityIndicator/> }
        <FlatList
          data={ this.props.heroes }
          keyExtractor={ (item) => item.id }
          renderItem={ ({ item }) => {
            return (
              <View style={ styles.heroContainer }>
                <View style={ styles.hero }>
                  <Image
                    style={{ width: 128, height: 72 }}
                    source={{ uri: openDotaURI + item.img }}
                  />
                  <Text style={ styles.heroName }>
                    { item.localized_name } { '\n' }
                    <Text style={ styles.heroAttr }>
                      <Text style={ styles.heroAttrTitle }>
                        Attr:
                      </Text>
                      { item.primary_attr.toUpperCase() }
                    </Text>
                  </Text>
                </View>
                <Button
                  onPress={ () => navigate('Details', { hero: item }) }
                  title="Hero Details"
                  color="#c0392b"
                />
              </View>
            );
          } }
        />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  hero: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
  },
  heroContainer: {
    marginBottom: 15,
  },
  heroName: {
    fontSize: 24,
    marginLeft: 15,
  },
  heroAttr: {
    fontSize: 12
  },
  heroAttrTitle: {
    color: 'gray'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
