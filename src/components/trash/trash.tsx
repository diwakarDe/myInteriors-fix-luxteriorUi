import React, { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
interface room1Props {}
import "./trash.css"
import trashimage from "../../img/trashimage.png"
import {
  useGetDeletedRoomsQuery,
  useRestoreRoomMutation,
} from "../../services/roomsServices"
import RoomCard from "../roomCard/roomCards"
import { LuClipboardEdit } from "react-icons/lu"
import { AiOutlineHeart } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { AiOutlineReload } from "react-icons/ai"

const Trash = (props: room1Props) => {
  const { data } = useGetDeletedRoomsQuery({})

  useEffect(() => {
    console.log(data?.data)
  }, [data])
  const [submitForm, { isError, error }] = useRestoreRoomMutation({})

  return (
    <>
      <div className="main-wrapper">
        <Container fluid>
          {/* trashheading */}
          <section className="trashhead ">
            <div className="trashheading">
              <h1>Trash</h1>
            </div>
          </section>
          {/* trashimage */}
          {/* trash-para */}
          {/* {data?.data?.length ? (
            data.data.map((room: any) => {
              return <RoomCard
                image={room.generatedImageUrl}
                name={room.roomName}
                key={room._id}
                dropDownOptions={[
                  {
                    function: () => submitForm({ _id: room._id }),
                    text: "Restore Room",
                  },
                ]}
              />
            })
          ) : (
            <>
              <section className="trashimage">
                <div className="dustbin-image">
                  <img src={trashimage} />
                </div>
              </section>
              <section className="trash-para">
                <div className="trashpara">
                  <p>No files in trash now</p>
                </div>
              </section>
            </>
          )} */}

          <Row>
            <Col sm={12}>
              {data?.data?.length ? (
                data.data.map((room: any) => {
                  return (
                    <div className="card">
                      <div className="card-image">
                        <a href="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/ed79a738-603b-11ee-9a2e-02420a000175/gooey.ai%20-%20photo%20Generate%20an%20image%20of%20a%20modern%20d...sense%20of%20sophistication%20and%20creativity%20theme%204k..png">
                          <img
                            src={room.generatedImageUrl}
                            alt="image"
                            style={{ objectFit: "cover" }}
                          />
                        </a>
                      </div>
                      <div className="card-text">
                        <span className="date">4 days ago</span>
                        <h2>{room.roomName}</h2>
                        <p className="mb-0">Lorem ipsum dolor sit </p>
                      </div>
                      <div className="card-stats trash-card-stats d-flex justify-content-center">
                        <div
                          className="stat card-stat-btn"
                          onClick={() => submitForm({ _id: room._id })}
                        >
                          <div className="value">
                            <AiOutlineReload fontSize={22} />
                          </div>
                          <div className="type">Restore</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <>
                  <section className="trashimage">
                    <div className="dustbin-image">
                      <img src={trashimage} />
                    </div>
                  </section>
                  <section className="trash-para">
                    <div className="trashpara">
                      <p>No files in trash now</p>
                    </div>
                  </section>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Trash
