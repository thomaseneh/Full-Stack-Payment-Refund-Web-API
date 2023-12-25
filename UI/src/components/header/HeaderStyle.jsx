import styled from "styled-components";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavLink from "react-bootstrap/esm/NavLink";

export const Navbrand = styled(NavbarBrand)`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bolder;

  &:hover {
    background-color: #2980b9;
    color: black;
  }
`;

export const NavListItems = styled(NavLink)`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  margin-right: 15px;
  // display: flex;
  // align-items: center;

  &:hover {
    background-color: #2980b9;
    color: black;
  }
`;
