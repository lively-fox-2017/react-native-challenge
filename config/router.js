import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from '../components/home'

const Stack = StackNavigator({
    HomeScreen: {
        screen: Home
    }
})

export default () => <Stack />;