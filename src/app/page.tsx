"use client"
import { useState } from "react";
import { useBetween } from "use-between";
import NavBar from "~/components/navbar";

const useFormState = () => {
  const [cart, addtocart] = useState(["THIS IS THE CART", "WHEN YOU ADD IT WILL SHOW HERE"])
  const [cost, addtocost] = useState(0)
  return {
    cart,
    cost,
    addtocart,
    addtocost
  };
};

const useSharedFormState = () => useBetween(useFormState);

export default function HomePage() {
  const { cart, cost } = useSharedFormState();
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div className="bg-stone-300 w-[30%]  right-0 absolute h-[100%]">
        <div className="h-[100%] w-[100%] overflow-scroll scrollbar-hide  p-10">
          <h1>SHELVES</h1>
          <Iteminstore type={"Shelf"} title={"NIKEA IShelves Plus:175"} price={175} imgURL="https://media.istockphoto.com/id/509684973/photo/shelves.jpg?b=1&s=612x612&w=0&k=20&c=LNgmjLDJe42des8X72JTrNAOzwmu5iE_3jfj4qGydOk=" /><br />
          <Iteminstore type={"Shelf"} title={"NIKEA Ishelf:50"} price={50} imgURL={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEZfQGnIE2Ql1Y_MW0abCHFKF4TaaOsEum9Lfe45cBx8YEokj4bUlcShdMbg4-r9oOAmOgmOOx4FtJz4ii7rlahprrZztfmID0QOPtkuTWcFfFZEZvninIAMX7Bqic9WI6WA9rwApZOw&usqp=CAc"} /><br />
        </div><br />
      </div>
      <div className="fixed right-[30%] h-full w-[40%] overflow-scroll">
        <div className="overflow-scroll h-full w-full bg-stone-300 scrollbar-hide p-10">
          <h1>COUCHES</h1>
          <Iteminstore type={"Couch"} title={"NIKEA Auto Fold:400"} price={400} imgURL={"https://www.shutterstock.com/image-photo/sofa-260nw-277827251.jpg"} /><br />
          <Iteminstore type={"Couch"} title={"NIKEA Auto Fold:300"} price={300} imgURL={"/couch2.png"} /><br />
          <h1>TABLES</h1>
          <Iteminstore type={"Table"} title={"NIKEA Basic Table:250"} price={250} imgURL={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dinner_table_side_pine_wood_large_table.png/1200px-Dinner_table_side_pine_wood_large_table.png"} /><br />
          <Iteminstore type={"Table"} title={"NIKEA Round Table:150"} price={150} imgURL={"/rtable.png"} /><br />
        </div>
      </div>
      <div className="w-[30%] bg-slate-400 h-screen">
        <h1 className="text-4xl bg-slate-400 border-b-4 border-black">CART</h1>
        {cart.map((item) => {
          return (
            <div>
              <h1 key={crypto.randomUUID()}>— {item}</h1>
            </div>
          );
        })}
        <h1 className="bottom-0 absolute ">the final price is {cost}</h1>
      </div>
    </div>
  );
}

function Iteminstore({ imgURL, price, title, type }) {
  const { cart, cost, addtocost, addtocart } = useSharedFormState();
  const cartcopy = cart
  return (
    <>
      <div className="w-[100%] border-black border-4 bg-white ">
        <h1><p id={title}>{title}</p> {type}</h1>
        <img className="w-[100%]" src={imgURL} />
        <p>To Add To Cart Click The Button Bellow<br /> PRICE:${price}</p>
        <button className="border-3 border-solid border-black" id="1btn" onClick={() => {addtocart([...cartcopy, title]);addtocost(cost + price) }}>{title}</button>
      </div>
    </>
  )
}