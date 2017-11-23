import React from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { getSearchZoma } from '../actions/zomatoActions';

class DetailZomatoClass extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            category: null,
            id: null
        }
    }

    componentWillMount () {
        // alert(JSON.stringify(this.props.navigation.state.params.category))
        this.setState({
            category: this.props.navigation.state.params.category,
            id: this.props.navigation.state.params.id
        },()=>{
            this.props.getSearchZoma(this.state.id)
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Search: {this.state.category} (first 20 restaurant)</Text>
                {this.showDataRestaurant.call(this)}
            </View>
        )
    }

    showDataRestaurant () {
        if (this.props.bySearch && this.props.bySearch.length>0) {
            return (
                <View>
                    {this.props.bySearch.map((item,index)=>{
                        return (
                            <View key={index}>
                                <Text>Name: {item.restaurant.name}</Text>
                                <Text>Address: {item.restaurant.location.address}</Text>
                            </View>
                        )
                    })}
                </View>
            )
        } else {
            return (
                <Text>Waiting Fetch Data....</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

const mapState = (state) => {
    alert('FROM MAPSTATE DETAIL ' + JSON.stringify(state))
    return{
        bySearch : state.bySearch
    }
}

const mapActions = (dispatch) => {
    return{
        getSearchZoma: (params) => dispatch(getSearchZoma(params))
    }
}

const connectedDetail = connect(
    mapState,
    mapActions
)(DetailZomatoClass)

// export default DetailZomatoClass;
export default connectedDetail