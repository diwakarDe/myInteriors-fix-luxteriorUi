import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import originalRoom from "../../img/image-1.png"
import generatedRoom from "../../img/image-2.png"

interface roomComparisonProps {}

const RoomComparision = (props: roomComparisonProps) => {
  return (
    <>
        <Container>
      <Row>
        <Col md="6">
          <div className="original-room">
            <div className="room-heading">
              <p>Original Room</p>
            </div>
            <div className="room-image">
              <img src={originalRoom} alt="original room" />
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="generated-room">
            <div className="room-heading">
              <p>Generated Room</p>
            </div>
            <div className="room-image">
              <img src={generatedRoom} alt="generated room" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default RoomComparision
