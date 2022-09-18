import React from 'react';

const Card = ({name, email, id}) => { 
    return (

        <div className='bg-light-green dib br5 ma2 grow bw5 shadow-5'>
            <img src={`https://robohash.org/${id}booyakasha?25x25`} alt="Robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;