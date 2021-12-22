import React from 'react';
import profile from '../images/profile.jpg'

export default function Info() {
    return (
        <div className="info">
            <img className="info--profile" src={profile} alt="profile" />
            <h1 className="info--name">Anantha Boudmanabhan</h1>
            <p className="info--role">Full Stack JavaScript Developer</p>
            <p className="info--website">&lt; - - 🌐 Website under construction 👷‍♂️🏗 - - &gt;</p>
            <div className="info--buttons">
                <a href="mailto:ananth1995.july22@gmail.com" className="info--btn-email">
                    <i className="fas fa-envelope"></i><span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/anantha-boudmanabhan-thanikachalam-9272b319b" target="_blank" rel="noreferrer" className="info--btn-linkedin">
                    <i className="fab fa-linkedin"></i><span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}