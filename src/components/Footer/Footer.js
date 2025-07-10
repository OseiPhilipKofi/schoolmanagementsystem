import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import './css/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faChartLine, faCloudShowersHeavy, faGears, faUserAstronaut, faUsers, faUserShield, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons/faUserMd';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons/faUserGraduate';
import { Link } from 'react-router-dom';
import { faFacebook, faTelegram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
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


                <footer className="footer py-5 mt-5">
                    <span className="icon mb-5 w-100 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={ faUserAstronaut } />
                    </span>
                    <div className="footer-lead bk-blue">
                        <h5 className='footer-header'> Want To Know More ? </h5>
                        <p>
                            Our School Management System is a robust and user-friendly platform designed to streamline the daily operations of our educational institution. It serves as a centralized hub for administrators, teachers, students, and parents to interact, manage, and access important academic and administrative information efficiently.
                        </p>
                    </div>


                    <div className="footer-container">

                        <div  className="footer-section c-border d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>What Parents Should Expect </h2>
                                <li>Secure access to their child's academic records, attendance, and progress reports.</li>
                                <li>Timely notifications and communication from teachers and school administration.</li>
                                <li>Easy retrieval of student reports and exam results through a dedicated parent portal.</li>
                                <li>Transparency in their child's academic journey and school activities.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                        <div className="footer-section c-border d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>What Students Should Expect</h2>
                                <li>Access to their personal academic records, attendance, and grades.</li>
                                <li>Ability to view className schedules, assignments, and exam timetables.</li>
                                <li>Timely updates on school events and announcements.</li>
                                <li>A streamlined process for retrieving their academic reports successfully.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                        <div className="footer-section c-border d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>What Teachers Should Expect</h2>
                                <li>A comprehensive interface to fill and submit student reports and grades efficiently.</li>
                                <li>Tools to track attendance and monitor student performance.</li>
                                <li>Communication channels to interact with students and parents.</li>
                                <li>Access to scheduling tools for classes, exams, and events.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                        <div className="footer-section c-border d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>What Administration Is Up To and Bringing</h2>
                                <li>Centralized management of student enrollment, records, and academic data.</li>
                                <li>Generation of detailed reports and analytics to support decision-making.</li>
                                <li>Implementation of secure access controls to protect sensitive information.</li>
                                <li>Continuous improvements to enhance user experience and system capabilities.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>
                    </div>


                </footer>


                <footer className="footer py-5 mt-5">

                    <span className="icon mb-5 w-100 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={ faUserTie } />
                    </span>
                    <div className="footer-lead bk-green">
                        <h5 className='footer-header'>Why the Perfect Choice ? </h5>
                        <p>
                            Our School Management System is a robust and user-friendly platform designed to streamline the daily operations of educational institutions. It serves as a centralized hub for administrators, teachers, students, and parents to interact, manage, and access important academic and administrative information efficiently.
                        </p>
                    </div>


                    <div className="footer-container">
                        <div className="footer-section c-border d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>Why choose us</h2>
                                <li>Comprehensive academic management</li>
                                <li>User-friendly interface for all roles</li>
                                <li>Secure and reliable data handling</li>
                                <li>Efficient communication tools</li>
                                <li>Continuous support and updates</li>
                            </div>

                            <span className="sharp">
                                <span className="icon w-100 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={ faThumbsUp } />
                                </span>
                                <div className="btn pagebtnmain">Read More</div>
                            </span>

                        </div>

                        <div className="footer-section c-border d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>Our Ambitions</h2>
                                <li>Empower students and educators</li>
                                <li>Enhance learning experiences</li>
                                <li>Streamline school administration</li>
                                <li>Foster community engagement</li>
                            </div>
                            <span className="sharp">
                                <span className="icon w-100 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={ faChartLine } />
                                </span>
                                <div className="btn pagebtnmain">Read More</div>
                            </span>

                        </div>


                        <div className="footer-section c-border d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>Page functionalities</h2>
                                <li>Real-time notifications</li>
                                <li>Parent and teacher portals</li>
                                <li>className scheduling and attendance</li>
                                <li>Report generation and analytics</li>
                                <li>Secure access to student records</li>
                            </div>
                            <span className="sharp">
                            <span className="icon w-100 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={ faGears } />
                                </span>

                                <div className="btn pagebtnmain">Read More</div>
                            </span>

                        </div>

                        <div className="footer-section c-border d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>About Us</h2>
                                <li>Our School Management System is dedicated to providing a seamless and efficient platform for managing all aspects of school administration and academics.</li>
                                <li>We strive to empower educators, students, and parents through innovative technology and user-friendly design.</li>
                                <li>Learn more about our commitment to enhancing the educational experience.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                    </div>
                </footer>




                <footer className="footer">

                    <span className="icon mb-5 w-100 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={ faUserShield } />
                    </span>
                    <div className="footer-lead bk-yellow">
                        <h5 className='footer-header'>How to connect with us </h5>
                        <p>
                            Our School Management System is a robust and user-friendly platform designed to streamline the daily operations of educational institutions. It serves as a centralized hub for administrators, teachers, students, and parents to interact, manage, and access important academic and administrative information efficiently.
                        </p>
                    </div>

                    <div className="footer-container">

                        <div className="footer-section c-border">
                            <h2>Contact Us</h2>
                            <li><strong>Address:</strong> 123 Education Lane, Knowledge City</li>
                            <li><strong>Phone:</strong> (555) 123-4567</li>
                            <li className='ww '><strong>Email:</strong> support@schoolmanagementsystem.com</li>
                            <li><strong>Hours:</strong> Mon-Fri: 7 AM - 6 PM</li>
                        </div>
                        <div className="footer-section c-border">
                            <div className='wrap-top'>
                                <h2>Student Resources</h2>
                                <li>Student Portal</li>
                                <li>Academic Calendar</li>
                                <li>Fee Payment</li>
                                <li>Forms & Documents</li>
                                <li>Feedback & Support</li>
                            </div>
                        </div>
                        <div className="footer-section c-border">
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
                        <p className="p-0 m-0">&copy; 2024 - 2025 Asamang SDA Hospital</p>
                        <p className="p-0 m-0">All rights reserved.</p>
                        <p className="p-0 m-0 mb-4"> <Link to="/privacy-policy" className="footer-a">Privacy Policy</Link> | <Link to="/terms-of-service" className="footer-a">Terms of Service</Link></p>
                    </div>
                </footer>

            </div>
        </>
     );
}

export default Footer;