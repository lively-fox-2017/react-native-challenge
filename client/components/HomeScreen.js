import React, { Component } from 'react'
import ListVideo from './ListVideo'
import { connect } from 'react-redux'
import { paramChange, fetchAllVideoAPI, fetchAllVideoByParamAPI } from '../actions/listVideoActions'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

class HomeScreen extends Component {
  constructor(props) {
    super(props)

    // this.handleChange = this.handleChange.bind(this)
  }
  // searchVideo(param){
  //   console.log('inii param', param);
  //   this.props.fetchAllVideoByParam(param)
  // }
  componentDidMount(){
    this.props.fetchAllVideo()
  }
  // handleChange(event){
  //   this.props.paramChange(event.target.value);
  //   console.log('ini props param', this.props.param);
  //   event.preventDefault();
  // }
  render(){
    return(
      <View>
        {/* <Text>Home Screen</Text> */}
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.props.paramChange({text})}
          value={this.props.param}
        />
        <Button
          onPress={()=>this.props.fetchAllVideoByParam(this.props.param)}
          title="Search"
          color="#841584"
          accessibilityLabel="Search"
        />
        <ListVideo listVideo={this.props.listVideo}></ListVideo>
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
