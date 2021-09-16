import React from 'react';
import {useState, useEffect} from 'react';

const TheInput = () => {
    const [myInput, setMyInput] = useState('напиши');
    const inputHandler = (e) => {
        console.log(e.target.value);
        setMyInput(e.target.value)
    }
    useEffect(() => console.log(myInput),[myInput] ) 
    return (
        <input type = 'text' onChange = {inputHandler} value = {myInput}></input> 
    )
};
export default TheInput;