import React from 'react';
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h2>
                <Link to={"/"}>ElevTool</Link>
            </h2>
            <ul className="nav-items">
                <li><Link to={"/faq"}>FAQ</Link></li>
                <li><Link to={"/privatlivspolitik"}>Privatlivspolitik</Link></li>
                <li><Link to={"/om"}>Om</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;