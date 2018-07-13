// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addNavigationHelpers, StackNavigator } from 'react-navigation';
//
// import HomeScreen from './components/HomeScreen'
// import ListScreen from './components/ListScreen'
// import DetailScreen from './components/DetailScreen'
//
// export const AppNavigator = StackNavigator({
//   List: { screen: ListScreen },
//   Home: { screen: HomeScreen },
//   Detail: { screen: DetailScreen },
// });
//
// const AppWithNavigationState = ({ dispatch, nav }) => (
//   <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// );
//
// AppWithNavigationState.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };
//
// const mapStateToProps = state => ({
//   nav: state.nav,
// });
//
// export default connect(mapStateToProps)(AppWithNavigationState);

import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './components/HomeScreen'
import ListScreen from './components/ListScreen'
import DetailScreen from './components/DetailScreen'

const RouterApp = StackNavigator({
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                title: `Watch your favorite video`,
                headerStyle: {backgroundColor: '#1E90FF'},
            }),
        },
        ListScreen : {
            screen: ListScreen,
            navigationOptions: ({navigation}) => ({
                // title: `${navigation.state.params.id}`,
                title: `List Video`,
                headerStyle: {backgroundColor: '#1E90FF'},
            }),
        },
        DetailScreen : {
            screen: DetailScreen,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.id}`,
                // title: `ssssss`
                headerStyle: {backgroundColor: '#1E90FF'},
            }),
        }
    }
)

export default RouterApp
// export default () => <Router />;
