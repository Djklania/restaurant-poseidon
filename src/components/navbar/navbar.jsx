import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            Navbar
            <Link to="/menu"> GO TO MENU </Link>
        </div>
    )
}

export default Navbar;