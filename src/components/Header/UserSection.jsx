import React from "react";
import { Dropdown } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";

import user from "../../assets/images/user.jpg";

const UserSection = () => (
    <div className="nav-right">
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                <div className="profile-container">
                    <ChevronDown className="arrow-icon" size={16} />
                    <div className="profile-item-left">
                        <div className="welcome-text">Welcome back</div>
                        <div className="user-text">user</div>
                    </div>
                    <div className="profile-item-right">
                        <img src={user} />
                    </div>
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="fade-in">
                <Dropdown.Item href="#/action-1">link 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">link 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">link 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
);

export default UserSection;