import React from "react"
import { Container, Table } from "react-bootstrap"
import "./requests.css"
import { useGetRequestsQuery } from "../../services/ticketsServices"

const ActiveRequests = () => {
  const { data: requestsList } = useGetRequestsQuery({})

  // TODO: UPDATE KEYS OVER HERE
  return (
    <>
      <Container>
        <section className="helyou main-wrapper">
          {/* <div className="help-heading"> */}
          <h1 className="mb-4">Latest Tickets</h1>
          {/* </div> */}
          {/* helpcard */}
          {/* <div className="help-card">
                        <Table>
                            <th>
                                Requested By
                            </th>
                            <th>
                                Ticket ID
                            </th>
                            <th>
                                Interior Designer
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Created Date
                            </th>
                            <th>
                                Deadline
                            </th>
                            {
                                requestsList?.data?.map((request: any) => {
                                    return <tr>
                                        <td>
                                            {request.name}
                                            <br />
                                            {request.email}
                                        </td>
                                        <td>
                                            {request.ticketId || '-'}
                                        </td>
                                        <td>
                                            {`${request.contactedTo?.firstName} ${request.contactedTo?.lastName}` || '-'}
                                        </td>
                                        <td>
                                            {request.ticketStatus || 'Open'}
                                        </td>
                                        <td>
                                            {new Date(request.createdAt).toDateString()}
                                        </td>
                                        <td>
                                            {new Date(request.deadline).toDateString() || '-'}
                                        </td>
                                    </tr>
                                })
                            }
                        </Table>
                    </div> */}
          <div className="table-responsive request-table-responsive">
            <table className="table request-table table-striped">
              <thead className="thead-dark shadow-none">
                <tr>
                  <th className="request-head">Requested By</th>
                  <th className="request-head">Email</th>
                  <th className="request-head">Ticket ID</th>
                  <th className="request-head">Interior Designer</th>
                  <th className="request-head">Status</th>
                  <th className="request-head">Created Date</th>
                  <th className="request-head">Deadline</th>
                </tr>
              </thead>
              <tbody>
                {requestsList?.data?.map((request: any) => {
                  return (
                    <tr>
                      <td className="request-data fw-bold">{request.name} </td>
                      <td className="request-data">{request.email}</td>
                      <td className="request-data">
                        {" "}
                        {request.ticketId || "-"}
                      </td>
                      <td className="request-data">
                        {" "}
                        {`${request.contactedTo?.firstName} ${request.contactedTo?.lastName}` ||
                          "-"}
                      </td>
                      <td className="request-data">
                        {" "}
                        <span className="request-status active">
                          {request.ticketStatus || "Open"}
                        </span>
                      </td>
                      <td className="request-data">
                        {" "}
                        {new Date(request.createdAt).toDateString()}
                      </td>
                      <td className="request-data">
                        {" "}
                        {new Date(request.deadline).toDateString() || "-"}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </Container>
    </>
  )
}

export default ActiveRequests
