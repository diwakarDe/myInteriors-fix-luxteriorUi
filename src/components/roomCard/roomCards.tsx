import React, { useEffect } from "react"
import { Card, Col } from "react-bootstrap"
import "./roomCards.css"
import { BsThreeDotsVertical, BsTrash } from "react-icons/bs"
import { Dropdown } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import { LuClipboardEdit } from "react-icons/lu"
import { AiOutlineHeart } from "react-icons/ai"

interface CardProps {
  image: string
  name: string
  dropDownOptions?: {
    function: any
    text: string
  }[]
}

const RoomCard = (props: CardProps) => {
  return (
    <Col>
      <Card className="m-0 position-relative">
        <Card.Body className="p-0">
          <div className="card--content">
            <Card.Img src={props.image} />
          </div>
          <div className="card--meta p-3">
            <h4 className="card--tag">{props.name}</h4>
            {props.dropDownOptions?.length ? (
              <span className="card--tag remove-fav">
                {props.dropDownOptions?.map((option: any) => {
                  return (
                    <Dropdown.Item
                      className="nav-item"
                      onClick={option.function}
                    >
                      {option.text}
                    </Dropdown.Item>
                  )
                })}
              </span>
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RoomCard
