import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import { openDotaURI } from '../helpers';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Hero Details',
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { params } = this.props.navigation.state;
    const hero = params.hero;
    return (
      <ScrollView style={ styles.container }>
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
        <View style={ styles.heroDetails }>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Roles</Text>:{ '\n' }
            { hero.roles.join(', ') }{ '\n' }{ '\n' }
            <Text style={{ fontWeight: 'bold' }}>Move Speed</Text>:{ '\n' }
            { hero.move_speed }{ '\n' }{ '\n' }
            <Text style={{ fontWeight: 'bold' }}>Projectile Speed</Text>:{ '\n' }
            { hero.projectile_speed }
          </Text>
        </View>
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
    marginBottom: 15,
  },
  heroDetails: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
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
