import React from 'react';

function InputBox(props) {
    return (
        <input type="checkbox" checked={props.check} onChange={props.handleCheck}/>
    );
}

export default InputBox;