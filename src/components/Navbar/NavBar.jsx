import React from 'react'
import './NavBar.sass';
import { Link} from "react-router-dom";

function NavBar() {
    return (


    <nav className="navbar navbar-expand-lg navBar--bg">
        <Link to='/'>
        <img className="navbar--img"src="assets/png/logo-acme.png" alt="logo-acme"  />
        </Link>
        <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><img src="assets/png/lines.png" alt="hamburger-icon"/></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <button className="nav-item login-btn">LOGIN</button>
            </div>
            </div>
    </nav>


    );
}

export default NavBar