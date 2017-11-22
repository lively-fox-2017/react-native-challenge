import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';

import HomeScreen from './screens/Home';
import RestaurantScreen from './screens/Restaurant';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Restaurants Near You'
    }
  },
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${navigation.state.params.restaurant.name}`
    })
  }
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
