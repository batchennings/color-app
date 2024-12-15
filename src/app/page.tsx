"use client";

import Input from "./components/input";
import { useState } from "react";
import generate from "@/GenerateColorPalette/src/generate";
import ColorChart from "./components/color-chart";

export default function Home() {
    const [colorValue, setColorValue] = useState("");
    const [palette, definePalette] = useState({});
    const updatePalette = (newColor:string) => {
        setColorValue(newColor);
        const p:object = generate(newColor)
        definePalette(p);        
    };
    return (
      <div className="w-[960px] flex flex-col p-8 mx-auto">
        <div className="font-[family-name:var(--font-geist-sans)]">
            <Input placeholder="Enter a value" onButtonClick={updatePalette}></Input>
        </div>
        {/* <div>Color from input : {colorValue}</div> */}
        {/* <div className="bg-black text-white font-mono p-4 transition">{palette}</div> */}
        <ColorChart data={palette}/>
        </div>
    );
}
