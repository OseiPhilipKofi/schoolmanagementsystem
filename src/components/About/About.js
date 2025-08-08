import './css/about.css';
import preview from '../../utility/site packages/3114 Opoku Marfo Benjamin.jpg';
import defaultImg from '../../utility/site packages/4097 Acheampong Richmond.jpg';
import FetchResults from "../../FetchModule/Fetch";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faExclamationTriangle, faHistory, faLeftLong, faLowVision, faRightLong, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import createIntersectionObserver from '../../observers/intersectionobservers';
const About = () => {
    const ip = 'localhost';
    // const ip = '192.168.137.1';
    const { data:historyData, loading:historyLoading, error:historyError } = FetchResults(`http://${ip}:3800/history`);
    const { data:visionData, loading:visionLoading, error:visionError } = FetchResults(`http://${ip}:3800/vision`);
    const { data:missionData, loading:missionLoading, error:missionError } = FetchResults(`http://${ip}:3800/mission`);
    const { data:valuesData, loading:valuesLoading, error:valuesError } = FetchResults(`http://${ip}:3800/ourvalues`);
    const { data:teamData, loading:teamLoading, error:teamError } = FetchResults(`http://${ip}:3800/team`);
    const [activetab, setActiveTab] = useState(null);
    useEffect(() => {
        let elements = document.querySelectorAll('.content-item');
        if(elements !==null){
            createIntersectionObserver(elements, []);
        }
    }, [historyLoading, visionLoading, missionLoading, valuesLoading, teamLoading])

    function hideParent(evt){
        let parent = evt.currentTarget.parentElement;
        parent.setAttribute('style', 'display: none;');
    }
    function scrollToLink (e){
        let siblings = e.currentTarget.parentElement.childNodes;
        siblings.forEach(element => {
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        });
        e.currentTarget.classList.add('active');
        let tab = e.currentTarget.getAttribute('data-active');
        setActiveTab(tab);
    }

    function scrollCarousel(e){
        let obj = e.currentTarget;
        let objName = e.currentTarget.getAttribute('data-name');
        let movable = obj.parentElement.nextElementSibling;
        let objWidth = movable.scrollLeft;
        if(objName === 'left'){
            movable.scrollTo({
                top: 0,
                left: objWidth - 320,
                behavior: 'smooth'
            });
        }
        if(objName === 'right'){
            movable.scrollTo({
                top: 0,
                left: objWidth + 320,
                behavior: 'smooth'
            });
        }
    }
    return (
        <>
        <>
            <div className="about-btn-wrap">
                <div className="about-btns">
                    <Link to= '#Our History' className={`button ${ activetab === ('History' | null | '') ? 'active': '' }`} data-active="History" onClick={e=> scrollToLink(e)}>Our History</Link>
                    <Link to= '#Our Vision' className={`button ${ activetab === ('Vision') ? 'active': '' }`} data-active="Vision" onClick={e=> scrollToLink(e)}>Our Vision</Link>
                    <Link to= '#Our Mission' className={`button ${ activetab === ('Mission') ? 'active': '' }`} data-active="Mission" onClick={e=> scrollToLink(e)}>Our Mission</Link>
                    <Link to= '#Our Values' className={`button ${ activetab === ('Values') ? 'active': '' }`} data-active="Values" onClick={e=> scrollToLink(e)}>Our Values</Link>
                    <Link to= '#Our Team' className={`button ${ activetab === ('Team') ? 'active': '' }`} data-active="Team" onClick={e=> scrollToLink(e)}>Our Team</Link>
                    <Link to= '#Contact Us' className={`button ${ activetab === ('Us') ? 'active': '' }`} data-active="Us" onClick={e=> scrollToLink(e)}>Contact Us</Link>
                </div>
            </div>

            <div className="about-wrapper">

                {
                    historyLoading ? (
                        <div className="loading text-white m-auto">
                            <FontAwesomeIcon icon={ faSpinner } spin className='icon-main' />
                            <p className="loading-text p-0 my-0"> Loading resource for Our History .............. </p>
                            <FontAwesomeIcon icon={ faClose } className='closeIcon' onClick={ (e)=>hideParent(e) } />
                        </div>
                    ) : historyError ? (
                        <div className="error text-white m-auto">
                            <FontAwesomeIcon icon={ faExclamationTriangle } className='icon-main' />
                            <p className="error-text p-0 my-0"> Failed to fetch History resource </p>
                            <FontAwesomeIcon icon={ faClose } className='closeIcon' onClick={ (e)=>hideParent(e) } />
                        </div>
                    ) :
                    (
                        <div className="scrollTo" id='Our History'>

                            <div className="row-2-container bk-yellow">
                                <div className="icon">
                                    <FontAwesomeIcon icon={ faHistory } />
                                </div>
                                <div className="center-div-container">
                                    <h4> Our History </h4>
                                    <p> Welcome to the About page. Here you can learn more about our institution, our mission, and our values. </p>
                                </div>
                            </div>

                            <div className="about-content">
                                { historyData && historyData.length > 0 && !historyLoading && !historyError &&
                                    historyData.map((item, index) => (
                                        <div key={index} className="content-item pointer bk-universal intersecting">
                                        <div className="index-wrap bk-counter"> { index + 1}</div>
                                            <div className="about-first-content">
                                                <h4>{item.header}</h4>
                                            </div>
                                            <div className="about-second-content">
                                                <p>{item.notes}</p>
                                                <div className="all-imgs">
                                                    <div className="img-wrap">
                                                        <img className="img" alt='' src={item.img ==='' ? item.img : defaultImg } />
                                                    </div>
                                                    <div className="img-wrap">
                                                        <img className="img" alt='' src={item.img ==='' ? item.img : defaultImg } />
                                                    </div>
                                                    <div className="img-wrap">
                                                        <img className="img" alt='' src={item.img ==='' ? item.img : defaultImg } />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }


                {
                    visionLoading ? (
                        <div className="loading text-white m-auto">
                            <FontAwesomeIcon icon={ faSpinner } spin className='icon-main' />
                            <p className="loading-text p-0 my-0"> Loading resource for Our Vision .............. </p>
                            <FontAwesomeIcon icon={ faClose } className='closeIcon' onClick={ (e)=>hideParent(e) } />
                        </div>
                    ) : visionError ? (
                        <div className="error text-white m-auto">
                            <FontAwesomeIcon icon={ faExclamationTriangle } className='icon-main' />
                            <p className="error-text p-0 my-0"> Failed to fetch Vision resource </p>
                            <FontAwesomeIcon icon={ faClose } className='closeIcon' onClick={ (e)=>hideParent(e) } />
                        </div>
                    ) :
                    (
                        <div className="scrollTo" id='Our Vision'>

                            <div className="row-2-container bk-yellow">
                                <div className="icon">
                                    <FontAwesomeIcon icon={ faLowVision } />
                                </div>
                                <div className="center-div-container">
                                    <h4> Our Vision </h4>
                                    <p> Welcome to the About page. Here you can learn more about our institution, our mission, and our values. </p>
                                </div>
                            </div>

                            <div className="carousel-wrap">
                                <span className="slider-wrap">
                                    <span className="arrow-left" data-name="left" onClick={ e=> scrollCarousel(e)}>
                                        <FontAwesomeIcon icon={ faLeftLong } />
                                    </span>
                                    <span className="arrow-right" data-name="right" onClick={ e=> scrollCarousel(e)}>
                                        <FontAwesomeIcon icon={ faRightLong } />

                                    </span>
                                </span>
                                <div className="container-wrapper">
                                    { visionData && visionData.length > 0 && !visionLoading && !visionError &&
                                        visionData.map((item, index) => (
                                            <div key={index} className="each-content pointer bk-universal">
                                                <div className="index-wrap bk-counter"> { index + 1}</div>
                                                <div className="img-wrap">
                                                    <img className="img" alt='' src={item.img ==='' ? item.img : defaultImg } />
                                                </div>
                                                <div className="body-wrap">
                                                    <div className="header"> {item.header} </div>
                                                    <div className="text"> {item.notes} </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>

        </>
        </>
      );
}

export default About;