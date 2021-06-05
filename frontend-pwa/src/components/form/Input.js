import React from 'react'

const Input = ({ name, type, required, value, onChange, placeholder, className }) => {
    return (
        <div className="mt-5">
            <input 
                name={name} 
                value={value} 
                onChange={onChange}
                placeholder={placeholder}
                className={`border-b-2 border-orange ${className && className} focus:outline-none p-2 bg-transparent block w-max-full`} 
                id={name} 
                type={type ? type : 'text'} 
                required={required ? true : false} 
            /> 
            <div className={`transform scale-x-0 focused-sibling:scale-x-100 focused-sibling:origin-right border-b-2 relative border-orange duration-200 ease-in-out ${className && className}`} style={{top: '-2px'}}></div>
        </div>
    )
}

export default Input
