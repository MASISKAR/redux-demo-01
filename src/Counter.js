import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getPosts} from './store/actions';

class Counter extends Component {

    render() {

        return (
            <>
                <button onClick={() => this.props.onSubValue(10)}>- 10</button>
                <span className='count' >{this.props.countValue}</span>
                <button onClick={() => this.props.onAddValue(10)}>+ 10</button>
                <button onClick={this.props.getPosts}>Get Posts</button>

                <ol>
                    {
                        this.props.posts.map(post => {
                            return (
                                <li key={post.id}>{post.title}</li>
                            )
                        })
                    }

                </ol>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countValue: state.count,
        posts: state.posts
    };
}

/* const mapDispatchToProps = (dispatch) => {
    return {
        //action creator
        onAddValue: (value) => dispatch({ type: "ADD_VALUE", value: value }),
        onSubValue: (value) => dispatch({ type: "SUB_VALUE", value: value }),
        getPosts: () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(posts => {
                    dispatch({ type: "GET_POSTS", data: posts });
                })
        }
    };

}; */

const mapDispatchToProps = {
    getPosts: getPosts
};

// const mapDispatchToProps = {
//     onChangeValue: (value)=> {
//         console.log('value', value)
//         //action creator
//         return (dispatch)=>{
//             dispatch({type: 'ADD_VALUE', value: value});
//         }
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);