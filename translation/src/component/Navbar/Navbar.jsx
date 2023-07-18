

import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

    const {user} = useUser()
    
    return (
        <>
            <nav>
            {user && <ul>
                <li> <NavLink to="/profile">Profile</NavLink> </li>
                <li> <NavLink to="/translate">Translate</NavLink> </li>
             </ul>}
            </nav>
        </>
    )
}

export default Navbar