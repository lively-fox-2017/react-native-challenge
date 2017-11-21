import React from 'react'
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
})


export default () => <Stack />;