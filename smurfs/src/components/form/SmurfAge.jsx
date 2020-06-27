import React from 'react';

const SmurfAge = (props) => {
    return (
        <>
            <label htmlFor='age'>
                Age:
                <input
                    id='age'
                    type='number'
                    name='age'
                    value={props.value}
                    onChange={props.input}
                />
            </label>
            <br/>
        </>
    );
};

export default SmurfAge;