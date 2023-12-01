import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap"
import "./dashboard.css"
import { useNavigate } from "react-router-dom"
import {
  useAddToFavRoomMutation,
  useDeleteRoomMutation,
  useGetRoomsQuery,
  useUpdateRoomNameMutation,
} from "../../services/roomsServices"
import { toast } from "react-toastify"
import RoomCard from "../roomCard/roomCards"
import { LuClipboardEdit } from "react-icons/lu"
import { AiOutlineHeart, AiOutlinePlusCircle } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"

const Dashboard = () => {
  const navigate = useNavigate()

  const { data: roomsList } = useGetRoomsQuery({})

  console.log(roomsList, "roomsList")

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [submitForm, { isError, error, data: deleteRoomData }] =
    useDeleteRoomMutation({})

  const [updateNameForm, { data: updateRoomsData }] = useUpdateRoomNameMutation(
    {},
  )

  const [addTofavForm, { data: favRoomData }] = useAddToFavRoomMutation({})

  useEffect(() => {}, [roomsList])

  useEffect(() => {
    if (deleteRoomData?.message) {
      toast.success(deleteRoomData?.message, { toastId: 1 })
    }
  }, [deleteRoomData])

  useEffect(() => {
    if (updateRoomsData?.message) {
      toast.success(updateRoomsData?.message, { toastId: 1 })
    }
  }, [updateRoomsData])

  useEffect(() => {
    if (favRoomData?.message) {
      toast.success(favRoomData?.message, { toastId: 1 })
    }
  }, [favRoomData])

  const [updateId, setUpdateId] = useState("")
  const [updatedName, setUpdatedName] = useState("")

  return (
    <>
      <Modal show={show} className="modal-custom" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rebame Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e: any) => {
              setUpdatedName(e.target.value)
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updateNameForm({
                _id: updateId,
                newRoomName: updatedName,
              })
              handleClose()
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid>
        <section className="dashboard main-wrapper px-4">
          <Row className="">
            <Col>
              <div className="create-cardroom d-lg-flex justify-content-between align-items-center mb-4">
                <div className="roomcard-heading mb-lg-0 mb-3">
                  <h1>
                    Generated Rooms - {localStorage.getItem("GENERATIONS")}{" "}
                    Generations Left
                  </h1>{" "}
                </div>
                <button
                  className="btn btnboxicon box-with-border"
                  onClick={() => navigate("/rooms/room1")}
                >
                  <span className="iconboxadd me-2">
                    {" "}
                    <AiOutlinePlusCircle fontSize={26} />
                  </span>
                  Generate a new room
                </button>

                <br />
                {/* <div className="room-cards">
                  <Row>
                    {roomsList?.data?.map((room: any) => (
                      <RoomCard
                        image={room.generatedImageUrl}
                        name={room.roomName}
                        key={room._id}
                        dropDownOptions={[
                          {
                            function: () => {
                              setUpdateId(room._id)
                              handleShow()
                            },
                            text: "Rename Room",
                          },
                          {
                            function: () => addTofavForm({ _id: room._id }),
                            text: "Add To Favourites",
                          },
                          {
                            function: () => submitForm({ _id: room._id }),
                            text: "Delete Room",
                          },
                        ]}
                      />
                    ))}
                  </Row>
                </div> */}
              </div>
            </Col>
          </Row>
          <Row>
            {roomsList?.data?.map((room: any) => (
              <Col xl={3} sm={4} className="mb-4">
                <div className="card m-0 position-relative w-100">
                  <div className="card-image">
                    <a
                      className="d-block w-100"
                      href="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/ed79a738-603b-11ee-9a2e-02420a000175/gooey.ai%20-%20photo%20Generate%20an%20image%20of%20a%20modern%20d...sense%20of%20sophistication%20and%20creativity%20theme%204k..png"
                    >
                      <img
                        src={room.generatedImageUrl}
                        alt="image"
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </div>
                  <div className="card-text p-3 m-0">
                    <span className="date">5 days ago</span>
                    <h4>{room.roomTheme}</h4>
                    {/* <p className="mb-0">Lorem ipsum dolor sit </p> */}
                  </div>
                  <div className="card-stats">
                    <div
                      className="stat card-stat-btn"
                      onClick={() => {
                        setUpdateId(room._id)
                        handleShow()
                      }}
                    >
                      <div className="value">
                        <LuClipboardEdit fontSize={22} />
                      </div>
                      <div className="type d-none">Rename</div>
                    </div>
                    <div
                      className="stat border card-stat-btn card-stat-btn2"
                      onClick={() => addTofavForm({ _id: room._id })}
                    >
                      <div className="value">
                        <AiOutlineHeart fontSize={22} />
                      </div>
                      <div className="type d-none">Favourite</div>
                    </div>
                    <div
                      className="stat card-stat-btn card-stat-btn3"
                      onClick={() => submitForm({ _id: room._id })}
                    >
                      <div className="value">
                        <BsTrash fontSize={22} />
                      </div>
                      <div className="type d-none">Trash</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  )
}

export default Dashboard
