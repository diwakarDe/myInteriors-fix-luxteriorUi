import React from "react"
import { Container } from "react-bootstrap"
import "./roominterior.css"
import headerlogo from "../../img/Luxterior.png"
import headerimage from "../../img/header-image.png"
import { Outlet } from "react-router-dom"

interface data {
  heading?: string
  subHeading?: string
}

const RoomInterior = ({ heading, subHeading }: data) => {
  const generations = localStorage.getItem("GENERATIONS")

  return (
    <>
      <section className="generate-room">
        <Container>
          {/* bars-icon */}
          {/* countedroom-section */}
          <section className="counted-section">
            <div className="counted">
              <h1>728,000 rooms generated & counting</h1>
            </div>
          </section>
          {/* dreamroom-heading */}
          <section className="dreamroom-title">
            <div className="dreamroom-heading">
              <h1>
                {heading || "Generate Your"}{" "}
                <span className="dreamword">Dream</span> Room
              </h1>
              <p>{subHeading || `You have ${generations} generations only.`}</p>
            </div>
          </section>
          <Outlet />
        </Container>
      </section>
    </>
  )
}

export default RoomInterior
