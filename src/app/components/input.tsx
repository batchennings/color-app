"use client";

import { useState } from "react";
import Button from "./button";

export default function Input({ placeholder, onButtonClick }) {
    const [inputValue, setInputValue] = useState("")

    const sendValue = () => {
        onButtonClick(inputValue); 
    };
    const handleClick = () => {
        console.log(inputValue);
        sendValue()
        
    };

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        setInputValue(event.target.value)
        console.log(event.target.value);
    };
    return (
        <div className="relative flex flex-1 flex-shrink-0 gap-2">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500 transition" placeholder={placeholder} onChange={handleChange} />
            <Button onClick={handleClick}>Créer</Button>
        </div>
    );
}
