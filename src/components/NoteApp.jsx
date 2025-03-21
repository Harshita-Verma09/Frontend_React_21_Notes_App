import { NavLink } from "react-router-dom";


export default function NotesApp() {
    return (
        <div className="flex flex-col items-center">
            <nav className="w-full bg-gray-800 py-3 shadow-md">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <NavLink to="/create" className="text-white hover:text-blue-400 transition duration-300">
                            Create Note
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/read" className="text-white hover:text-blue-400 transition duration-300">
                            Read Notes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/edit/:id" className="text-white hover:text-blue-400 transition duration-300">
                            Edit Note
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/delete/:id" className="text-white hover:text-blue-400 transition duration-300">
                            Delete Note
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className="text-2xl font-bold mt-4 text-white">NotesApp</h1>
        </div>


    );
}
