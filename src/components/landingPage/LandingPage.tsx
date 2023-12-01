import React, { useState } from "react"
import logo from "../../img/Luxterior.png"
import room from "../../img/image-1.png"
import rooms from "../../img/image-2.png"
import icon from "../../img/icon-1.png"
import icons from "../../img/icon-2.png"
import iconss from "../../img/icon-3.png"
import transimage from "../../img/image-3.png"
import projimage from "../../img/image-4.png"
import testmonialimage from "../../img/image-5.jpg"
import workimage from "../../img/image-6.png"
import working from "../../img/image-7.png"
import workerimage from "../../img/image-8.png"
import { Button } from "react-bootstrap"
import BannerSection from "./BannerSection"
import RoomComparision from "./RoomComparision"
import LandingItem from "./LandingItem"

const LandingPage = () => {
  return (
    <>
      {/* Banner-section */}
      <BannerSection />
      {/* room-card-section */}
      <section className="room-card">
        <RoomComparision />
      </section>
      <LandingItem/>
      {/* Benefits-section */}
      {/* <section className="benefits">
        <div className="container-fluid">
          <div className="benefits-heading">
            <p>Benefits you get when using<br /> our services</p>
          </div>
          <div className="different-cards d-flex justify-content-between">
            <div className="card-1">
              <div className="card-heading">
                <div className="card-icon">
                  <img src={icon} />
                </div>
                <div className="card-title">
                  <h1>Design Like a Pro</h1>
                  <p>We give you an access to the<br /> best designers and interior<br /> designer tools, allowing you to<br /> create your dream space with<br /> your ease.</p>
                </div>
              </div>
            </div>
            <div className="card-1">
              <div className="card-heading">
                <div className="card-icon">
                  <img src={icons} />
                </div>
                <div className="card-title">
                  <h1>Design Like a Pro</h1>
                  <p>We give you an access to the<br /> best designers and interior<br /> designer tools, allowing you to<br /> create your dream space with<br /> your ease.</p>
                </div>
              </div>
            </div>
            <div className="card-1">
              <div className="card-heading">
                <div className="card-icon">
                  <img src={iconss} />
                </div>
                <div className="card-title">
                  <h1>Design Like a Pro</h1>
                  <p>We give you an access to the<br /> best designers and interior<br /> designer tools, allowing you to<br /> create your dream space with<br /> your ease.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* transform-section */}
      {/* <section className="transform-dream">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="transform-image">
                <img src={transimage} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="transform-heading">
                <h1>Transform Your<br />Space Into a Dream<br />Haven</h1>
                <p>Our dedicated team of professional designers has the expertise<br />and knowledge to create designs that exceed your expectations<br />and transform your space into something truly extraordinary<br />With years of experience and an eye for detail, we can help you<br />achieve the perfect look for your space, no matter your style or<br />preferences.</p>
              </div>
              <div className="learn-more">
                <a href="#" className="more-button">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* project-section */}
      {/* <section className="project">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="project-image">
                <img src={projimage} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-title">
                <h1>O U R R E C E N T P R O J E C T</h1>
                <h3>Exterior &<br />Interior</h3>
                <p>Let us bring your dreams to life. With our<br />expertise in interior design, you can relax and<br />enjoy the transformation of your space.</p>
                <a href="#" className="project-button">View Full Project</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonial-section */}
      {/* <section className="testimonial">
        <div className="container-fluid">
          <div className="testimonial-heading">
            <h1>Testimonial</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial-image">
                <img src={testmonialimage} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-box">
                <p>“I really like their work. It was awesome. The interior designer was very friendly and he was a genius. He did his job very well. All the work was very beautiful. I Really love it. Thank you!”</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* working-section */}
      {/* <section className="working">
        <div className="container-fluid">
          <div className="interested-working">
            <div className="row">
              <div className="col-md-6">
                <div className="workers">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="work-image">
                        <img src={workimage} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="work-image2">
                        <img src={working} />
                        <img src={workerimage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="working-heading">
                  <h1>Interested in <br />working <br />with us</h1>
                  <p>Connect with like-minded professionals, <br />build your portfolio, and reach more clients <br />by registering with us and take on exciting <br />projects that push your creativity to new <br />limits.</p>
                  <a href="#" className="worker-button">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* traditionalists-section */}
      {/* <section className="traditionalist">
        <div className="container-fluid">
          <div className="traditional-heading">
            <h1> Trendsetters to Traditionalists</h1>
            <p>Our designers have a wide range of specialties to suit any style or preference</p>
          </div>
          <div className="traditional-card">
            
          </div>
        </div>
      </section> */}
    </>
  )
}

export default LandingPage
