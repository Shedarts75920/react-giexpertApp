import  PropTypes from 'prop-types';
import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange =(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats =>[inputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        <>
        <form onSubmit={handleSubmmit}>
        <input type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}
