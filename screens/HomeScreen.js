import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import { openDota, openDotaURI } from '../helpers';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dota 2 Heroes',
  }

  constructor() {
    super();
    this.state = {
      heroes: [],
    };
  }

  componentDidMount() {
    openDota
      .get('/heroStats')
      .then(({ data }) => {
        this.setState({
          heroes: data
        });
      })
      .catch((err) => {
        console.log('GET /heroStats ERR:', err);
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={ styles.container }>
        {
          this.state.heroes.map((hero, index) => {
            return (
              <View key={ index } style={ styles.heroContainer }>
                <View style={ styles.hero }>
                  <Image
                    style={{ width: 128, height: 72 }}
                    source={{ uri: openDotaURI + hero.img }}
                  />
                  <Text style={ styles.heroName }>
                    { hero.localized_name } { '\n' }
                    <Text style={ styles.heroAttr }>
                      <Text style={ styles.heroAttrTitle }>
                        Attr:
                      </Text>
                      { hero.primary_attr.toUpperCase() }
                    </Text>
                  </Text>
                </View>
                <Button
                  onPress={ () => navigate('Details', { hero: hero }) }
                  title="Hero Details"
                  color="#c0392b"
                />
              </View>
            );
          })
        }
      </ScrollView>
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
