"use client";
import { useState } from "react";
import { useBetween } from "use-between";
import NavBar from "~/components/navbar";

interface itemtypes {
  imgURL: string;
  price: number;
  title: string;
  type: string;
}

const useFormState = () => {
  const [cart, addtocart] = useState([
    "THIS IS THE CART",
    "WHEN YOU ADD IT WILL SHOW HERE",
  ]);
  const [cost, addtocost] = useState(0);
  const [allamounts, addtoallamounts] = useState(["", ""]);
  return {
    cart,
    cost,
    allamounts,
    addtocart,
    addtocost,
    addtoallamounts,
  };
};

const useSharedFormState = () => useBetween(useFormState);

export default function HomePage() {
  const { cart, cost, allamounts, addtoallamounts, addtocart, addtocost } =
    useSharedFormState();
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="absolute right-0  h-[100%] w-[30%] bg-blue-300">
        <div className="h-[100%] w-[100%] overflow-scroll p-10  scrollbar-hide">
          <h1>SHELVES</h1>
          <Iteminstore
            type={"Shelf"}
            title={"NIKEA IShelves Plus"}
            price={175}
            imgURL={
              "https://static.vecteezy.com/system/resources/previews/010/135/574/original/collection-of-wooden-shelves-on-an-isolated-white-background-objects-with-clipping-paths-for-design-work-png.png"
            }
          />
          <br />
          <Iteminstore
            type={"Shelf"}
            title={"NIKEA Ishelf"}
            price={50}
            imgURL={
              "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1996003/basic-wood-wall-shelf-clipart-md.png"
            }
          />
          <br />
        </div>
        <br />
      </div>
      <div className="fixed right-[30%] h-full w-[40%] overflow-scroll">
        <div className="h-full w-full overflow-scroll bg-blue-300 p-10 scrollbar-hide">
          <h1>COUCHES</h1>
          <Iteminstore
            type={"Couch"}
            title={"NIKEA Auto Fold 300"}
            price={400}
            imgURL={
              "https://static.vecteezy.com/system/resources/previews/022/219/389/original/white-sofa-isolated-on-a-transparent-background-png.png"
            }
          />
          <br />
          <Iteminstore
            type={"Couch"}
            title={"NIKEA Auto Fold"}
            price={300}
            imgURL={"/couch2.png"}
          />
          <br />
          <h1>TABLES</h1>
          <Iteminstore
            type={"Table"}
            title={"NIKEA Basic Table"}
            price={250}
            imgURL={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dinner_table_side_pine_wood_large_table.png/1200px-Dinner_table_side_pine_wood_large_table.png"
            }
          />
          <br />
          <Iteminstore
            type={"Table"}
            title={"NIKEA Round Table"}
            price={150}
            imgURL={"/rtable.png"}
          />
          <br />
        </div>
      </div>
      <div className="h-screen w-[30%] border-[4px] border-solid border-black bg-blue-400">
        <h1 className="border-b-4 border-black bg-blue-400 text-4xl">CART</h1>
        {cart.map((item, i) => {
          return (
            <h1 key={i}>
              {i}:— {item}:{allamounts[i]}
            </h1>
          );
        })}
        <div className="absolute bottom-0 ">
          <h1>the final price is {cost}</h1>
          <button
            onClick={() => {
              addtoallamounts([]);
              addtocart([]);
              addtocost(0);
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function Iteminstore({ imgURL, price, title, type }: itemtypes) {
  const { cart, cost, addtocost, addtocart, allamounts, addtoallamounts } =
    useSharedFormState();
  const [amount, setamount] = useState(1);
  const copyallamounts = allamounts;
  const cartcopy = cart;
  return (
    <>
      <div className="w-[100%] rounded-xl border-4 border-black bg-slate-300">
        <h1>
          <p id={title}>{title}</p> {type}
        </h1>
        <img className="w-[100%]" src={imgURL} />
        <div className="flex justify-between">
          <button
            onClick={() => {
              setamount(amount + 1);
            }}
          >
            +1
          </button>
          <h1>{amount}</h1>
          <button
            onClick={() => {
              setamount(amount - 1);
              if (amount <= 0) {
                setamount(0);
              }
            }}
          >
            -1
          </button>
        </div>
        <p>
          To Add To Cart Click The Button Bellow
          <br /> PRICE:${price * amount}
        </p>
        <button
          className="w-full rounded-b-md border-[2px] border-solid border-black border-b-transparent"
          id="1btn"
          onClick={() => {
            addtocart([...cartcopy, title]);
            addtocost(cost + price * amount);
            addtoallamounts([...copyallamounts, `${amount}`]);
          }}
        >
          Add {amount} {title}s to cart
        </button>
      </div>
    </>
  );
}
