import React, { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import "./step4.css"
import RoomInterior from "../roomInterior"
import originalimage from "../../img/originalroom2.png"
import generatedimage from "../../img/generatedcard.png"
import { useNavigate } from "react-router-dom"
import { useAddRoomMutation } from "../../services/roomsServices"
import { toast } from "react-toastify"
import { saveAs } from "file-saver"

interface headingDataProps {
  heading?: string
  subHeading?: string
}

const Room4 = (props: headingDataProps) => {
  const navigate = useNavigate()
  const [submitForm, { isError, error, data }] = useAddRoomMutation({})

  const [refreshNow, setRefreshNow] = useState(0)

  const onRegenerateImage = () => {
    // TODO: UPDATE ONCE DISCUSSED
    // const formdata = new FormData();
    // formdata.append("roomName", "Test");
    // formdata.append("roomTheme", localStorage.getItem('roomTheme') || "");
    // formdata.append("roomTypes", localStorage.getItem('roomType') || "");
    // formdata.append("imageUrl", localStorage.getItem('uploadedImg') || "");
    // submitForm(formdata);

    navigate("/rooms/room1")
  }

  const downloadImage = () => {
    saveAs(localStorage.getItem("generatedImg") || "", "generated_image.png") // Put your image url here.
  }

  useEffect(() => {
    if (data?.message) {
      localStorage.setItem("generatedImg", data.data.generatedImageUrl)
      localStorage.setItem("uploadedImg", data.data.uploadedImageUrl)
      toast.success(data.message)
      setRefreshNow(refreshNow + 1)
    }
  }, [data])

  useEffect(() => {}, [refreshNow])

  return (
    <>
      <Container>
        <section className="roomcard">
          <div className="generateroom">
            <div className="originalroom">
              <div className="originalheading">
                <h1>Original Room</h1>
              </div>
              <div className="originalsroom-image">
                <img src={localStorage.getItem("uploadedImg") || ""} />
              </div>
              <div className="generateroom-button">
                <Button
                  onClick={() => onRegenerateImage()}
                  className="generatebutton"
                >
                  Generate a new room
                </Button>
              </div>
            </div>
            <div className="generatedroom">
              <div className="generatedheading">
                <h1>Generated Room</h1>
              </div>
              <div className="generatedroom-image">
                <img src={localStorage.getItem("generatedImg") || ""} />
              </div>
              <div className="generateroom-button">
                <Button
                  onClick={() => downloadImage()}
                  className="generatebutton"
                >
                  Download generated room
                </Button>
              </div>
            </div>
          </div>
        </section>
        <hr className="bottomline"></hr>
        <Button
          onClick={() => {
            navigate("/dash/main")
          }}
        >
          Final Submit
        </Button>
        <Button
          onClick={() => {
            navigate("/rooms/room3")
          }}
          className="Back-button-for-room4"
        >
          Back
        </Button>
      </Container>
    </>
  )
}

export default Room4
