import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListContent from '../components/ListContent'
import MainContent from '../components/MainContent'
//
// const ListContent = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//     <Button
//       onPress={() => navigation.navigate('MainContent')}
//       title="Go to details"
//     />
//   </View>
// );

const RootNavigator = StackNavigator({
  home: {
    screen: ListContent,
    navigationOptions: {
      headerTitle: 'List',
    }
  },
  Main: {
    screen: MainContent,
    navigationOptions: {
      headerTitle: 'Content'
    }
  }
})

export default RootNavigator
