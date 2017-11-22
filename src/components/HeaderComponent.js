import React from 'react'
import { Header } from 'react-native-elements'

const HeaderComponent = (props) => (
  <Header leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Hello World', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }} />
)

export default HeaderComponent
