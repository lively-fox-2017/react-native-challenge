import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from '../components/home'
import Details from '../components/details'

const Stack = StackNavigator({
        HomeScreen: {
            screen: Home
        },
        DetailsScreen : {
            screen: Details
        }
    },
    {
      cardStyle: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
      }
    }   
)


export default () => <Stack />;