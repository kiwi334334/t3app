import Link from "next/link";

export default function NavBar() {
    return (
        <div className="bg-blue-300  flex justify-between border-4 border-solid border-blue-300">
            <Link className="bg-yellow-200 rounded-md" href="/">Home</Link>
            <h1 className="text-2xl">Defiantly Not IKEA</h1>
            <Link className="bg-yellow-200 rounded-md" href="/about">About Me</Link>
        </div>
    );
}