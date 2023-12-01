import React, { useEffect } from "react"
import { Form, Button, Container, Modal } from "react-bootstrap"
import workimage from "../../img/glogo.png"
import googleimage from "../../img/googlelogo.png"
import workinggirl from "../../img/workinggirl.png"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import "./signin.css"
import { useLoginUserMutation } from "../../services/authServices"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { FormInput } from "../form"
import { AUTH_TOKEN } from "../../constants"

interface signinProps {
  onHide?: () => void
  show?: boolean
}

interface LoginUser {
  email: string
  password: string
}

const Signin = ({ onHide = () => {}, show }: signinProps) => {
  const navigate = useNavigate()

  const [submitForm, { isError, error, data }] = useLoginUserMutation()

  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().required("Please enter login id/contact no"),
      password: yup.string().required("Please fill in a password"),
    }),
  )

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: schemaResolver,
  })

  // useEffect(() => {
  //   if (error) {
  //     toast.error((error as any).data?.message, { toastId: 44 });
  //   }
  // }, [isError]);

  useEffect(() => {
    if (data?.message) {
      toast.success(data?.message, { toastId: 1 })
      handleClose()
      navigate("/dash/main")
    }
  }, [data])

  const handleClose = () => onHide()

  const onSubmit = async (values: any) => {
    const payload = {
      email: values.email,
      password: values.password,
    }
    submitForm(payload)
  }

  return (
    <>
      <Container>
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton onHide={handleClose} />
          <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="signin-form container">
                <div className="form-content">
                  <Container>
                    <h3>Login</h3>
                    <p>
                      See your growth and choose Interior Designer with
                      Luxterior
                    </p>
                  </Container>
                  <Container>
                    {/* <Button variant="outline-secondary" className="w-100">
                      <img src={googleimage} />
                      <span className="button-text">Sign in with google</span>
                    </Button> */}
                    {/* <div className="headline">
                      <p>Or signing with Email</p>
                    </div> */}
                    <div className="emailform ">
                      <FormInput
                        name="email"
                        title="Email/Contact No."
                        placeholder="Email / Contact number"
                        register={register}
                        errors={errors}
                      />
                    </div>
                    <div className="passwordform ">
                      <FormInput
                        name="password"
                        title="Password"
                        placeholder="*******"
                        type="password"
                        register={register}
                        errors={errors}
                      />
                    </div>
                    <div className="d-flex justify-content-between my-3">
                      <label className="form-remember ">
                        <input type="checkbox" />
                        Remember Me
                      </label>
                      <a className="form-recovery" href="#">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Button
                        size="lg"
                        variant="success"
                        type="submit"
                        className="my-3 w-100"
                      >
                        Login
                      </Button>
                    </div>
                    <div>
                      <p className="text-center">
                        <div>Not A member Yet?</div>
                        <div>
                          {" "}
                          <span className="textcolor">
                            <a
                              href="#"
                              onClick={() => {
                                navigate("/signup")
                                handleClose()
                              }}
                            >
                              Create an account
                            </a>
                          </span>
                        </div>
                      </p>
                    </div>
                  </Container>
                </div>
                <div className="form-image">
                  <div className="form-image">
                    <img src={workinggirl} className="img-fluid" />
                  </div>
                </div>
              </div>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </Container>
    </>
  )
}
export default Signin
