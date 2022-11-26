import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className={`bg-secondary`}>
            Menu
            <Link to="/"> GO TO HOME/NAVBAR </Link>
        </div>
    )
}

export default Menu;