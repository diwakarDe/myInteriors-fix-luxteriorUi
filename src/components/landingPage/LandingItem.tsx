import React from "react"
import { Col, Row, Container, Card, Button } from "react-bootstrap"
import originalRoom from "../../img/image-1.png"
import generatedRoom from "../../img/image-2.png"
import { MdDesignServices } from "react-icons/md"
import { BiMedal } from "react-icons/bi"
import { SiAdguard } from "react-icons/si"
import { BiLogoFacebook } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import image3 from "../../img/image-3.png"
import Room1 from "../../img/room1.jpeg"
import Room2 from "../../img/room2.jpeg"
import Room3 from "../../img/room3.jpeg"
import image4 from "../../img/image-4.png"
import testimonial from "../../img/image-5.jpg"
import testimonialimage from "../../img/header-image.png"
import image6 from "../../img/image-6.png"
import image7 from "../../img/image-7.png"
import image8 from "../../img/image-8.png"
import trendimage from "../../img/header-image.png"
import landingpagelogo from "../../img/Luxterior (1).png"
import "./LandingItem.css"
interface roomComparisonProps { }

const LandingItem = (props: roomComparisonProps) => {
  return (
    <>
      {/* benefits-section */}
      <section className="benefits py-1">
        <div className="benefit-heading">
          <h1>
            Benefits you get when using
            <br />
            our services
          </h1>
        </div>
        <div className="content">
          <div className="grid">
            <figure className="effect-lily">
              <img src={Room1} alt="img12" />
              <figcaption>
                <div>
                  <h2>Versatility</h2>
                  <p>
                    best designers and interior designer tools, allowing you to
                    create your dream space with your ease.
                  </p>
                </div>
              </figcaption>
            </figure>
            <figure className="effect-lily">
              <img src={Room2} alt="img12" />
              <figcaption>
                <div>
                  <h2>Versatility</h2>
                  <p>
                    Our app is versatile and can be used for a variety of design
                    projects, from simple room makeovers to complex renovations.
                  </p>
                </div>
              </figcaption>
            </figure>
            <figure className="effect-lily">
              <img src={Room3} alt="img1" />
              <figcaption>
                <div>
                  <h2>Customization</h2>
                  <p>
                    Our app allows you to customize your designs to your exact
                    specifications, ensuring your space is uniquely yours.
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        {/* <Container className="different-cards py-5">
          <Row>
            <Col md={4}>
              <div className="card-heading">
                <MdDesignServices />
                <span className="card-subghead py-3">Versatility</span>
              </div>
              <div className="card-paragraph">
                <p>
                  We give you an access to the <br />
                  best designers and interior
                  <br />
                  designer tools, allowing you to <br />
                  create your dream space with <br />
                  your ease.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="card-heading">
                <BiMedal />
                <span className="card-subghead py-3">Versatility</span>
              </div>
              <div className="card-paragraph">
                <p>
                  Our app is versatile and can
                  <br />
                  be used for a variety of
                  <br />
                  design projects, from simple
                  <br />
                  room makeovers to complex <br />
                  renovations.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="card-heading">
                <SiAdguard />
                <span className="card-subghead py-3">Customization</span>
              </div>
              <div className="card-paragraph">
                <p>
                  Our app allows you to customize
                  <br />
                  your designs to your exact
                  <br />
                  specifications, ensuring your
                  <br />
                  space is uniquely yours.
                </p>
              </div>
            </Col>
          </Row>
        </Container> */}
      </section>
      {/* transform-section */}
      <section className="transform-section py-5">
        <Container>
          <div className="dream">
            <Row>
              <Col md={5}>
                <div className="transform-image">
                  <img src={image3} alt="Transform Your Space" />
                </div>
              </Col>
              <Col md={1}></Col>
              <Col md={6}>
                <div className="transform-heading py-5">
                  <h1>
                    Transform Your
                    <br />
                    Space Into a Dream
                    <br />
                    Haven
                  </h1>
                  <p>
                    Our dedicated team of professional designers has the
                    expertise
                    <br />
                    and knowledge to create designs that exceed your
                    expectations
                    <br />
                    and transform your space into something truly extraordinary.
                    <br />
                    With years of experience and an eye for detail, we can help
                    you
                    <br />
                    achieve the perfect look for your space, no matter your
                    style or
                    <br />
                    preferences.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* project-section */}
      <section className="project">
        <Container>
          <Row>
            <Col md={5}>
              <div className="interior-image">
                <img src={image4} alt="Our Recent Project" />
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <div className="project-title">
              <h1>O U R &nbsp; R E C E N T &nbsp; P R O J E C T</h1>
                <h3>
                  Exterior &<br />
                  Interior
                </h3>
                <p>
                  Let us bring your dreams to life. With our
                  <br />
                  expertise in interior design, you can relax and
                  <br />
                  enjoy the transformation of your space.
                </p>
              </div>
              {/* <div className="project-button">
                <Button variant="transparent" href="#">
                  View Full Project
                </Button>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial-section */}
      <section className="testimonial">
        <Container>
          <div className="testimonial-heading">
            <h1>Testimonials</h1>
          </div>
          <div className="testimonial-content py-5">
            <Row>
              <Col md={6}>
                <div className="testimonial-image">
                  <img src={testimonial} alt="Testimonial" />
                </div>
              </Col>
              <Col md={6}>
                <div className="testimonial-box">
                  <div className="testimonial-heading">
                    <p>
                      “I really like their work. It was awesome. The interior
                      designer was
                      <br />
                      very friendly and he was a genius. He did his job very
                      well. All the
                      <br />
                      work was very beautiful. I Really love it. Thank you!”
                    </p>
                  </div>
                  <div className="testimonialbox-image text-center">
                    <img src={testimonialimage} alt="Testimonial Box" />
                    <h4>Emila Babu</h4>
                    <h6>UI/UX Designer</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* interested section */}
      <section className="interested-section py-5">
        <Container>
          <Row style={{alignItems:'center'}}>
          
            <Col md={6}>
              <div className="interesting-text">
                <h1>
                  Interested in working with us  </h1>
                <p>
                  Connect with like-minded professionals,
                  <br />
                  build your portfolio, and reach more clients
                  <br />
                  by registering with us and take on exciting
                  <br />
                  projects that push your creativity to new limits.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="work-image d-md-flex">
                <div className="work-image1">
                  <img src={image6} alt="Image 6" />
                </div>
                <div className="work-image2">
                  <div className="work1">
                    <img src={image7} alt="Image 7" />
                  </div>
                  <div className="work2 pt-1">
                    <img src={image8} alt="Image 8" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* tradesetters section */}
      <section className="trendsetters-section">
        <Container>
          <div className="trendsetters-heading py-5">
            <h1>Trendsetters to Traditionalists</h1>
            <p>
              Our designers have a wide range of specialties to suit any style
              or preference
            </p>
          </div>
          <div className="trend-card">

            <Row>
            <figure className="snip1157">
  <blockquote>Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
    <div className="arrow"></div>
  </blockquote>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg" alt="sq-sample3" />
  <div className="author">
    <h5>Pelican Steve</h5>
  </div>
</figure>
<figure className="snip1157 hover">
  <blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.
    <div className="arrow"></div>
  </blockquote>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg" alt="sq-sample27" />
  <div className="author">
    <h5>Max Conversion</h5>
  </div>
</figure>
<figure className="snip1157">
  <blockquote>My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.
    <div className="arrow"></div>
  </blockquote>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" alt="sq-sample17" />
  <div className="author">
    <h5>Eleanor Faint</h5>
  </div>
</figure>
         
            </Row>
          </div>
        </Container>
      </section>
      {/* footer-section */}
      <section className="footer-section">
        <div className="footer-details d-md-flex">
          <div className="footer-info1">
            <img src={landingpagelogo} />
            <p>
              Unlock Endless opportunities
              <br />
              with Luxterior
            </p>
          </div>
          <div className="footer-info2">
            <div className="footer-nav d-md-flex">
              <div className="footer-nav1">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  {/* <li>Features</li>
                  <li>Our Services</li>
                  <li>Calculator</li> */}
                </ul>
              </div>
              <div className="footer-nav2">
                <ul>
                  <li>FAQ</li>
                  <li>Help Center</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="copyright-heading">
            <p>Copyright @ 2023 ode. interior</p>
          </div>
          <div className="media-icon">
            <ul>
              <li>Follow Us</li>
              <li>
                <BiLogoFacebook />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <BsWhatsapp />
              </li>
              <li>
                <AiOutlineInstagram />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingItem
