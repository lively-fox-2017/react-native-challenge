import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, Avatar } from 'react-native-elements'

const FeedComponent = (props) => (
  <Card>
    <View style={style.item}>
      <Avatar
        large
        rounded
        containerStyle={{margin: 10}}
        source={{uri:props.avatar}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Text>{props.name} (@{props.account})</Text>
    </View>
    <View style={style.item}>
      <Text>{props.tweet}</Text>
    </View>
  </Card>
)

const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
 }
})


export default FeedComponent
