import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {

    render() {
        console.log('this.props', this.props)
        return (
            <>
                <span className='count' >{this.props.countValue}</span>
                <button onClick={()=>this.props.onChangeValue(10)}>Add 10</button>
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    console.log('state Counter.js', state);
    return {
        countValue: state.count,
    };
}
    
const mapDispatchToProps = {
    onChangeValue: (value)=> {
        console.log('value', value)
        //action creator
        return (dispatch)=>{
            dispatch({type: 'ADD_VALUE', value: value});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);