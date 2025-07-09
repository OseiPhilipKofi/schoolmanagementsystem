import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import './css/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faChartLine, faCloudShowersHeavy, faGears, faUserAstronaut, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons/faUserMd';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons/faUserGraduate';
import { Link } from 'react-router-dom';

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

                    <h4 className='footer-header'> Want To Know More ? </h4>
                    <p>
                        Our School Management System is a robust and user-friendly platform designed to streamline the daily operations of our educational institution. It serves as a centralized hub for administrators, teachers, students, and parents to interact, manage, and access important academic and administrative information efficiently.
                    </p>

                    <div className="footer-container">

                        <div  className="footer-section d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>What Parents Should Expect </h2>
                                <li>Secure access to their child's academic records, attendance, and progress reports.</li>
                                <li>Timely notifications and communication from teachers and school administration.</li>
                                <li>Easy retrieval of student reports and exam results through a dedicated parent portal.</li>
                                <li>Transparency in their child's academic journey and school activities.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                        <div className="footer-section d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>What Students Should Expect</h2>
                                <p>Access to their personal academic records, attendance, and grades.</p>
                                <p>Ability to view className schedules, assignments, and exam timetables.</p>
                                <p>Timely updates on school events and announcements.</p>
                                <p>A streamlined process for retrieving their academic reports successfully.</p>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                        <div className="footer-section d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>What Teachers Should Expect</h2>
                                <p>A comprehensive interface to fill and submit student reports and grades efficiently.</p>
                                <p>Tools to track attendance and monitor student performance.</p>
                                <p>Communication channels to interact with students and parents.</p>
                                <p>Access to scheduling tools for classes, exams, and events.</p>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                        <div className="footer-section d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>What Administration Is Up To and Bringing</h2>
                                <p>Centralized management of student enrollment, records, and academic data.</p>
                                <p>Generation of detailed reports and analytics to support decision-making.</p>
                                <p>Implementation of secure access controls to protect sensitive information.</p>
                                <p>Continuous improvements to enhance user experience and system capabilities.</p>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>
                    </div>


                </footer>


                <footer className="footer">

                    <span className="icon mb-5 w-100 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={ faUserTie } />
                    </span>


                    <h4 className='footer-header'>Why the Perfect Choice ? </h4>
                    <p>
                        Our School Management System is a robust and user-friendly platform designed to streamline the daily operations of educational institutions. It serves as a centralized hub for administrators, teachers, students, and parents to interact, manage, and access important academic and administrative information efficiently.
                    </p>

                    <div className="footer-container">
                        <div className="footer-section d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                            <h2>Why choose us</h2>
                            <p>Comprehensive academic management</p>
                            <p>User-friendly interface for all roles</p>
                            <p>Secure and reliable data handling</p>
                            <p>Efficient communication tools</p>
                            <p>Continuous support and updates</p>
                        </div>

                        <span className="sharp">
                            <span className="icon w-100 d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={ faThumbsUp } />
                            </span>
                            <div className="btn pagebtnmain">Read More</div>
                        </span>

                    </div>

                    <div className="footer-section d-flex flex-column justify-content-between align-items-center">
                        <div className='wrap-top'>
                            <h2>Our Ambitions</h2>
                            <p>Empower students and educators</p>
                            <p>Enhance learning experiences</p>
                            <p>Streamline school administration</p>
                            <p>Foster community engagement</p>
                        </div>
                        <span className="sharp">
                            <span className="icon w-100 d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={ faChartLine } />
                            </span>
                            <div className="btn pagebtnmain">Read More</div>
                        </span>

                    </div>


                    <div className="footer-section d-flex flex-column justify-content-between align-items-center">
                        <div className='wrap-top'>
                            <h2>Page functionalities</h2>
                            <p>Real-time notifications</p>
                            <p>Parent and teacher portals</p>
                            <p>className scheduling and attendance</p>
                            <p>Report generation and analytics</p>
                            <p>Secure access to student records</p>
                        </div>
                        <span className="sharp">
                        <span className="icon w-100 d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={ faGears } />
                            </span>

                            <div className="btn pagebtnmain">Read More</div>
                        </span>

                    </div>




                        <div className="footer-section d-flex flex-column justify-content-between align-items-center">
                            <div className='wrap-top'>
                                <h2>About Us</h2>
                                <p>Our School Management System is dedicated to providing a seamless and efficient platform for managing all aspects of school administration and academics.</p>
                                <p>We strive to empower educators, students, and parents through innovative technology and user-friendly design.</p>
                                <p>Learn more about our commitment to enhancing the educational experience.</p>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>
                        <div className="footer-section">
                            <h2>Contact Us</h2>
                            <p><strong>Address:</strong> 123 Education Lane, Knowledge City</p>
                            <p><strong>Phone:</strong> (555) 123-4567</p>
                            <p className='ww '><strong>Email:</strong> support@schoolmanagementsystem.com</p>
                            <p><strong>Hours:</strong><br/> Mon-Fri: 8 AM - 6 PM,<br/> Sat: 9 AM - 1 PM</p>
                        </div>
                        <div className="footer-section">
                            <h2>Student Resources</h2>
                            <ul>
                                <p>Student Portal</p>
                                <p>Academic Calendar</p>
                                <p>Fee Payment</p>
                                <p>Forms & Documents</p>
                                <p>Feedback & Support</p>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h2>Academic Information</h2>
                            <ul>
                                <p>Courses Offered</p>
                                <p>Departments</p>
                                <p>Library Resources</p>
                                <p>Extracurricular Activities</p>
                                <p>Upcoming Events</p>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <i className="fa-brands fa-square-whatsapp"></i>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-telegram"></i>
                                <i className="fa-brands fa-tiktok"></i>
                            </div>
                        </div>
                        <div className="footer-section">
                            <div className="newsletter w-50 text-center">
                                <h4>Newsletter Signup</h4>
                                <p className="mb-4">Stay updated with the latest news and health tips. Subscribe to our newsletter!</p>

                                <form action="" className="px-3 newsletter-form m-auto">
                                    <input type="email" placeholder="Your Email" id="newsletterEmail" name="email" className="text-white" />
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