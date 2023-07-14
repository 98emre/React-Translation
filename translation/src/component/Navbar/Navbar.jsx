

import { NavLink } from "react-router-dom"

const Navbar = () => {
    
    return (
        <nav>
            <ul>
                <li> <NavLink to="/">Translate Page</NavLink> </li>
                <li> <NavLink to="/profile">Profile</NavLink> </li>
            </ul>
        </nav>
    )
}

export default Navbar