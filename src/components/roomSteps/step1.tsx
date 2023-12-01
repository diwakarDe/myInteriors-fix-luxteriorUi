import React, { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import "./step1.css"
import { useNavigate } from "react-router-dom"
import { useGetRoomTypesQuery } from "../../services/roomsServices"
import { toast } from "react-toastify"

interface room1Props {}

const convertToTitleCase = (s: any) =>
  s
    .split("_")
    .map(
      (word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(" ")

const Room1 = (props: room1Props) => {
  const navigate = useNavigate()

  const { data } = useGetRoomTypesQuery({})

  const [keyValues, setKeyValues] = useState<any>({})

  useEffect(() => {
    if (data?.data) {
      const keys = Object.keys(data?.data)
      const values: any = {}
      keys.forEach((key) => {
        values[key] = convertToTitleCase(key)
      })
      setKeyValues(values)
    }
  }, [data])

  const [selectedRoomType, setSelectedRoomType] = useState(
    localStorage.getItem("roomType") || "",
  )

  const onChange = (event: any) => {
    setSelectedRoomType(event.target.value)
    if (event.target.value) localStorage.setItem("roomType", event.target.value)
  }

  return (
    <>
      <Container>
        {/* themecount */}
        <section className="themecount">
          <div className="roomcount">
            <div className="count-number">
              <span className="step">1</span>
            </div>
            <div className="roomplate">
              <p>Choose your room type.</p>
            </div>
          </div>
        </section>
        {/* dropdownmenubutton */}
        <section className="mordernbutton-dropdown">
          <select
            className="dropdown"
            onChange={onChange}
            value={selectedRoomType}
          >
            <option value="">Please Select</option>
            {!!data
              ? Object.keys(keyValues)?.map((key: any) => (
                  <option value={key}>{keyValues[key]}</option>
                ))
              : null}
          </select>
        </section>
        {/* image */}
        <section className="dreamroom">
          <div className="dreamroom-image">
            {/* <img src={dreamroomimage} /> */}
          </div>
          <hr className="bottomline"></hr>
        </section>
        <Button
          onClick={() => {
            if (selectedRoomType) navigate("/rooms/room2")
            else toast.error("Please select a room type")
          }}
        >
          Next Step
        </Button>
      </Container>
    </>
  )
}

export default Room1
