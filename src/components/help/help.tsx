import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import "./help.css"
// import dashboardlogo from '../../img/Luxterior green.png';
// import headerimage from '../../img/header-image.png';
import helpcard1 from "../../img/helpcard1.png"
import helpcard2 from "../../img/helpcard2.png"
import helpcard3 from "../../img/helpcard3.png"
import { useAddHelpMessageMutation } from "../../services/ticketsServices"
import { toast } from "react-toastify"

const Help = () => {
  const [submitForm, { isError, error, data }] = useAddHelpMessageMutation({})

  const [inputText, setInputText] = useState("")
  const [errorValidation, setErrorValidation] = useState("")

  const handleInputChange = (event: any) => {
    setInputText(event.target.value)
    setErrorValidation(" ")
  }

  const handleButtonClick = () => {
    setErrorValidation("Please enter Text")
    if (inputText && inputText.trim()) {
      submitForm({ message: inputText })
    }
  }

  useEffect(() => {
    toast.success(data?.message, { toastId: 1 })
  }, [data])

  return (
    <>
      <Container>
        <section className="helyou main-wrapper">
          <div className="help-heading">
            <h1>Hi, How can we help you?</h1>
          </div>
          {/* helpcard */}
          <div className="help-card">
            <div className="helpcard">
              <div className="card1-image">
                <img src={helpcard1} alt="Card 1" />
              </div>
              <div className="card-text">
                <p>24*7 Support</p>
              </div>
            </div>
            <div className="helpcard">
              <div className="card2-image">
                <img src={helpcard2} alt="Card 2" />
              </div>
              <div className="card-text">
                <p>Book a Call to Our Experts</p>
              </div>
            </div>
            <div className="helpcard">
              <div className="card3-image">
                <img src={helpcard3} alt="Card 3" />
              </div>
              <div className="card-text">
                <p>Book a Call to Our Experts</p>
              </div>
            </div>
          </div>
          <div className="flexbox">
            <h2>You can report your noticed issues here:</h2>
            <input
              type="text"
              placeholder="Enter your text here"
              value={inputText}
              onChange={handleInputChange}
              style={{ minWidth: "50%", maxWidth: "50%" }}
              className="inputbox"
            />
            <p className="text-danger">{errorValidation}</p>
            <button className="buttonhelp" onClick={handleButtonClick}>
              Post your complaint or suggestion
            </button>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Help
