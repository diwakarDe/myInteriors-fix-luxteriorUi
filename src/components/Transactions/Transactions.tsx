import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Table, Col, Row } from "react-bootstrap";
import './Transactions.css'
import { useGetTransactionLogsQuery } from "../../services/paymentServices";

const PaymentLogs = () => {
    const { data } = useGetTransactionLogsQuery()
    // console.log(data?.data, "check data")

    return (
        <>
            <Container>
                <section className="helyou main-wrapper">
                    <h1 className="mb-4">Transactions</h1>
                    <section className="transaction-section">
                        <div className="table-responsive request-table-responsive">
                            <table className="table request-table table-striped">
                                <thead className="thead-dark shadow-none">


                                    <tr>
                                        <th className="request-head">
                                            Order ID
                                        </th>
                                        <th className="request-head">
                                            Created At
                                        </th>
                                        <th className="request-head">
                                            Updated At
                                        </th>
                                        <th className="request-head">
                                            Payment Date
                                        </th>
                                        <th className="request-head">
                                            Amount
                                        </th>
                                        <th className="request-head">
                                            Status
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data ? data?.data?.map((dataRow: any) => {
                                        const { amount,
                                            createdAt,
                                            orderId,
                                            paymentDate,
                                            paymentStatus,
                                            updatedAt,
                                            userId,
                                            __v,
                                            _id } = dataRow

                                        return (
                                            <React.Fragment key={_id}>
                                                <tr>
                                                    <td className="request-data fw-bold">{orderId} </td>
                                                    <td className="request-data">{createdAt}</td>
                                                    <td className="request-data"> {updatedAt}</td>
                                                    <td className="request-data">{paymentDate}</td>
                                                    <td className="request-data">{amount} </td>
                                                    <td className="request-data"> <span className="request-status active">{paymentStatus}</span></td>

                                                </tr>
                                            </React.Fragment>
                                        )
                                    })
                                        : <>
                                            no data</>}

                                </tbody>
                            </table>
                        </div>
                    </section>
                </section>

            </Container >
        </>
    )
}


export default PaymentLogs;