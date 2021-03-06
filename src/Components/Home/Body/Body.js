import React from 'react';
import './Body.css'

const Body = (props) => {
    // By Destructuring
    const { id, name, img, description, price } = props.tests;

    return (

        <div className="col">
            <div className="card shadow-lg">
                <img className="body-img" src={img} alt="img" />
                <div className="card-body">
                    <h5 className={id}><span>{name}</span></h5><h6>{price}</h6>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Body;