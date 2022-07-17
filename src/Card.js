import React from 'react';
import './card.css'

const Card=(props)=>{
    return(
        <div className='container'>
            <div className='card'>
                <img alt="Robots" src={`https://robohash.org/tak${props.id}?100x100`} />
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;