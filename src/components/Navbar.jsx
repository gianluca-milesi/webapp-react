import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contacs">Contacts</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar