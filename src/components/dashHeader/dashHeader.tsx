import React, { useEffect, useState } from "react"
import { Container, NavLink } from "react-bootstrap"
import "./dashHeader.css"
import dashboardlogo from "../../img/Luxterior (1).png"
import headerimage from "../../img/header-image.png"
import roomcard1 from "../../img/roomcard1.jpg"
import { GrFavorite } from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import {
  useSearchRoomsMutation,
  useSearchTicketsMutation,
} from "../../services/ticketsServices"

const DashHeader = () => {
  const [searchBar, setSearchBar] = useState("")
  const navigate = useNavigate()
  const url = new URL(window.location.href)
  const type = url.searchParams.get("type")
  console.log("type", type)
  const [searchTickets] = useSearchTicketsMutation()
  const [searchRooms] = useSearchRoomsMutation()
  const submitsearch = () => {
    const payload = {
      criteria: searchBar,
    }
    if (type === "tickets") {
      searchTickets(searchBar)
    } else if (type === "rooms") {
      searchRooms(payload)
    }
  }

  return (
    <div className="dashboard-header">
      <div className="top-header">
        <div className="header-nav">
          <ul>
            {/* <li className={"item-link"}>
              <NavLink
                onClick={() => {
                  navigate("/dash/favs")
                }}
              >
                My Designers
              </NavLink>
            </li> */}
            <li className={"item-link"}>
              <NavLink
                onClick={() => {
                  navigate("/dash/favs")
                }}
                style={{ fontSize: "20px", fontFamily: "Exo 2" }}
              >
                <GrFavorite className="heart" /> Favorites
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header-icon">
          <ul>
            <li>
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchBar(e.target.value)}
              />
            </li>
            <p style={{ cursor: "pointer", margin: "0px" }} onClick={() => submitsearch()}>
              Seach
            </p>
            <li>
              <a href="#" className="button-consult">
                Consult a Designer
              </a>
            </li>
            <li>
              <img
                src={headerimage}
                alt="Header"
                onClick={() => navigate("/dash/account")}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashHeader
