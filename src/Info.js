import React from "react";
import avatar from "./yoyo.jpg";
import logo_mail from "./email.png"
import logo_link from "./link.png"
import "./index.css";

export default function Info() {
    return (
        <div className="header">
            <img src={avatar} alt="avatar" className="info--img"></img>
            <h1>Bhanu Prakash</h1>
            <p className="info--para">Frontend Developer</p>
            <small>bhanuprakash.website</small>
            <div className="buttons">
                <button className="mail-btn"><img src={logo_mail} alt="mail's logo" className="mail-img"/><span>Email</span></button>
                <button className="link-btn"><img src={logo_link} alt="linkedin's logo" className="link-img" /><span>LinkedIn</span></button>
            </div>
        </div>
    )
}
