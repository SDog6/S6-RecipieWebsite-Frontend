import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
} from "reactstrap";
import axios from "axios";
// import "../Css/SideBar.scss";
import '../css/navigationBar.scss'

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      token: null,
    };
  }

  componentDidMount() {
    var token = localStorage.getItem("token");
    if (token !== "undefined") {
      this.setState({ token: token });
    }
    // var tok = localStorage.getItem("token");
    // if (tok != null) {
    //   var translator = jwtDecode(tok);
    //   this.setState({ role: translator.role });
    // }
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <Nav className="ml-auto" navbar>
          <span className="logo">Recipie</span>
              <NavItem>
                <NavLink href="/">Dashboard</NavLink>
              </NavItem>
            {this.state.token != null ? (
              <NavItem>
                <NavLink href="/CreateRecipie">Create Recipie</NavLink>
              </NavItem>
            ): (
              ""
            )}

            {this.state.token === null ? (
              <>
              <div className="NavButtons">
                <NavItem>
                  <NavLink href="/Login">Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Register">Sign Up</NavLink>
                </NavItem>
                </div>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/Logout">Sign Out</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;