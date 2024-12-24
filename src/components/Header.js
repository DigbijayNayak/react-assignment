import React from "react";
import Home from '../home.svg'
import { useNavigate } from "react-router";
const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={Home} alt="Logo" width="40" height="40" class="d-inline-block align-text-top" />
                    </a>
                    <button class="btn btn-dark" type="submit" onClick={() => navigate("/")}>Logout</button>
                </div>
            </nav>
        </>
    )
}

export default Header;