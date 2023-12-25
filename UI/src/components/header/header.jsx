import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavListItems, Navbrand } from "./HeaderStyle";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbrand href="/">TopRefunder</Navbrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar">
            <NavListItems href="/">Home</NavListItems>
            <NavListItems href="/login">Login</NavListItems>
            <NavListItems href="/about">About Us</NavListItems>
            <NavListItems href="/contact">Contact Us</NavListItems>
            <form action="" className="search-bar">
              <input
                type="text"
                name="search"
                placeholder="Search our product"
              />
              <button type="submit">Search</button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // another navbar
  );
}
