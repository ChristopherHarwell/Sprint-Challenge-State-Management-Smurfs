import React from 'react';

const SmurfHeight = (props) => {
    return (
        <>
            <label htmlFor='height'>
                Height:
                <input
                    id='height'
                    type='number'
                    name='height'
                    value={props.value}
                    onChange={props.input}
                />
            </label>
            <br/>
        </>
    );
};

export default SmurfHeight;