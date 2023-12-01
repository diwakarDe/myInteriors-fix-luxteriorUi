import React, { useEffect, useState } from "react"
import { Form, Button, Container, Modal } from "react-bootstrap"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import "./hireForms.css"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { FormInput } from "../../form"
import { useAddRequestMutation } from "../../../services/ticketsServices"
import { useAppSelector } from "../../../app/hooks"

interface hiringFormProps {
  onHide?: () => void
  show?: boolean
}

interface RequestedUser {
  name: string
  email: string
  contactNo: string
  address: string
}

const HiringForm = ({ onHide = () => {}, show }: hiringFormProps) => {
  const [submitForm, { isError, error, data }] = useAddRequestMutation()

  const [showStep2, setShowStep2] = useState(false)

  const userProfile: any = useAppSelector((state: any) => state.profile)

  const user = userProfile.user

  const [initialState, setInitialState] = useState({
    name: `${user?.firstName} ${user?.lastName}`,
    email: user?.email,
    contactNo: user?.contactNo || "9876543210",
    address: user?.address,
  })

  const [disabled, setDisabled] = useState(true)

  const [ticketNo, setTicketNo] = useState("pending")

  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required("Please enter name"),
      email: yup.string().required("Please enter email"),
      contactNo: yup.string().required("Please enter contact no"),
      address: yup.string().required("Please enter address"),
    }),
  )

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RequestedUser>({
    resolver: schemaResolver,
    defaultValues: initialState,
  })

  // useEffect(() => {
  //     if (error) {
  //         toast.error((error as any).data?.message, { toastId: 44 });
  //     }
  // }, [isError]);

  useEffect(() => {
    if (data) {
      setShowStep2(true)
      setTicketNo(data?.data?.ticketId)
    }
  }, [data])

  const handleClose = () => {
    onHide()
    setShowStep2(false)
  }

  const onSubmit = async (values: any) => {
    const payload = {
      name: values.name,
      email: values.email,
      contactNo: values.contactNo,
      address: values.address,
      contactedTo: sessionStorage.getItem("expertId"),
    }
    submitForm(payload)
  }

  const [buttonText, setButtonText] = useState("Edit")

  const onEditButtonClick = () => {
    if (disabled) {
      setDisabled(false)
      setButtonText("Cancel")
    } else {
      setInitialState({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        contactNo: user.contactNo,
        address: user.address,
      })
      setDisabled(true)
      setButtonText("Edit")
    }
  }

  return (
    <>
      <Container>
        {showStep2 ? (
          <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onHide={handleClose}>
              <div className="headline">
                <p>Your Ticket Number</p>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="headline">
                <p>{ticketNo}</p>
              </div>
            </Modal.Body>
          </Modal>
        ) : (
          <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onHide={handleClose}>
              <div className="headline">
                <p>Please Verify Your Details</p>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-content">
                  <FormInput
                    name="name"
                    title="Name"
                    placeholder="John Doe"
                    register={register}
                    control={control}
                    errors={errors}
                    disabled={disabled}
                  />
                  <FormInput
                    name="email"
                    title="Email Address"
                    placeholder="email@email.com"
                    register={register}
                    errors={errors}
                    disabled={disabled}
                  />
                  <FormInput
                    name="contactNo"
                    title="Contact No"
                    placeholder="***** *****"
                    register={register}
                    errors={errors}
                    disabled={disabled}
                  />

                  <FormInput
                    name="address"
                    title="Address"
                    placeholder="street, address"
                    register={register}
                    errors={errors}
                    disabled={disabled}
                  />

                  <Button
                    size="lg"
                    variant="success"
                    className="my-3 w-100"
                    onClick={onEditButtonClick}
                  >
                    {buttonText}
                  </Button>
                  <Button
                    size="lg"
                    variant="success"
                    type="submit"
                    className="my-3 w-100"
                  >
                    Confirm
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </Container>
    </>
  )
}
export default HiringForm
