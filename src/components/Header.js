import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/LockUp.png";

const Header = () => {
  return (
    <Navbar sticky="top" expand="md">
      <NavbarBrand>
        <img src={Logo} height="40" alt="logo" />
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem className="circular">
          <NavLink className="nav-link" to="/home">
            <i className="fa fa-home fa-lg" /> Home
          </NavLink>
        </NavItem>
        <NavItem className="quarto">
          <NavLink className="nav-link" to="/directory">
            <i className="fa fa-list fa-lg" /> Directory
          </NavLink>
        </NavItem>
        <NavItem className="circular">
          <NavLink className="nav-link" to="/about">
            <i className="fa fa-info fa-lg" /> About
          </NavLink>
        </NavItem>
        <NavItem className="quarto">
          <NavLink className="nav-link" to="/contact">
            <i className="fa fa-address-card fa-lg" /> Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
