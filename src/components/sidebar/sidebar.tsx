import React from "react"
import "./sidebar.css"
import dashboardlogo from "../../img/Luxterior (1).png"
import { RxDashboard } from "react-icons/rx"
import { MdDesignServices } from "react-icons/md"
import { BiGitPullRequest } from "react-icons/bi"
import { BsClipboardData } from "react-icons/bs"
import { MdOutlineAccountBalanceWallet, MdOutlinePayment } from "react-icons/md"
import { LuHelpCircle } from "react-icons/lu"
import { BiTrashAlt } from "react-icons/bi"
import { CgLogOut } from "react-icons/cg"
import { useNavigate } from "react-router-dom"
import { AUTH_TOKEN } from "../../constants"
import { NavLink } from "react-bootstrap"

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className="dashboard-nav">
      <div className="dashboard-logo" onClick={() => navigate("/")}>
        <img src={dashboardlogo} />
      </div>
      <div className="dashboard-navbar">
        <ul>
          <li>
            <NavLink onClick={() => navigate("/dash/main?type=rooms")}>
              <RxDashboard /> Dashboard
            </NavLink>
          </li>
          {/*
            <li>
              <NavLink>Calculator</NavLink>
            </li>
          */}
          <li>
            <NavLink onClick={() => navigate("/dash/experts")}>
              <MdDesignServices />
              Designers
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => navigate("/dash/requests?type=tickets")}>
              <BiGitPullRequest />
              Active Requests
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => navigate("/dash/account")}>
              <MdOutlineAccountBalanceWallet />
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => navigate("/dash/payment")}>
              <MdOutlinePayment />
              Payment Plans
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => navigate("/dash/transactions")}>
              <BsClipboardData />
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => navigate("/dash/help")}>
              <LuHelpCircle />
              Help & Support
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => navigate("/dash/trash")}>
              <BiTrashAlt />
              Trash
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                navigate("/")
              }}
            >
              <CgLogOut />
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
