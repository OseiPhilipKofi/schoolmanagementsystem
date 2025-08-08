import { faThumbsUp, faChalkboardTeacher, faChartLine, faCloudShowersHeavy, faGears, faUserAstronaut, faUsers, faUserShield, faUserTie } from '@fortawesome/free-solid-svg-icons';
import './css/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from '@fortawesome/free-solid-svg-icons/faUserMd';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons/faUserGraduate';
import { Link } from 'react-router-dom';
import { faFacebook, faTelegram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Resizeobserver from '../../observers/observers';

const Footer = () => {
    const { isLarger, isSmaller } = Resizeobserver(document.body);
    return (
        <>
            <div className="footer-wrap ">
                <div className="footer-content"></div>
                <div className="page-functionalities"></div>
                <div className="contact-info">
                    <span className="content-box">
                        <span className="icon">
                            <FontAwesomeIcon icon={ faUsers } />
                        </span>
                        <span className="text">
                            <span className="head">
                                parents / Users
                            </span>
                            <span className="body"></span>
                        </span>
                    </span>
                    <span className="content-box">
                        <span className="icon">
                            <FontAwesomeIcon icon={ faUserMd } />
                        </span>
                        <span className="text">
                            <span className="head">
                                Administration
                            </span>
                            <span className="body"></span>
                        </span>
                    </span>
                    <span className="content-box">
                        <span className="icon">
                            <FontAwesomeIcon icon={ faChalkboardTeacher } />
                        </span>
                        <span className="text">
                            <span className="head">Teachers</span>
                            <span className="body"></span>
                        </span>
                    </span>
                    <span className="content-box">
                        <span className="icon">
                            <FontAwesomeIcon icon={ faUserGraduate } />
                        </span>
                        <span className="text">
                            <span className="head">students</span>
                            <span className="body"></span>
                        </span>
                    </span>
                </div>
                <div className="links-wrap"></div>
                <div className="development-wrap"></div>

                <div className='footer notice-wrapper' >
                <span className="notice-wrap">
                    <span className="icon mb-2 w-100 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={ faUserAstronaut } />
                    </span>
                    <div className="footer-lead bk-blue">
                        <h5 className='footer-header'> Want To Know More ? </h5>
                        <p>
                            Our School Management System is a robust and user-friendly platform designed to streamline the daily operations of our educational institution. It serves as a centralized hub for administrators, teachers, students, and parents to interact, manage, and access important academic and administrative information efficiently.
                        </p>
                    </div>
                </span>
                <span className="notice-wrap">
                    <span className="icon mb-2 w-100 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={ faUserTie } />
                    </span>
                    <div className="footer-lead bk-green">
                        <h5 className='footer-header'>Why the Perfect Choice ? </h5>
                        <p>
                            Our School Management System is a robust and user-friendly platform designed to streamline the daily operations of educational institutions. It serves as a centralized hub for administrators, teachers, students, and parents to interact, manage, and access important academic and administrative information efficiently.
                        </p>
                    </div>

                </span>
                <span className="notice-wrap">
                    <span className="icon mb-2 w-100 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={ faUserShield } />
                    </span>
                    <div className="footer-lead bk-yellow">
                        <h5 className='footer-header'>How to connect with us </h5>
                        <p>
                            Our School Management System is a robust and user-friendly platform designed to streamline the daily operations of educational institutions. It serves as a centralized hub for administrators, teachers, students, and parents to interact, manage, and access important academic and administrative information efficiently.
                        </p>
                    </div>
                </span>





                </div>

                <footer className="footer py-5 mt-5">

                    <div className="footer-container">

                        <div className={`footer-section c-border ${isSmaller ? 'bk-universal' : ''}`}>
                            <h2>Contact Us</h2>
                            <li><strong>Address:</strong> 123 Education Lane, Knowledge City</li>
                            <li><strong>Phone:</strong> (555) 123-4567</li>
                            <li className='ww '><strong>Email:</strong> support@schoolmanagementsystem.com</li>
                            <li><strong>Hours:</strong> Mon-Fri: 7 AM - 6 PM</li>
                        </div>
                        <div className={`footer-section c-border ${isSmaller ? 'bk-universal' : ''}`}>
                            <div className='wrap-top'>
                                <h2>Student Resources</h2>
                                <li>Student Portal</li>
                                <li>Academic Calendar</li>
                                <li>Fee Payment</li>
                                <li>Forms & Documents</li>
                                <li>Feedback & Support</li>
                            </div>
                        </div>
                        <div className={`footer-section c-border ${isSmaller ? 'bk-universal' : ''}`}>
                            <div className='wrap-top'>
                                <h2>Academic Information</h2>
                                <li>Courses Offered</li>
                                <li>Departments</li>
                                <li>Library Resources</li>
                                <li>Extracurricular Activities</li>
                                <li>Upcoming Events</li>
                            </div>
                        </div>
                        <div className="footer-section social-wrap c-border position-relative">
                            <div className="wrap-top">
                                <h4>Follow Us</h4>
                            </div>
                            <div className="social-icons">
                            <Link to='/' >
                                <span className="each-icon">
                                    <FontAwesomeIcon icon={ faWhatsapp }/>
                                </span>
                                <span className="each-text">
                                    Whatsapp
                                </span>

                              </Link>
                            <Link to='/' >
                                <span className="each-icon">
                                    <FontAwesomeIcon icon={ faTelegram }/>
                                </span>
                                <span className="each-text">
                                    Telegram
                                </span>

                              </Link>
                            <Link to='/' >
                                <span className="each-icon">
                                    <FontAwesomeIcon icon={ faFacebook }/>
                                </span>
                                <span className="each-text">
                                    Facebook
                                </span>

                              </Link>
                            <Link to='/' >
                                <span className="each-icon">
                                    <FontAwesomeIcon icon={ faTiktok }/>
                                </span>
                                <span className="each-text">
                                    Tiktok
                                </span>

                              </Link>
                            </div>
                        </div>


                        <div className="footer-section newsletter-wrap">
                            <div className="newsletter w-50 text-center">
                                <h4>Newsletter Signup</h4>
                                <p className="mb-4">Stay updated with the latest news and health tips. Subscribe to our newsletter!</p>

                                <form action="" className="px-3 newsletter-form m-auto">
                                    <input type="email" placeholder="Your Email" id="newsletterEmail" name="email" />
                                    <input type="submit" className="mainbtn" id="suscribe" value="suscribe" />
                                    <div className="messages">
                                        <p className="errMessage" id="errMessage"></p>
                                        <p className="sucMessage" id="sucMessage"></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>

                <footer className= ' footer last-but-one-footer'>
                    <span className="icon icon-resize mb-5 w-100 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={ faCloudShowersHeavy } />
                    </span>

                    <p>
                        <span className="icon mb-5 w-100 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={ faUserGraduate } />
                        </span>
                    </p>

                    <h2 className = "guchild m-auto text-capitalize d-block d-fit-content"> Grow your Child the right way </h2>
                </footer>

                <footer className='footer final-footer'>
                    <div className="footer-bottom">
                        <p className="p-0 m-0">&copy; 2025 - School Name</p>
                        <p className="p-0 m-0">All rights reserved.</p>
                        <p className="p-0 m-0 mb-4"> <Link to="/privacy-policy" className="footer-a">Privacy Policy</Link> | <Link to="/terms-of-service" className="footer-a">Terms of Service</Link></p>
                    </div>
                </footer>

            </div>
        </>
     );
}

export default Footer;