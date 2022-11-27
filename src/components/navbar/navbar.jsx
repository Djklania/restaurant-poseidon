import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-primary w-full flex justify-between overflow-hidden">
            <img className="w-[100px] h-[100px]" src='src\assets\images\Trident Logo.svg' alt="Trident Logo"></img>
            
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 text-white'>
                            <Link to="/menu" className='mr-10'>Menu</Link>
                            <Link to="/about" className='mr-10'>About</Link>
            </ul>
        </div>
    )
}

export default Navbar;