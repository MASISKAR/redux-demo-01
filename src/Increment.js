import React from 'react';

export default function Increment(props){

    return (
        <button onClick={props.onIncrement}>Inc +</button>
    );
};