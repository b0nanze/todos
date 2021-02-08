import React from 'react';

function InputText(props) {
    return (
            <input placeholder="Введите текст..."
                   type="text"
                   value={props.text}
                   onChange={(e) => props.setText(e.target.value)}/>
    );
}

export default InputText;