"use client"
import { useState } from "react";
import NavBar from "~/components/navbar";

interface signinproptypes {
  bool: boolean,
  username: string,
  changeusername: any
  togglesigninbool: any
};

export default function Aboutpage() {
  const [signedinbool, togglesigninbool] = useState(false);
  const [username, changeusername] = useState("");
  return (
    <div className="w-screen h-screen bg-blue-100 animate-gradient-x bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500">
      <NavBar />
      <div className="">
        <Signin bool={signedinbool} username={username} changeusername={changeusername} togglesigninbool={togglesigninbool} />
      </div>
    </div>
  );
};

function Signin({ bool, username, changeusername, togglesigninbool }: signinproptypes) {
  if (bool) {
    return (
      <>
        <div className="flex justify-center">
          <h1>hello {username}</h1>
        </div>
        <SettingsPage togglesigninbool={togglesigninbool} />
      </>
    );
  } else {
    return (
      <div className="flex justify-center">
        <h1>Please Login </h1><br />
        <input onChange={(e) => { changeusername(e.target.value) }} placeholder="Username" />
        <button onClick={() => { togglesigninbool(true) }}>Sign In</button>
      </div>
    );
  };
};

function SettingsPage({ togglesigninbool }: any) {
  function logout(togglesignbool: Function) {
    if (window.confirm("Do you really want to logout?")) {
      togglesignbool(false)
    };
  };
  return (
    <div className="absolute top-[5%] left-0 h-full w-[10%] bg-slate-400">
      <h1>Welcome to the settings page</h1>
      <button onClick={() => { logout(togglesigninbool) }} >
        Logout
      </button>
    </div>
  );
};
