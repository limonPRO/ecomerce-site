import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <p className=" bg-black text-white p-4">
            <Link to='/'>Home</Link>
            </p>
        </div>
    )
}
