import React, { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
interface room1Props {}
import "./step2.css"
import dreamroomimage2 from "../../img/dreamroomimage2.png"
import { useNavigate } from "react-router-dom"
import { useGetRoomThemesQuery } from "../../services/roomsServices"
import { toast } from "react-toastify"

const convertToTitleCase = (s: any) =>
  s
    .split("_")
    .map(
      (word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(" ")

const Room2 = (props: room1Props) => {
  const navigate = useNavigate()

  const { data } = useGetRoomThemesQuery({})

  const [keyValues, setKeyValues] = useState<any>({})

  const roomType = localStorage.getItem("roomType") || ""

  useEffect(() => {
    if (!!(data?.data && roomType)) {
      const keys = Object.keys(data?.data?.[roomType] || {})
      const values: any = {}
      keys.forEach((key) => {
        values[key] = convertToTitleCase(key)
      })
      setKeyValues(values)
    }
  }, [data])

  const [selectedRoomTheme, setSelectedRoomTheme] = useState(
    localStorage.getItem("roomTheme") || "",
  )

  const onChange = (event: any) => {
    setSelectedRoomTheme(event.target.value)
    if (event.target.value)
      localStorage.setItem("roomTheme", event.target.value)
  }

  return (
    <>
      <Container>
        {/* themecount */}
        <section className="themecount">
          <div className="roomcount">
            <div className="count-number">
              <span className="step">2</span>
            </div>
            <div className="roomplate">
              <p>Choose your room theme.</p>
            </div>
          </div>
        </section>
        {/* dropdownmenubutton */}
        <section className="mordernbutton-dropdown">
          <select
            className="dropdown"
            onChange={onChange}
            value={selectedRoomTheme}
          >
            <option value="">Please Select One</option>
            {!!keyValues
              ? Object.keys(keyValues)?.map((key: any) => (
                  <option value={key}>{keyValues[key]}</option>
                ))
              : null}
          </select>
        </section>
        {/* dreamroom*/}
        <section className="dreamroom">
          <div className="dreamroom-image">
            {selectedRoomTheme ? (
              <img src={data?.data?.[roomType]?.[selectedRoomTheme]} />
            ) : (
              <img src={dreamroomimage2} />
            )}
          </div>
          <hr className="bottomline"></hr>
        </section>
        <Button
          onClick={() => {
            if (selectedRoomTheme) navigate("/rooms/room3")
            else toast.error("Please select a room theme")
          }}
        >
          Next Step
        </Button>

        <Button
          onClick={() => {
            navigate("/rooms/room1")
          }}
          className="Back-button-for-room"
        >
          Back
        </Button>
      </Container>
    </>
  )
}

export default Room2
