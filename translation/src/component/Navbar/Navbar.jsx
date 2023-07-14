

import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

    const {user} = useUser()
    
    return (
        <nav>
            <ul>
                <h1>Translation Page</h1>
            </ul>
            {user && <ul>
                <li> <NavLink to="/">Translate Page</NavLink> </li>
                <li> <NavLink to="/profile">Profile</NavLink> </li>
            </ul>}
        </nav>
    )
}

export default Navbar