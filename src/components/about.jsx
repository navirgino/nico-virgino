import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <title>About</title>
                
                <div className="super_container">
                    {/* Header */}
                    <header className="header">
                        <div className="header_content d-flex flex-row align-items-center justify-content-start">
                            <div className="logo">Virgino<span>.</span>CV</div>
                            <div className="main_nav d-flex flex-row align-items-end justify-content-start">
                                <ul className="d-flex flex-row align-items-center justify-content-start">
                                    <li className="active"><a href="about.html">About</a></li>
                                    <li><a href="skills.html">Skills</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    {/* <li><a href="experience.html">Experience</a></li> */}
                                    <li><a href="education.html">Education</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="testimonials.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                                <div className="header_button ml-auto">
                                    {/* <a href="#">Available for freelance work</a> */}
                                    {/* <div className="d-flex flex-column align-items-center justify-content-center"><img src="../images/download.png" alt="" /></div> */}
                                </div>
                            </div>
                            {/* Menu */}
                            <div className="menu">
                                <div className="menu_content d-flex flex-row align-items-start justify-content-end">
                                    <div className="hamburger ml-auto">menu</div>
                                    <div className="menu_nav text-right">
                                        <ul>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="skills.html">Skills</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            {/* <li><a href="experience.html">Experience</a></li> */}
                                            <li><a href="education.html">Education</a></li>
                                            <li><a href="portfolio.html">Portfolio</a></li>
                                            <li><a href="testimonials.html">Blog</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="content_container">
                        <div className="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">
                            {/* General Information */}
                            <div className="general_info d-flex flex-xl-column flex-md-row flex-column">
                                <div>
                                    <div className="general_info_image">
                                        <div id="myFace" className="background_image" style={{backgroundImage: 'images/nico.jpg'}} />
                                        {/* <div className="header_button_2">
                                            <a href="#">Available for freelance work</a>
                                            <div className="d-flex flex-column align-items-center justify-content-center"><img src="images/download.png" alt="" /></div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="general_info_content">
                                    <div className="general_info_content_inner mCustomScrollbar" data-mcs-theme="minimal-dark">
                                        <div className="general_info_title">General Information</div>
                                        <ul className="general_info_list">
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_1.png" alt="" /></div>
                                                <div className="general_info_text">Name: <span>Nicola Virgino</span></div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="general_info_icon d-flex flex-column align-items-start justify-content-center" />
                                                <div className="general_info_text">Location: <span>Texas, USA</span></div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_2.png" alt="" /></div>
                                                <div className="general_info_text">Date of Birth: <span>January 8th, 1994</span></div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_3.png" alt="" /></div>
                                                <div className="general_info_text"><a href="mailto:contact@linque.com?subject=Job_Inquiry">nicovirgino@gmail.com</a></div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_4.png" alt="" /></div>
                                                <div className="general_info_text">210-273-5613</div>
                                            </li>
                                            {/* <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_5.png" alt="" /></div>
                                                <div className="general_info_text"><a href="mailto:nicovirgino@gmail.com">nicovirgino@gmail.com</a></div>
                                            </li> */}
                                        </ul>
                                        {/* Social */}
                                        <div className="social_container">
                                            <ul className="d-flex flex-row align-items-start justify-content-start">
                                                <li><a href="https://github.com/navirgino" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"  /></a></li>
                                                <li><a  href="https://www.linkedin.com/in/navirgino/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                                                <li><a href="https://twitter.com/nicovirgino" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Main Content */}
                            <div className="main_content">
                                <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
                                    <div className="main_subtitle">Software Developer</div>
                                    <div className="main_title">I'm Nico!</div>
                                </div>
                                <div className="main_content_scroll mCustomScrollbar" data-mcs-theme="minimal-dark">
                                    <div className="about_content">
                                        <div className="about_title">Description</div>
                                        <div className="about_text">
                                            <p>Forever student to science, and forever lover of tech.
                                                I often consider myself as a full-time tinkerer.
                                                I love fashion if you need clothing tips too.
                                            </p>
                                        </div>
                                        {/* Loaders */}
                                        <div className="loaders clearfix">
                                            {/* Loader */}
                                            <div className="loader_container">
                                                <div className="loader" data-perc="0.75" />
                                                <div className="loader_content text-center">
                                                    <div className="loader_title">Java</div>
                                                    <div className="loader_subtitle">How vast.</div>
                                                </div>
                                            </div>
                                            {/* Loader */}
                                            <div className="loader_container">
                                                <div className="loader" data-perc="0.83" />
                                                <div className="loader_content text-center">
                                                    <div className="loader_title">MySQL</div>
                                                    <div className="loader_subtitle">Weird passion for db design.</div>
                                                </div>
                                            </div>
                                            {/* Loader */}
                                            <div className="loader_container">
                                                <div className="loader" data-perc="0.25" />
                                                <div className="loader_content text-center">
                                                    <div className="loader_title">C#</div>
                                                    <div className="loader_subtitle">I dabble in game development.</div>
                                                </div>
                                            </div>
                                            {/* Loader */}
                                            <div className="loader_container">
                                                <div className="loader" data-perc="0.95" />
                                                <div className="loader_content text-center">
                                                    <div className="loader_title">React</div>
                                                    <div className="loader_subtitle">I made this site using react.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}