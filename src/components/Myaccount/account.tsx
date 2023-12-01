import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import accountbanner from "../../img/bannerimage.png"
import modalimage from "../../img/modalimage.png"
import "./account.css"
import signupimage from "../../img/signupimage.png"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { FormInput, FormSelect } from "../form"
import { COUNTRY_LIST } from "../../constants"
import { Form, Button } from "react-bootstrap"
import {
  useEditRegisterUserMutation,
  useGetRegisterUserQuery,
} from "../../services/authServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { AiOutlineCamera } from "react-icons/ai"
import { values } from "lodash"

interface room1Props {}

interface AccountUser {
  firstName: string
  lastname: string
  email: string
  contactNo: string
  region: any
  address: string
}

interface FormSelectProps {
  // ... other properties
  defaultValue?: any
}

const Account = (props: room1Props) => {
  const [readOnly, setReadOnly] = useState(true)
  const [editCencelButton, setEditCencelButton] = useState("Edit")

  const [submitForm, { isError, error, data }] = useEditRegisterUserMutation()

  const schemaResolver = yupResolver(
    yup.object().shape({
      firstName: yup.string().required("Please enter first name"),
      lastname: yup.string().required("Please enter last name"),
      email: yup.string().email().required("Please enter an email"),
      contactNo: yup.string().required("Please enter a valid phone no"),
      region: yup.mixed().required("Please select a region"),
      address: yup.string().required("Please enter your address"),
    }),
  )
  const { data: userData } = useGetRegisterUserQuery()

  console.log("userData", userData)

  const defaultValue = {
    firstName: userData?.firstName,
    lastname: userData?.lastname,
    email: userData?.email,
    contactNo: userData?.contactNo,
    region: userData?.region,
    address: userData?.address,
  }
  const {
    register,
    control,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm<any>({
    defaultValues: defaultValue,
    resolver: schemaResolver,
  })
  // const onSubmit = async (values: any) => {

  //    const formdata = new FormData()
  //   const payload = {
  //     firstName: values.firstName,
  //     lastName: values.lastname,
  //     email: values.email,
  //     contactNo: values.contactNo,
  //     address: values.address,
  //     region: values.region,
  //     // username: "Amanddeep",
  //     // password: values.password,
  //     // username: Math.random()
  //   }
  //   // window.alert(payload)

  //   submitForm(payload)
  // }

  const onSubmit = async (values: any) => {
    const selectedRegion = values.region

    const formdata = new FormData()

    formdata.append("firstName", values.firstName)
    formdata.append("lastName", values.lastname)
    formdata.append("email", values.email)
    formdata.append("contactNo", values.contactNo)
    formdata.append("address", values.address)
    formdata.append("region", selectedRegion?.value)

    submitForm(formdata)
  }

  // console.log(getValues(), "check values", defaultValue)
  // useEffect(() => {
  //   if (data?.data?.message) {
  //     setReadOnly(false)
  //   }
  // }, [error])

  // useEffect(() => {
  //     if (error) {
  //         toast.error((error as any).data?.message, { toastId: 44 });
  //     }
  // }, [isError]);

  useEffect(() => {
    if (data?.message) {
      toast.success(data?.message, { toastId: 1 })
    }
  }, [data])

  const onEditButtonClick = () => {
    if (readOnly) {
      setReadOnly(false)
      setEditCencelButton("Cancel")
    } else {
      setReadOnly(true)
      setEditCencelButton("Edit")
    }
  }

  return (
    <>
      <Container fluid>
        <section className="account-banner main-wrapper">
          {/* <div className="banner-image pt-0">
            <img src={accountbanner} />
          </div> */}
          <div className="banner-section"></div>
          <div>
            <div></div>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="model-item d-md-flex">
              <div className="d-flex align-items-center gap-30">
                <div className="position-relative">
                  <div className="girl-image">
                    <img src={modalimage} />
                  </div>
                  <Form.Control
                    type="file"
                    className="d-none"
                    id="changeImage"
                  />
                  <label htmlFor="changeImage" className="camera-icon">
                    <span className="camera">
                      <AiOutlineCamera />
                    </span>
                  </label>
                </div>
                <div className="model-text">
                  <h1>Varuna Desai</h1>
                  <p className="user-occp">Professor</p>
                </div>
              </div>
              <div className="create-button">
                <Button
                  type={"submit"}
                  // onClick={!readOnly ? () => setReadOnly(true) : () => null}
                  className="save-button"
                >
                  Save
                </Button>
                <Button
                  variant="transparent"
                  onClick={onEditButtonClick}
                  className="cancel-button"
                >
                  {editCencelButton}
                </Button>
              </div>
            </div>
            <div className="signin-form">
              <div className="form-content">
                <div className="signup-form d-block">
                  <Row>
                    <Col md={6}>
                      <div className="w-100 mb-4">
                        <FormInput
                          className="signup-field"
                          name="firstName"
                          title="First Name"
                          defaultValue={userData?.firstName}
                          register={register}
                          disabled={readOnly}
                          errors={errors}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="w-100 i-spece-two mb-4">
                        <FormInput
                          className="signup-field"
                          name="lastname"
                          title="Last Name"
                          placeholder="Last Name"
                          register={register}
                          defaultValue={userData?.lastname as any}
                          disabled={readOnly}
                          errors={errors}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="emailform mb-4">
                  <FormInput
                    className="signup-field"
                    name="email"
                    title="Email ID"
                    placeholder="sample@sample.com"
                    register={register}
                    defaultValue={userData?.email}
                    disabled={readOnly}
                    errors={errors}
                  />
                </div>
                <div className="phonenumber2 mb-4">
                  <FormInput
                    className="signup-field"
                    name="contactNo"
                    type="number"
                    title="Contact No"
                    placeholder="00000 00000"
                    defaultValue={userData?.contactNo}
                    register={register}
                    disabled={readOnly}
                    errors={errors}
                  />
                </div>
                <div className="emailform mb-4">
                  <FormSelect
                    name="region"
                    title="Region"
                    control={control}
                    options={COUNTRY_LIST.map((x) => ({
                      label: x.name,
                      value: x.code,
                    }))}
                    errors={errors}
                    disabled={readOnly}
                    placeholder="Please select a region"
                  />
                </div>
                <div className="passwordform mb-4">
                  <FormInput
                    className="signup-field"
                    name="address"
                    title="Address"
                    placeholder="#ABC, #Street"
                    register={register}
                    defaultValue={userData?.address}
                    disabled={readOnly}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </Form>
        </section>
      </Container>
    </>
  )
}

export default Account
