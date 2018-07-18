import { DrawerNavigator, StackNavigator } from 'react-navigation'
import FeedlistContainer from '../containers/FeedlistContainer'
import HomeContainer from '../containers/HomeContainer'

export default DrawerNavigator({
  Home: {screen: HomeContainer},
  TrendingTweets: {screen: FeedlistContainer}
}, {headerMode: 'none'})
