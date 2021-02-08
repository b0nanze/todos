import React from 'react';
import {useState} from "react";
import Header from "./Header";
import Form from "./Form";
import Task from "./Task";
import Reset from "./Reset";

function App() {
    const [todos, setTodos] = useState([
        {
            text: "Сделать работу",
            done: false
        },
        {
            text: "Посмотреть телевизор",
            done: false
        },
        {
            text: "Сдать работу",
            done: false
        }
    ]);
    const [check, setCheck] = useState(false)
    const [text, setText] = useState("");

    const deleteTodo = (checkIn) => {
        const filter = todos.filter((e, index) => {
            return index !== checkIn;
        });
        setTodos(filter)
    }

    const handleCheck = () => {
        setCheck(!check)
    }

    const handleClick = (i) => {
        const newTodos = todos.map((item,index) => {
            if (i === index) return {
                ...item,
                done: !item.done
            }

            return item
        })
        setTodos(newTodos)
    }

    const resetTodos =() => {
    setTodos([<div className="block">1</div>])
    }

    const newTodos = todos.map((item, index) => {
        return(
            <div key={index}>
                <div className="work">
                    <div>{item.text}</div>
                    <input type="checkbox"
                           checked={item.done}
                           onChange={() => handleClick(index)} />
                    <button onClick={() => deleteTodo(index)}>❌</button>
                </div>
            </div>
        )
    });

    const addTodos = () => {
        setTodos([{
            text: text,
            done: check
        }, ...todos])
        setText("");
    }

    return (
        <div key={9991} className="app">
            <Header />
            <Form text={text} setText={setText} addTodos={addTodos} handleCheck={handleCheck} />
            <Task newTodos={newTodos}/>
            <Reset reset={resetTodos}/>
        </div>
    );
}

export default App;
