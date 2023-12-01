import React, { useState } from "react"
import logo from "../../img/Luxterior.png"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./navbar.css"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import Signin from "../signin"
import isAuthenticated from "../../common/isAuthenticated"
import { AUTH_TOKEN } from "../../constants"

interface navbarProps { }

const TopNavbar = (props: navbarProps) => {
  const navigate = useNavigate()

  const [signInModal, setSignInModal] = useState<boolean>(false)

  return (
    <div>
      {/* header-section */}
      <Navbar collapseOnSelect expand="lg" className="nav-link">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="interior" onClick={() => navigate("/")} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="interior-navbar-nav" />
          <Navbar.Collapse id="interior-navbar-nav">
            <Nav className="mx-auto">
              {isAuthenticated() ? (
                <>
                  <Nav.Link onClick={() => navigate("/dash/main")}>
                    Dashboard
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link className="head-link" onClick={() => navigate("/")}>
                  Home
                </Nav.Link>
              )}
              {/* <Nav.Link>About</Nav.Link>
              <Nav.Link>Features</Nav.Link>
              <Nav.Link>Calculator</Nav.Link> */}
            </Nav>
            <Nav>
              {!isAuthenticated() ? (
                <>
                  <Nav.Link onClick={() => setSignInModal(true)}>
                    Signin
                  </Nav.Link>
                  <Button
                    onClick={() => navigate("/signup")}
                    className="signup-button"
                    id="signup-button"
                  >
                    Sign up
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => {
                    navigate("/")
                    localStorage.removeItem(AUTH_TOKEN)
                  }}
                  className="signup-button"
                  id="signup-button"
                >
                  Sign out
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Signin show={signInModal} onHide={() => setSignInModal(false)} />
    </div>
  )
}

export default TopNavbar
