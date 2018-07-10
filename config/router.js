import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from '../components/home'
import Details from '../components/details'

const Stack = StackNavigator({
        HomeScreen: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                title: `News Events`,
                headerStyle: {backgroundColor: '#1E90FF'},                
            }),
        },
        DetailsScreen : {
            screen: Details,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.id}`,
                headerStyle: {backgroundColor: '#1E90FF'},
            }),
        }
    }
)


export default () => <Stack />;