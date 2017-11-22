import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import {dapatkanBerita} from '../actions/index'
import {connect} from 'react-redux'

class HomeScreenRedux extends React.Component {
  static navigationOptions = {
    title: 'Home Native Redux & Thunk'
  };

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentWillMount () {
    this.props.dapatkanBerita()
  }

  render() {
    // console.log(this.state.data)
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

       <ScrollView contentContainerStyle={styles.contentContainer}>

        {this.props.allnews.map((data, key) => {
          return (

            <View style={[styles.pembungkus]} key={key}>
              <View style={[styles.kontainer]}>
                <TouchableOpacity onPress={() => navigate('KontenRedux', {data: data})}><Text style={[styles.judul]}>{data.title}</Text>
                <Text style={[styles.description]}>{data.description}</Text></TouchableOpacity>
              </View>

              <View style={[styles.kontainer]}>
                <TouchableOpacity onPress={() => navigate('Homedua', {data: data})}><Image source={{uri: data.urlToImage}} style={{width: 150, height: 100}} /></TouchableOpacity>
              </View>
            </View>

          )
        })}

         </ScrollView>

      </View>
    );
  }
}

const mapState = state => {
  // console.log('halo', state.allnews.allnews)
  return {
    allnews: state.allnews.allnews
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('coba')
  return {
    dapatkanBerita: () => dispatch(dapatkanBerita()),
    // hapususer: (id) => dispatch(hapususer(id)),
    // getUserSatuan: (id) => dispatch(getUserSatuan(id))
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 50,
  },
  pembungkus: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  kontainer: {
    flex: 1,
    flexDirection:'column',
  },
});

const home = connect(
  mapState,
  mapDispatchToProps
)(HomeScreenRedux)

export default home;
