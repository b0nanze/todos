import React from 'react';
import InputText from "./InputText";
import InputBox from "./InputBox";
import ButtonTask from "./ButtonTask";

function Form(props) {
    return (
        <div className="form">
            <InputText text={props.text} setText={props.setText}/>
            <InputBox check={props.check} handleCheck={props.handleCheck}/>
            <ButtonTask addTodos={props.addTodos}/>
        </div>
    );
}

export default Form;