"use client"
import { useState } from "react";
import { useBetween } from "use-between";
import NavBar from "~/components/navbar";

const useFormState = () => {
  const [cart, addtocart] = useState("")
  const [cost, addtocost] = useState(0)
  return {
    cart,
    addtocart,
    cost,
    addtocost
  };
};

const useSharedFormState = () => useBetween(useFormState);

export default function HomePage() {
  const { cart, addtocart, cost } = useSharedFormState();
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div className="bg-stone-300 w-[30%]  right-0 absolute h-full p-10">
        <div className="h-[100%] w-[100%] overflow-scroll">
          <h1>SHELVES</h1>
          <ul>
            <Iteminstore type={"Shelf"} title={"— NIKEA IShelves Plus —"} price={175} imgURL="https://media.istockphoto.com/id/509684973/photo/shelves.jpg?b=1&s=612x612&w=0&k=20&c=LNgmjLDJe42des8X72JTrNAOzwmu5iE_3jfj4qGydOk=" /><br />
            <Iteminstore type={"Shelf"} title={"— NIKEA Ishelf —"} price={50} imgURL={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEZfQGnIE2Ql1Y_MW0abCHFKF4TaaOsEum9Lfe45cBx8YEokj4bUlcShdMbg4-r9oOAmOgmOOx4FtJz4ii7rlahprrZztfmID0QOPtkuTWcFfFZEZvninIAMX7Bqic9WI6WA9rwApZOw&usqp=CAc"} /><br />
          </ul>
        </div><br />
      </div>
      <div className="fixed right-[30%] h-full w-[40%] overflow-scroll">
        <div className="overflow-scroll h-full w-full bg-stone-300  p-10">
          <h1>COUCHES</h1>
          <Iteminstore type={"couch"} title={"— NIKEA Auto Fold"} price={400} imgURL={"https://www.shutterstock.com/image-photo/sofa-260nw-277827251.jpg"} /><br/>
          <Iteminstore type={"couch"} title={"— NIKEA Auto Fold"} price={400} imgURL={"https://www.shutterstock.com/image-photo/sofa-260nw-277827251.jpg"} /><br/>
        </div>
      </div>
      <div className="w-[30%] bg-slate-400 h-screen">
        <h1 className="text-4xl bg-slate-400 border-b-4 border-black">CART</h1>

        {cart}
        <h1 className="bottom-0 absolute ">the final price is {cost}</h1>
      </div>
    </div>
  );
}

function Iteminstore({ imgURL, price, title, type }) {
  const { cart, addtocart, cost, addtocost } = useSharedFormState();
  return (
    <>
      <div className="w-[100%] border-black border-4 bg-white ">
        <h1>{title} {type}</h1>
        <img className="w-[100%]" src={imgURL} />
        <p>To Add To Cart Click The Button Bellow<br /> PRICE:${price}</p>
        <button className="border-3 border-solid border-black" id="Shelf1-btn" onClick={() => { addtocart(cart + document.getElementById("Shelf1-btn")?.innerText); addtocost(cost + price) }}>{title}</button>
      </div>
    </>
  )
}