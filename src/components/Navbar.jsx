import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";



export default function Navbar(){
    const [navIsOpen, setNavIsOpen] = useState(true);


    useEffect(() => {
        if(isMobile) setNavIsOpen(false);
    }, [])
    return(
        <nav className="absolute w-full py-2 px-4 top-0 left-0 border-b-2 z-40 flex flex-col lg:flex-row items-center justify-between shadow-xl">
            <div className="flex flex-row items-center justify-between w-full lg:w-auto gap-5">
                <Link to="/" className="font-semibold">animekizi.org</Link>
                <i onClick={() => setNavIsOpen(!navIsOpen)} className="fa-solid fa-bars fa-2x lg:hidden cursor-pointer"></i>
            </div>
            {navIsOpen && (
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <a className="flex flex-row items-center bg-white text-black gap-2 py-2 px-4 rounded-full" href="https://www.buymeacoffee.com/animekizi" rel="noreferrer" target="_blank">Buy us a coffee!<img src="/bmc-icon.png" width={16} height={16} alt="" /></a>
                    {window.location.pathname === '/' ? <a href="#home">Home</a> : <Link to="/#home">Home</Link>}
                    {window.location.pathname === '/' ? <a href="#about">About</a> : <Link to="/#about">About</Link>}
                    {window.location.pathname === '/' ? <a href="#usage">How To Use</a> : <Link to="/#usage">How To Use</Link>}
                    {window.location.pathname === '/' ? <a href="#faq">FAQ</a> : <Link to="/#faq">FAQ</Link>}
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">ToS</Link>
                    <Link to="/latest">Latest Downloads</Link>
                </div>
            )}
      </nav>
    )
}