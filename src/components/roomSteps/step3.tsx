import React, { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./step3.css"
import ImagePicker from "../dragAndDropImagePicker/dragAndDrop"
import { useAddRoomMutation } from "../../services/roomsServices"
import { toast } from "react-toastify"
import { Audio } from "react-loader-spinner"
import Loader from "react-js-loader"

interface room1Props {}
interface MyErrorType {
  error: any
}

const Room3 = ({}: room1Props) => {
  const navigate = useNavigate()
  const [submitForm, { isError, error: MyErrorType, data }] =
    useAddRoomMutation({})
  const [loading, setLoading] = useState(false)

  const [selectedImage, setSelectedImage] = useState(null)

  const toTitleCase = (str: any) =>
    str
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (char: any) => char.toUpperCase())

  const onSubmit = () => {
    setLoading(true)
    if (selectedImage) {
      const formdata = new FormData()
      formdata.append("roomPic", selectedImage)
      formdata.append("roomName", "Test")
      formdata.append(
        "roomTheme",
        toTitleCase(localStorage.getItem("roomTheme") || ""),
      )
      formdata.append(
        "roomTypes",
        toTitleCase(localStorage.getItem("roomType") || ""),
      )
      console.log("formdatasss", formdata)
      submitForm(formdata)
    }
  }

  useEffect(() => {
    if (data?.message) {
      localStorage.setItem("generatedImg", data.data.generatedImageUrl)
      localStorage.setItem("uploadedImg", data.data.uploadedImageUrl)
      toast.success(data.message)
      setLoading(false)
      navigate("/rooms/room4")
    } else {
      setLoading(false)
    }
  }, [data, MyErrorType])

  return (
    <>
      <Container>
        <section className="themecount">
          <div className="roomcount">
            <div className="count-number">
              <span className="step">3</span>
            </div>
            <div className="roomplate">
              <p>Upload a picture of your room.</p>
            </div>
          </div>
        </section>

        {loading && (
          <div className="loader-screen">
            <Loader type="box-rotate-x" bgColor={"#0D928D"} size={100} />
            Loading.....
          </div>
        )}
        <div className="py-5">
          <ImagePicker setSelectedImage={setSelectedImage} />
        </div>
        <hr className="bottomline"></hr>
        <Button
          onClick={onSubmit}
          disabled={selectedImage ? false : true}
          style={{ backgroundColor: selectedImage ? "#0D928D" : "gray" }}
        >
          Generate Room
        </Button>
        <Button
          onClick={() => {
            navigate("/rooms/room2")
          }}
          className="Back-button-for-room3"
        >
          Back
        </Button>
      </Container>
    </>
  )
}

export default Room3
