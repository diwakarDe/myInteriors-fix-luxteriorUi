import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./BannerSection.css"
interface bannerSectionProps {}

const BannerSection = ({}: bannerSectionProps) => {
  const navigate = useNavigate()

  return (
    <section className="banner">
      <div className="banner-heading">
        <h1>
          Create Your <span>Dream Room</span>
          <br />
          While Discovering the
          <br />
          Power Of AI
          <p>
            Redesign your space in seconds! -100% Free-
            <br />
            Take a picture of your room and experiment with <br /> different
            themes until you find the one that's right for you.”
          </p>
        </h1>
      </div>
      <div className="dremroom-button text-center">
        <Button
          onClick={() => navigate("/rooms/room1")}
          className="dream-button"
        >
          Generate your Dream Room
        </Button>
      </div>
    </section>
  )
}

export default BannerSection
