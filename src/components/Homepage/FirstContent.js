import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faGears, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import pic from "../../utility/site packages/we.jpg";
import pic1 from "../../utility/site packages/1.jpg";
import pic2 from "../../utility/site packages/2.jpg";
import pic3 from "../../utility/site packages/3.jpg";
import './css/firstcontent.css';
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import ImagePreview from "../Includes/ImagePreview";
const FirstContent = () => {
    return (
        <>
            <div className="main-content-wrap">

                <div className="first-content w-100 d-flex flex-column flex-md-row flex-lg-row justify-content-sm-start justify-content-md-start justify-content-lg-between py-md-5">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="text-box d-flex flex-column justify-content-start align-items-start">
                            <h1 className="header card-title fw-bolder">
                                Hi, Welcome to Asamang SDA Hospital
                            </h1>
                            <div className="body border-radius-lg">
                                <p className="main-content card-body">
                                    Surf our page at your interest and find out what our wonderful system is capable of doing..
                                </p>
                                <h5 className="content text-capitalize card-body">
                                    The peoples choice
                                </h5>
                            </div>
                        </div>
                        <div className="content-tab-wrap">
                            <span className="left-tab">
                            <i className="bi bi-user" ></i>
                             <FontAwesomeIcon  icon={ faUser }  /> </span>
                        </div>
                    </div>
                    <div className="img-box col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center bg-danger rounded-4 overflow-hidden">
                        <img alt="img" className="page-img cover-full w-100 h-100 object-fit-cover" src={ pic } />
                    </div>
                </div>

                <div className="second-content">

                    <div className="home-content">
                        <div  className={` c-border d-flex flex-column justify-content-between align-items-center `}>
                            <div className='wrap-top'>
                                <h2>What Parents Should Expect </h2>
                                <li>Secure access to their child's academic records, attendance, and progress reports.</li>
                                <li>Timely notifications and communication from teachers and school administration.</li>
                                <li>Easy retrieval of student reports and exam results through a dedicated parent portal.</li>
                                <li>Transparency in their child's academic journey and school activities.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                        <div className="img-container">
                            <img alt="img" className="img" src={ pic1 } />
                        </div>
                    </div>

                    <div className="home-content">
                        <div className="img-container">
                            <img alt="img" className="img" src={ pic2 } />
                        </div>
                        <div className={` c-border d-flex flex-column justify-content-between align-items-center `}>
                            <div className='wrap-top'>
                                <h2>What Students Should Expect</h2>
                                <li>Access to their personal academic records, attendance, and grades.</li>
                                <li>Ability to view className schedules, assignments, and exam timetables.</li>
                                <li>Timely updates on school events and announcements.</li>
                                <li>A streamlined process for retrieving their academic reports successfully.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>
                    </div>

                    <div className="home-content">
                        <div className={` c-border d-flex flex-column justify-content-between align-items-center `}>
                            <div className='wrap-top'>
                                <h2>What Teachers Should Expect</h2>
                                <li>A comprehensive interface to fill and submit student reports and grades efficiently.</li>
                                <li>Tools to track attendance and monitor student performance.</li>
                                <li>Communication channels to interact with students and parents.</li>
                                <li>Access to scheduling tools for classes, exams, and events.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>
                        <div className="img-container">
                            <img alt="img" className="img" src={ pic3 } />
                        </div>

                    </div>

                    <div className="home-content">
                        <div className="img-container">
                            <img alt="img" className="img" src={ pic1 } />
                        </div>
                        <div className={` c-border d-flex flex-column justify-content-between align-items-center `}>
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

                    <div className="home-content">

                        <div className={` c-border d-flex flex-column justify-content-between align-items-center `}>
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
                        <div className="img-container">
                            <img alt="img" className="img" src={ pic2 } />
                        </div>

                    </div>

                    <div className="home-content">
                        <div className="img-container">
                            <img alt="img" className="img" src={ pic3 } />
                        </div>
                        <div className={` c-border d-flex flex-column justify-content-between align-items-center `}>
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

                    </div>

                    <div className="home-content">
                        <div className={` c-border d-flex flex-column justify-content-between align-items-center `}>
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
                        <div className="img-container">
                            <img alt="img" className="img" src={ pic1 } />
                        </div>

                    </div>

                    <div className="home-content">
                        <div className="img-container">
                            <img alt="img" className="img" src={ pic1 } />
                        </div>

                        <div className={` c-border d-flex flex-column justify-content-between align-items-center `} >
                            <div className='wrap-top'>
                                <h2>About Us</h2>
                                <li>Our School Management System is dedicated to providing a seamless and efficient platform for managing all aspects of school administration and academics.</li>
                                <li>We strive to empower educators, students, and parents through innovative technology and user-friendly design.</li>
                                <li>Learn more about our commitment to enhancing the educational experience.</li>
                            </div>

                            <div className="btn pagebtnmain">Read More</div>
                        </div>

                    </div>

                </div>

            </div>
        </>
     );
}

export default FirstContent;