import React from 'react';

const staff = (props) => {
    return(
        <div className="grid">
            <h2>Staff</h2>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>{props.children}</p>
            <div>
                <button className="btn edit" onClick={props.editEvent}>Edit</button>
            </div>
            <div>
            </div>
        </div>
    )
}

export default staff;