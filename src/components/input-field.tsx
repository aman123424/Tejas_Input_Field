import React from 'react';
import './input-field.css'


type InputFieldProps ={
    type:string
    placeholder:string 
};

const InputField:React.FC<InputFieldProps>=({type,placeholder})=>{
    return(
        <div className="input-box">
            <input type={type}
            placeholder={placeholder}/>
        </div>
    )
}
export default InputField;