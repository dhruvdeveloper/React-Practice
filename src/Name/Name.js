import React from 'react';
import './Name.css';


const Name = (props) => {
    return(
        <div className={props.color}>
            <hr />
            <h4>Name: {props.name}</h4>
            <p>Education: {props.education}</p>
            <hr />
        </div>
    );
}

export default Name;