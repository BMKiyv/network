import React from 'react';
import { useState, useEffect } from 'react';

const TheInput = () => {
    const [myInput, setMyInput] = useState('');
    const inputHandler = (e) => {
        let target = e.target.value === '' ? '' : e.target.value;
        console.log(target);
        setMyInput(target)
    }
    useEffect(() => console.log(myInput), [myInput])
    return (
        <>
            <input type='text' style={{ 'width': 200, 'height': 30 }} onChange={inputHandler} value={myInput}></input>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.7062280782166!2d30.66448891515452!3d50.44657239552625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daccd6e20909%3A0xe3599ceb14951d74!2z0LLRg9C70LjRhtGPINCf0LDRgNC-0LLQvtC30L3QsCwgNywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1636720400306!5m2!1suk!2sua" width="800" height="300" style={{ "border": "1px solid red", "borderRadius": 15 }} title='map' allowFullScreen="" loading="lazy"></iframe>
        </>
    )
};
export default TheInput;