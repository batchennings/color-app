"use client";

import { useState } from "react";
import Button from "./button";

export interface InputProps{
    placeholder: string;
    onButtonClick: string;
}

export default function Input({ placeholder, onButtonClick }: InputProps) {
    const [inputValue, setInputValue] = useState("")

    const sendValue = () => {
        onButtonClick(inputValue); 
    };
    const handleClick = () => {
        // console.log(inputValue);
        sendValue()
        
    };

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        setInputValue(event.target.value)
        console.log(event.target.value);
    };
    return (
        <div className="flex flex-row gap-2 mx-auto w-32">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input className="peer block rounded-md border w-32 border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500 transition" placeholder={placeholder} onChange={handleChange} />
            <Button onClick={handleClick} intent={"primary"} disabled={false}>Créer</Button>
        </div>
    );
}
