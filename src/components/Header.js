// modules
import React from "react";
import { Link } from "react-router-dom";

import SearchBox from "./SearchBox";
// style
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  console.log(userLogin);
  let userInfo = null;
  // const { userInfo } = userLogin;
  try {
    userInfo = userLogin.userInfo;
    if (userInfo.length === 0) {
      userInfo = null;
    }
  } catch (error) {
    console.log("error");
  }
  const dispatch = useDispatch();
  const logoutHandler = () => {
    // console.log("logout successful");
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Link to="/">
            <Navbar.Brand>BrainyBeam Shop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            <Nav className="ms-auto ml-2">
              <Link to="/cart">
                <Navbar.Brand>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Navbar.Brand>
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item>
                    <Link to="/profile">Profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login">
                  <Navbar.Brand>
                    <i className="fas fa-user"></i> Login
                  </Navbar.Brand>
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenue">
                  <NavDropdown.Item>
                    <Link to="/admin/userlist">Users</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/admin/productlist">Products</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/admin/orderlist">Orders</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
