import React, { useEffect, useState } from "react"
import { Button, Container, Modal, Table, Col, Row } from "react-bootstrap"
import Checkbox from "../../img/checkbox.svg"
import "./payments.css"
import {
  useCheckoutMutation,
  useGetPlansQuery,
  useGetSecretKeyQuery,
} from "../../services/paymentServices"
import { AUTH_TOKEN } from "../../constants"

const Payments = () => {
  const { data: plansList } = useGetPlansQuery({})
  const { data: keydata } = useGetSecretKeyQuery({})

  const [key, setKey] = useState("")

  const [showModal, setShowModal] = useState(false)

  const [submitForm, { isError, error, data }] = useCheckoutMutation({})

  const [selectedPlan, setSelectedPlan] = useState<any>({})

  const handleSubmit = (data: any) => {
    submitForm({ amount: selectedPlan.price })
    setShowModal(false)
  }

  useEffect(() => {
    setKey(keydata?.key)
  }, [keydata])

  useEffect(() => {
    if (data) {
      console.log(data, data.data)
      const options = {
        key: key,
        amount: selectedPlan.price,
        currency: "INR",
        name: "Luxterior 2023",
        description: "Getting subscription",
        image:
          "https://zeevector.com/wp-content/uploads/Versace-Symbol-PNG@zeevector.com_.png",
        order_id: data.data.id,
        callback_url:
          `http://localhost:8000/api/payment/payment-verify?token=${localStorage.getItem(
            AUTH_TOKEN,
          )}&paymentId=${data.data.internalId}` ||
          "http://localhost:4001/payment/payment-verify",
        notes: {
          address: "Luxterior India",
        },
        theme: {
          color: "#3399cc",
        },
      }
      const razor = (window as any).Razorpay(options)
      razor.open()
    }
  }, [data])

  const handleClickOnPlan = (row: any) => {
    console.log(row, "row")
    setSelectedPlan(row)
    setShowModal(true)
  }

  // useEffect(() => {
  //     const options = {
  //         key: key,
  //         amount: 10000,
  //         currency: "INR",
  //         name: "Hitsho corp",
  //         description: "buying product",
  //         image:
  //             "https://zeevector.com/wp-content/uploads/Versace-Symbol-PNG@zeevector.com_.png",

  //         order_id: response.data.data.id,
  //         callback_url: "http://localhost:4001/payment/payment-verify",
  //         prefill: {
  //             name: "Luxterior",
  //             email: "gaurav.kumar@example.com",
  //             contact: "9000090000",
  //         },
  //         notes: {
  //             address: "Razorpay Corporate Office",
  //         },
  //         theme: {
  //             color: "#3399cc",
  //         },
  //     };
  //     const razor = (window as any).Razorpay(options);
  //     razor.open();
  // }, [])

  // TODO: UPDATE KEYS OVER HERE
  return (
    <>
      <div className="modalbox">
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header> {selectedPlan.name} </Modal.Header>
          <Modal.Body>
            <div className="amouttext">
              Amount to be Paid : <span>Rs. {selectedPlan.price}</span>
              <br />
              Generations : <span>{selectedPlan.generations}</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSubmit}>Make Payment</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Container fluid>
        <section className="helyou main-wrapper">
          {/* <div className="help-heading"> */}
          <h1 className="mb-4">Payment Plans</h1>
          {/* </div> */}
          {/* helpcard */}
          {/* <div className="help-card">
                        <Table>
                            <th>
                                Name
                            </th>
                            <th>
                                Generations
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Price
                            </th>
                            {
                                plansList?.data?.map((planDetails: any) => {
                                    return <tr onClick={() => handleClickOnPlan(planDetails)}>
                                        <td>
                                            {planDetails.name}
                                        </td>
                                        <td>
                                            {planDetails.generations || '-'}
                                        </td>
                                        <td>
                                            {planDetails.description}
                                        </td>
                                        <td>
                                            Rs. {planDetails.price}.00
                                        </td>
                                    </tr>
                                })
                            }
                        </Table>
                    </div> */}
          <section className="price">
            <Row>
              {plansList?.data?.map((planDetails: any) => {
                return (
                  <Col sm={4} onClick={() => handleClickOnPlan(planDetails)}>
                    <div className="Liteprice pt-0 px-0 h-100">
                      <p className="Lite">
                        {planDetails.name}{" "}
                        {/* <span className="active-plan">Active Plan</span> */}
                      </p>
                      <div className="px-3">
                        <p className="perfect">Perfect to Get Started</p>
                        <p className="litemonth">
                          <span className="dollar">
                            ₹
                            <span className="numeric">{planDetails.price}</span>
                          </span>{" "}
                          {/* per month */}
                        </p>
                        <div className="mb-3">
                          <span className="generation-text">
                            {" "}
                            Genrations {planDetails?.generations}
                          </span>
                        </div>

                        {planDetails?.isActive == true ? (
                          <Button className="upgrade-button-payment">
                            Active Plan
                          </Button>
                        ) : (
                          <Button>Purchase Plan</Button>
                        )}
                        <div className="listitem">
                          <h3>Plan includes</h3>
                          <ul>
                            <li className="d-flex gap-2 align-items-start">
                              <img src={Checkbox} alt="logo" />
                              {planDetails?.description}
                            </li>
                            <li className="d-flex gap-2 align-items-start">
                              <img src={Checkbox} alt="logo" /> Customer support
                              24*7
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </section>
        </section>
      </Container>
    </>
  )
}

export default Payments
