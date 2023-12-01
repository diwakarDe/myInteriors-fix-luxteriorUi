import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import './payments.css'
import { useGetRemainingSubsQuery } from "../../services/paymentServices";

const PaymentVerify = () => {
    const { data: subs } = useGetRemainingSubsQuery({});

    useEffect(() => {
        if (subs)
            localStorage.setItem("GENERATIONS", subs.data);
    }, [subs]);

    return (
        <>
            <Container>
                <section className="helyou main-wrapper">
                    <h1>Payment Successful</h1>
                </section>
            </Container >
        </>
    )
}


export default PaymentVerify;