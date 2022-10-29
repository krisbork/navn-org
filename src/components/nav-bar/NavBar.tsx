import React, {useState} from 'react';
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
    const [isChecked, setChecked] = useState(true);
    
    return (
        <header>
            <div className="nav-body">
                <h2>
                    <Link to={"/"} onClick={() => setChecked(true)}>ElevTool</Link>
                </h2>
            </div>
            <input type="checkbox" className="nav-toggle" checked={isChecked}/>
            <label className="nav-toggle-label" onClick={() => setChecked(!isChecked)}>
                <span />
                <span />
                <span />
            </label>
            <nav>
                <ul className="nav-items">
                    <li><Link to={"/faq"} onClick={() => setChecked(true)}>FAQ</Link></li>
                    <li><Link to={"/privatlivspolitik"} onClick={() => setChecked(true)}>Privatlivspolitik</Link></li>
                    <li><Link to={"/om"} onClick={() => setChecked(true)}>Om</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;