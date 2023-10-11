import React from "react";
import logo_twitter from "./twitter.jpeg"
import logo_fb from "./fb.jpeg"
import logo_insta from "./insta.jpeg"
import logo_github from "./github.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={logo_twitter} alt="twitter logo" className="footer-img twitter"/>
            <img src={logo_fb} alt="fb logo" className="footer-img fb"/>
            <img src={logo_insta} alt="insta logo" className="footer-img insta"/>
            <img src={logo_github} alt="github logo" className="footer-img github"/>
            {/* <img src="https://www.clipartmax.com/png/small/199-1994855_oddproton-github-logo-png-white.png" alt="Oddproton - Github Logo Png White @clipartmax.com" className="footer-img github"/> */}
        </div>
    )
}