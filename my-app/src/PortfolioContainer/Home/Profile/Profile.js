import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";

export default function Profile() {
    return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/carlosvasquez1/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://github.com/carvasquez206'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    </div>
                </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello I'm <span className="highlighted-text">Carlos</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}   
                        <h1>
                            {" "} 
                            <Typical
                            loop={Infinity} 
                            steps={[
                                "Ethusiastic Dev 🔥",
                                1000,
                                "Full Stack Developer 🥶",
                                1000,
                                "Mern Stack Dev 🤡",
                                1000,
                                "Cross Platform Dev 🎃",
                                1000,
                                "React/React Native Dev 🔊",
                                1000,
                            ]}
                        />
                        </h1>
                        <span className='profile-role-tagline'>
                        For any inqueries contact me at carlos96831@gmail.com
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{""}
                    </button>
                    <a href='Carlos_Vasquez_Resume.pdf' download='Carlos Carlos_Vasquez_Resume.pdf'>
                        <button className='btn highlighted-btn'>Resume/CV</button>
                    </a>
                </div>
            </div> 
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
    )
}