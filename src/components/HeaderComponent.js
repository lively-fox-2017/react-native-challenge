import React from 'react'
import { Header, Icon } from 'react-native-elements'

const HeaderComponent = (props) => (
  <Header leftComponent={<Icon name='menu' color='#fff' onPress={() => props.navigation.navigate('DrawerToggle')} />}
  centerComponent={{ text: props.title, style: { color: '#fff' } }}
  rightComponent={<Icon name='home' color='#fff' onPress={() => props.navigation.navigate('Home')} />} />
)

export default HeaderComponent
