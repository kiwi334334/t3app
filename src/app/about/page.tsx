"use client"
import { useState } from "react";
import { useBetween } from "use-between";
import NavBar from "~/components/navbar";

const sharedstate = () => {
    const [value, setValue] = useState('Type Name Here!');
    return {
        value,
        setValue
    }
}

const mergedformstate = () => useBetween(sharedstate);

let signedin = false;
export default function Aboutpage() {
    return (
        <div className="w-screen h-screen">
            <NavBar />
            <div className="flex justify-center">
                <Signin />
            </div>
        </div>
    )
}

function Signin() {
    const { value, setValue } = mergedformstate();
    const handleChange = (e) => setValue(e.target.value);
    const flip = () => {signedin = true};
    if (signedin) {
        return (
            <>
                <h1>Hello {value}, </h1><br/>
                <h2>My Name is Elias</h2>

            </>
        )
    } else {
        return (
            <div className="border-black border-4">
                <input className="border-black border-b-4" value={value} onChange={handleChange}/>
                <br />
                <button className="w-full" onClick={flip}>Sign in</button>
            </div>
        )
    }
}