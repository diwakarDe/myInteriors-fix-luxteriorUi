import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import HomeNavbar from "../navbars/navbar"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import isAuthenticated from "../../common/isAuthenticated"
import "../../components/mainWrapper/HeaderNav.css"
import SideBar from "../sidebar/sidebar"

const MainWrapper = () => {
  const [authenticated, setAuthenticated] = useState(false)

  const location = useLocation()
  useEffect(() => {
    setAuthenticated(!!isAuthenticated())
  }, [isAuthenticated()])

  return (
    <>
      <Container fluid className="px-0">
        <Row className="mx-0">
          <Col className="px-0">
            {!(authenticated && location.pathname.includes("dash")) ? (
              <header className="header">
                <HomeNavbar />
              </header>
            ) : null}
          </Col>
        </Row>
        <div>
          {authenticated && location.pathname.includes("dash") ? (
            <div className="sidebar-wrapper">
              <SideBar />
            </div>
          ) : null}
          <div
            style={{
              padding: 0,
              background: "rgba(0 0 0 / 13%)",
              fontFamily: "Exo 2",
            }}
          >
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  )
}

export default MainWrapper
