import React from 'react'
import { Button } from 'react-native-elements'
import { ScrollView, StyleSheet, Dimensions, Text } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'

import { GetSourcesFromApi } from '../actions/sources'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      sources: []
    }
  }
  getMoreSource () {
    this.props.getMoreSource()
  }
  render() {
    const { navigate } = this.props.navigation
    return(
      <ScrollView style={styles.container}>
        <Button
          style={styles.buttonNews}
          raised
          icon={{name: 'library-books', color:'black'}}
          title='CNN'
          backgroundColor="cyan"
          color="black"
          onPress={() =>
            navigate('News', { name: 'CNN', id:'cnn' })
          }
        />
        <Button
          style={styles.buttonNews}
          raised
          icon={{name: 'library-books', color:'black'}}
          title='BBC'
          backgroundColor="orange"
          color="black"
          onPress={() =>
            navigate('News', { name: 'BBC News', id: 'bbc-news' })
          }
        />
        <Button
          style={styles.buttonNews}
          raised
          icon={{name: 'library-books', color:'black'}}
          title='Fox'
          backgroundColor="pink"
          color="black"
          onPress={() =>
            navigate('News', { name: 'Fox News', id: 'fox-news' })
          }
        />
        <Button
          title='Get More Sources'
          raised
          onPress={() =>
            this.getMoreSource()
          }
          style={styles.buttonNews}
        />
        {this.props.sources.map((source, index) => {
          return (
            <Button
              key={index}
              style={styles.buttonNews}
              raised
              icon={{name: 'library-books', color:'white'}}
              title={source.name}
              color="white"
              backgroundColor="black"
              onPress={() =>
                navigate('News', { name: source.name, id: source.id })
              }
            />)
        })}
      </ScrollView>
    )
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonNews: {
    marginTop: 10
  }
});

const mapStateToProps = (state) => {
  return {
    sources: state.Sources.sources
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreSource: () => dispatch(GetSourcesFromApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
