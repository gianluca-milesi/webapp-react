import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul className="d-flex justify-content-center align-items-center gap-4">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contacts</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar