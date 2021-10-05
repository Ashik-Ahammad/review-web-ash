import React from 'react';
import './Body.css'

const Body = (props) => {
    const { id, name, img, description } = props.tests;

    return (

        <div className="col">
            <div className="card shadow-lg">
                <img className="body-img" src={img} alt="..." />
                <div className="card-body">
                    <h5 className={id}><span>{name}</span></h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Body;