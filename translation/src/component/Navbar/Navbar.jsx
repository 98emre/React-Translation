import { useUser } from "../../context/UserContext";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Navbar = () => {
  const { user } = useUser();

  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        {user && (
          <div class="container">
            <ul className="navItems">
              <Dropdown>
            
                    <Dropdown.Toggle as={NavLink} className="nav-link navItem">
                        <h5>
                            <img src="Logo-Hello.png" width={100} alt="Logo" />
                            <i className="fas fa-caret-square-down"/>
                        </h5>
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">View Profile</Dropdown.Item>
                        <Dropdown.Item href="/translate">Translate</Dropdown.Item>
                    </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
