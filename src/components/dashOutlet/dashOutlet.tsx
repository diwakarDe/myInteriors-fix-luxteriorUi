import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import HomeNavbar from "../navbars/navbar"
import { Outlet } from "react-router-dom"
import isAuthenticated from "../../common/isAuthenticated"
import SideBar from "../sidebar/sidebar"
import DashHeader from "../dashHeader/dashHeader"
import { useGetRemainingSubsQuery } from "../../services/paymentServices"

const DashWrapper = () => {
    const { data: subs } = useGetRemainingSubsQuery({}, {
        pollingInterval: 4000
    });

    useEffect(() => {
        if (subs)
            localStorage.setItem("GENERATIONS", subs.data);
    }, [subs]);

    return (
        <>
            <div className="dashboard-wrapper">
                <Container fluid>
                    <Row>
                        <DashHeader />
                    </Row>
                    <Row>
                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DashWrapper
