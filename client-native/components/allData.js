import React from 'react'
import { connect } from 'react-redux'
import { getAllDataZoma  } from '../actions/zomatoActions'
import { Provider } from 'react-redux'
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    // TouchableHighlight
} from 'react-native';


class AllDataClass extends React.Component {
    constructor(props) {
        super(props)
        this.pressButton = this.pressButton.bind(this)

    }

    componentWillMount () {
        this.props.getAllDataZoma()
        // alert(JSON.stringify(this.props.navigation))
    }

    static navigationOptions = {
        title: 'Welcome Zomato Test API',
    };

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.showAllData.call(this)}
                <Button
                onPress={this.pressButton}
                title="Click This !"
                color="#841584"
                />
            </View>
        )
    }

    pressButton () {
        alert('hello ogi')
    }

    showAllData() {
        const { navigate } = this.props.navigation;
        if (this.props.allData && this.props.allData.length > 0) {
            // alert(navigate)
            return (
            <View>
                <Text>Location Test in JAKARTA</Text>
                <Text>ZOMATO CATEGORIES: </Text>
                {this.props.allData.map((item,index)=>{
                    return (
                        <Button
                            key={index}
                            title={item.categories.name}
                            onPress={() =>
                                navigate('Test', { category: `${item.categories.name}`, id:`${item.categories.id}` })}>
                        >
                        </Button>
                    )
                })}
            </View>
            )
        } else {
            return ( 
            <View>
                <Text>Not Yet Fetched....</Text>
            </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapState = (state) => {
    // alert(JSON.stringify(JSON.stringify(state.allData.length)+ ' FROM MAP STATE'))
    return {
        allData: state.allData
    }
}

const mapActions = (dispatch) => {
    return {
        getAllDataZoma: (params) => dispatch(getAllDataZoma(params))
    }
}

const connectedAlldata = connect(
    mapState,
    mapActions
)(AllDataClass)

// export default AllDataClass
export default connectedAlldata