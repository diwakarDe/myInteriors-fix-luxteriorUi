import React from "react";
import { Container, Row, Col, Breadcrumb, Button, Card } from 'react-bootstrap';
import dashboardlogo from '../../img/Luxterior (1).png';
import './RightNav.css'
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsCalculator } from 'react-icons/bs';
import { SiAltiumdesigner } from 'react-icons/si';
import { IoMdCall } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { FiHelpCircle } from 'react-icons/fi';
import { BsTrash3Fill } from 'react-icons/bs';
const RightNav = () => {
    return (
            <div className="dashboard-nav">
                <div className="dashboard-logo">
                    <img src={dashboardlogo} />
                </div>
                <div className="dashboard-navbar">
                    <ul>
                        <li>
                            <LuLayoutDashboard />
                            <span>Dashboard</span>
                        </li>
                        <li>
                            <BsCalculator />
                            <span>Calculator</span>
                        </li>
                        <li>
                            <SiAltiumdesigner />
                            <span>Interior Designer</span>
                        </li>
                        <li>
                            <IoMdCall />
                            <span>Active Request</span>
                        </li>
                        <li>
                            <MdAccountCircle />
                            <span>My Account</span>
                        </li>
                        <li>
                            <FiHelpCircle />
                            <span>Help & Support</span>
                        </li>
                        <li>
                            <BsTrash3Fill />
                            <span>Trash</span>
                        </li>
                    </ul>
                </div>
            </div>

    )
}


export default RightNav