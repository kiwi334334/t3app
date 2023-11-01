import NavBar from "~/components/navbar";

export default function Aboutpage() {
    return (
        <div className="w-screen h-screen bg-blue-100 animate-gradient-x bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500">
            <NavBar />
            <div className="flex justify-center align-middle">
                <h1>Hello</h1>
            </div>
        </div>
    )
}