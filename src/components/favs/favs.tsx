import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./favs.css"
import { useNavigate } from "react-router-dom"
import RoomCard from "../roomCard/roomCards"
import {
  useAddToFavRoomMutation,
  useGetFavRoomsQuery,
} from "../../services/roomsServices"

const Favourites = () => {
  const navigate = useNavigate()

  const { data: roomsList } = useGetFavRoomsQuery({})

  const [addTofavForm, { data: favRoomData }] = useAddToFavRoomMutation({})

  return (
    <Container fluid>
      <section className="dashboard main-wrapper px-4">
        <Row>
          <Col>
            <div className="create-cardroom">
              <div className="roomcard-heading">
                <h1>Favourite Rooms</h1>
              </div>
              <br />
              <div className="room-cards">
                <Row>
                  {!!roomsList?.data ? (
                    roomsList?.data?.map((room: any) => (
                      <RoomCard
                        image={room.generatedImageUrl}
                        name={room.roomName}
                        key={room._id}
                        dropDownOptions={[
                          {
                            function: () => addTofavForm({ _id: room._id }),
                            text: "Remove from Favourites",
                          },
                        ]}
                      />
                    ))
                  ) : (
                    <section className="trash-para">
                      <div className="trashpara">
                        <p>No rooms found in Favourite Rooms</p>
                      </div>
                    </section>
                  )}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default Favourites
