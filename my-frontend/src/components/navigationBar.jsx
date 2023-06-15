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
import "../Css/SideBar.scss";

class navigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      token: null,
    };
  }

  componentDidMount() {
    this.setState({ token: localStorage.getItem("token")});
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
                <NavLink href="/ShowAllRecipies">Dashboard</NavLink>
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
                  <NavLink href="/SignIn">Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/SignUp">Sign Up</NavLink>
                </NavItem>
                </div>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/SignOut">Sign Out</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default navigationBar;