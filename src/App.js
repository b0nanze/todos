import React from 'react';
import {useState} from "react";

function App(props) {
    const [todos, setTodos] = useState([
        {
            text: "Сделать работу",
            id: 1
        },
        {
            text: "Посмотреть телевизор",
            id: 2
        },
        {
            text: "Сдать работу",
            id: 3
        }
    ]);
    const deleteTodo = (checkIn) => {
        const filter = todos.filter((e, index) => {
            return index !== checkIn;
        });
        setTodos(filter)
    }

    const newTodos = todos.map((item, index) => {
        return(
            <div>
                <div className="work">
                    <div>{item.text}</div>
                    <input type="checkbox"/>
                    <button onClick={() => deleteTodo(index)}>❌</button>
                </div>
            </div>
        )
        });

    const [text, setText] = useState("");

    const addTodos = (item, index) => {
        setTodos([{
            text:text,
            id: index
        }, ...todos])
        setText("");

    }
    const handleChange = (e) => {}

    return (
        <div className="app">
            <div className="header">
                <h1>Список Дел</h1>
            </div>
            <hr />
            <div className="form">
            <input placeholder="Введите текст..." type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="checkbox"/>
            <button onClick={addTodos}>Добавить</button>
            </div>
            <div>{newTodos}</div>
        </div>
    );
}

export default App;
