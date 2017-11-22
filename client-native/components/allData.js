import React from 'react'
import { connect } from 'react-redux'
import { getAllDataZoma  } from '../actions/zomatoActions'
import { 
    StyleSheet, 
    Text, 
    View,
    Button
} from 'react-native';

class AllDataClass extends React.Component {
    constructor(props) {
        super(props)

        this.pressButton = this.pressButton.bind(this)
    }

    componentWillMount () {
        this.props.getAllDataZoma()
    }

    render () {
        return (
            <View>
                {this.showAllData.call(this)}
                <Button
                onPress={this.pressButton}
                title= 'Click this !'
                />
            </View>
        )
    }

    pressButton () {
        alert('hello ogi')
    }

    showAllData() {
        if (this.props.allData && this.props.allData.length > 0) {
            return <View>
                <Text>Masuk Fetch</Text>
                <Text>All Categories from zomato</Text>
                {this.props.allData.map(item=>{
                    return (
                        <Text>{item.categories.name}</Text>
                    )
                })}
            </View>
        } else {
            return <View>
                <Text>Not Yet Fetched</Text>
            </View>
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
    alert(JSON.stringify(JSON.stringify(state.allData.length)+ ' FROM REDUCER'))
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