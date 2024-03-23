import Link from "next/link";

export default function NavBar() {
    return (
        <div className="bg-yellow-300 p-0 m-0 flex justify-between border-4 border-solid border-yellow-300">
            <Link className="bg-yellow-200" href="/">Home</Link>
            <h1 className="text-2xl">Defiantly Not IKEA</h1>
            <Link className="bg-yellow-200 " href="/about">About Me</Link>
        </div>
    );
}