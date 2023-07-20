import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Navbar = () => {
  const { user } = useUser();
  const [dropDownStatus, setDropDownStatus] = useState(false)

  const handleDropdownToggle  = () => {
    setDropDownStatus(!dropDownStatus);
  };

  const handleDropdownMenuClose = () => {
    setDropDownStatus(false);
  };

  return (
    <>
      {user && (
        <>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container">
              <ul className="navItems">
                <Dropdown 
                    show={dropDownStatus}
                    onToggle={handleDropdownToggle} 
                    onClose={handleDropdownMenuClose}>
                  
                  <Dropdown.Toggle as={NavLink} className="nav-link navItem">
                    <h3 className="navBarIcon">
                    <i className="fa fa-user navBarIcon" />
                      <i
                        className={
                          dropDownStatus
                            ? "fa fa-chevron-circle-up"
                            : "fa fa-chevron-circle-down"
                        }
                      />
                      
                      <img
                        src="Logo-Hello.png"
                        width={100}
                        alt="Logo"
                        style={{ opacity: dropDownStatus ? 0.7 : 1 }}
                      />
                    </h3>
        
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">View Profile</Dropdown.Item>
                    <Dropdown.Item href="/translate">Translate</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
              <h1 className="navBarTitle">Lost In Translation</h1>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
