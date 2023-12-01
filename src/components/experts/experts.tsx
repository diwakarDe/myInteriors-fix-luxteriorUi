import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import "./experts.css"
import room1 from "../../img/image-9.png"
import room2 from "../../img/image-10.png"
import room3 from "../../img/image-11.png"
import Ellipse14 from "../../img/Ellipse 14.png"
import { useGetDesignersQuery } from "../../services/designerServices"
import HiringForm from "./hireForms/hireForms"
import Breadcrumb from "react-bootstrap/Breadcrumb"

const Experts = () => {
  const { data: expertsList } = useGetDesignersQuery({ pageSize: 9 })

  const [count, setCount] = useState(0)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const count = expertsList?.totalExperts || 0
    setCount(count)
  }, [expertsList])

  return (
    <>
      <HiringForm
        show={showModal}
        onHide={() => {
          setShowModal(false)
          sessionStorage.removeItem("expertId")
        }}
      />
      <Container>
        <section className=" main-wrapper">
          <div className="dashboard1-item">
            {/* <section className="navbar">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Call An Expert
                </Breadcrumb.Item>
              </Breadcrumb>
            </section> */}
            {/* interior design */}
            <section className="generate-room">
              <div className="room-heading">
                <h1 style={{padding: '0 10px'}}>Found {count} Interior Experts</h1>
              </div>
            </section>
            {/* interior cards */}
            <section className="interior-card">
              <div className="inter-card">
                {expertsList?.data?.map((expert: any) => (
                  <div className="card" key={expert._id}>
                    <div className="card-image">
                      <div className="img-1">
                        <img src={room1} />
                      </div>
                      <div className="img-2">
                        <img src={room2} />
                      </div>
                      <div className="img-3">
                        <img src={room3} />
                      </div>
                    </div>
                    <div className="profile-image">
                      <img src={Ellipse14} />
                    </div>
                    <div className="card-content">
                      <h3>{`${expert.firstName} ${expert.lastName || ""}`}</h3>
                      <h4>{expert.designation || "Interior Designer"}</h4>
                      <p>{expert.headline || "Designer"}</p>
                    </div>
                    <div className="hireme">
                      <a
                        href="#"
                        className="button"
                        onClick={() => {
                          sessionStorage.setItem("expertId", expert._id)
                          setShowModal(true)
                        }}
                      >
                        Hire me
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Experts
