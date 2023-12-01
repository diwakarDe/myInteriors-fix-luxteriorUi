import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import "./signup.css"
import signupimage from "../../img/signupimage.png"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { FormInput, FormSelect } from "../form"
import { COUNTRY_LIST } from "../../constants"
import { Form, Button } from "react-bootstrap"
import { useRegisterUserMutation } from "../../services/authServices"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import showPassword from "../../img/eyes.png"

interface signUpProps {}

interface SignUpUser {
  firstname: string
  lastname: string
  email: string
  contactNo: string
  region: any
  address: string
  password: string
  confirmedPassword: string
  username?: string
}

const Signup2 = (props: signUpProps) => {
  const navigate = useNavigate()
  const [submitForm, { isError, error, data }] = useRegisterUserMutation()
  const [show, setShow] = useState(false)

  const schemaResolver = yupResolver(
    yup.object().shape({
      firstname: yup.string().required("Please enter first name"),
      lastname: yup.string().required("Please enter last name"),
      email: yup.string().email().required("Please enter an email"),
      contactNo: yup.string().required("Please enter a valid phone no"),
      region: yup.mixed().required("Please select a region"),
      address: yup.string().required("Please enter your address"),
      password: yup.string().required("Please fill in a password"),
      confirmedPassword: yup
        .string()
        .label("confirm password")
        .required()
        .oneOf([yup.ref("password"), ""], "Passwords must match"),
    }),
  )

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUser>({
    resolver: schemaResolver,
  })

  const onSubmit = async (values: any) => {
    const payload = {
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      contactNo: values.contactNo,
      address: values.address,
      region: values.region?.value,
      password: values.password,
      username: Math.random(),
    }
    submitForm(payload)
  }

  // useEffect(() => {
  //     if (error) {
  //         toast.error((error as any).data?.message, { toastId: 44 });
  //     }
  // }, [isError, error]);

  useEffect(() => {
    if (data?.message) {
      toast.success(data?.message, { toastId: 1 })
      navigate("/")
    }
  }, [data])

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="signin-form pt-5 mt-5">
            <div className="form-content">
              <div className="form-heading">
                <h1>Sign-up</h1>
              </div>
              <div className="signup-form">
                <div className="w-100">
                  <FormInput
                    name="firstname"
                    title="First Name"
                    placeholder="John"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="w-100 i-spece-two">
                  <FormInput
                    name="lastname"
                    title="Last Name"
                    placeholder="Doe"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="emailform py-2">
                <FormInput
                  name="email"
                  title="Email ID"
                  placeholder="sample@sample.com"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="phonenumber2 py-2">
                <FormInput
                  name="contactNo"
                  title="Contact No"
                  placeholder="00000 00000"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="emailform py-2">
                <FormSelect
                  name="region"
                  title="Region"
                  control={control}
                  options={COUNTRY_LIST.map((x) => ({
                    label: x.name,
                    value: x.code,
                  }))}
                  errors={errors}
                  placeholder="Please select a region"
                />
              </div>
              <div className="passwordform py-2">
                <FormInput
                  name="address"
                  title="Address"
                  placeholder="#ABC, #Street"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="signup-form py-2">
                <div className="w-50">
                  <FormInput
                    name="password"
                    title="Password"
                    type={!show ? "password" : "text"}
                    placeholder="********"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="w-50">
                  <FormInput
                    name="confirmedPassword"
                    title="Confirm Password"
                    type={!show ? "password" : "text"}
                    placeholder="********"
                    register={register}
                    errors={errors}
                  />
                </div>
                <p onClick={() => setShow(!show)} style={{margin:'0px', fontSize:'13px'}}>Show Password</p>
              </div>
              <div className="signup2">
                <Button
                  size="lg"
                  variant="success"
                  type="submit"
                  className="my-3 w-100"
                >
                  Sign Up
                </Button>
              </div>
              <div className="signup2">
                <Button
                  size="lg"
                  variant="success"
                  type="submit"
                  className="my-3 w-100"
                >
                  Go To Login Page
                </Button>
              </div>
            </div>
            <div className="signup-image text-center py-5">
              <img src={signupimage} className="img-fluid" />
            </div>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default Signup2
