import React, { Component } from 'react'
import ListScreen from './ListScreen'
import { connect } from 'react-redux'
import { paramChange, fetchAllVideoAPI, fetchAllVideoByParamAPI } from '../actions/listVideoActions'
import {StyleSheet, Text, View, TextInput, Button, FlatList, Image} from 'react-native'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  // static navigationOptions = {
  //   title: 'Welcome',
  // };

  searchVideo(param){
    console.log(param);
    this.props.fetchAllVideoByParam(param)
  }
  componentDidMount(){
    this.props.fetchAllVideo()
  }
  render(){
    const { navigate } = this.props.navigation
    return(
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.props.paramChange(text)}
          value={this.props.param}
        />
        <Button
          onPress={()=>this.searchVideo(this.props.param)}
          title="Search"
          color="#841584"
          accessibilityLabel="Search"
        />
        {/* <ListScreen listVideo={this.props.listVideo}></ListScreen> */}
        <FlatList
          data={this.props.listVideo}
          renderItem={({item, index}) => (            
            <View key={index}>
              <Text>{item.snippet.title}</Text>
              <Image
                style={{width: 150, height: 150}}
                source={{uri: item.snippet.thumbnails.medium.url}}
              />
              <Text>{item.snippet.publishedAt}</Text>
              <Button
                onPress={() => navigate('DetailScreen', {id: item.id})}
                title="Watch"
              />
            </View>
          )}
        />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log('--------mapStateToProps', state);
  return {
    listVideo: state.listVideoReducer.listVideo,
    param: state.listVideoReducer.param
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log('...........dispatch', dispatch);
  return {
    fetchAllVideo: () => dispatch(fetchAllVideoAPI()),
    fetchAllVideoByParam: (param) => dispatch(fetchAllVideoByParamAPI(param)),
    paramChange: (param) => dispatch(paramChange(param))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
