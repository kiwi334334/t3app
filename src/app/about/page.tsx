"use client";
import { useState } from "react";
import { useBetween } from "use-between";

const sharedstate = () => {
  const [list, changeList] = useState([""]);
  return { list, changeList };
};

const useSharedState = () => useBetween(sharedstate);

export default function AboutPage() {
  const { list, changeList } = useSharedState();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="h-[15%] w-[350px] rounded-xl border-[5px] border-solid border-slate-700 bg-slate-400 p-[5px]">
        <h1 className="text-2xl">Hello, My Name Is Elias</h1>
        <p>
          I Am A 15 year old <span className="line-through">Awesome</span>{" "}
          (Shit) Web Dev
          <br /> Who Loves{" "}
          <button
            onClick={() => {
              changeList([...list, ""]);
            }}
          >
            Magic The Gathering!
          </button>
        </p>
      </div>
    </div>
  );
}
