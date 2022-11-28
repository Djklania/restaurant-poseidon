import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <div className="bg-primary w-full flex py-2 justify-between overflow-hidden">
            <img className="w-[100px] h-[100px]" src='src\assets\images\Trident Logo.svg' alt="Trident Logo"/>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 text-white'>
                            <Link to="/menu" className={` font-poppins text-[18px] mr-10`}>Menu</Link>
                            <Link to="/about" className={` font-poppins text-[18px] mr-5`}>About</Link>
            </ul>

            {/* Mobile View */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img className="w-[60px] object-contain mr-2" src="src\assets\images\Hamburger icon.svg" alt='Hamburger Icon'
                onClick={() => setToggle(!toggle)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1 text-white'>
                        <Link to="/menu" className={` font-poppins text-[18px] mb-4`}>Menu</Link>
                        <Link to="/about" className={` font-poppins text-[18px]`}>About</Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;