import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Richard from "../../utility/site packages/2717 Barima Sarfo Kantanka.jpg";
import './css/firstcontent.css';
import { faUser } from "@fortawesome/free-regular-svg-icons";
const FirstContent = () => {
    return (
        <>
        <div className="main-content-wrap">
            <div className="first-content">
                <div className="carousel-wrap">
                    <div className="text-box d-flex flex-column justify-content-center align-items-center">
                        <h2 className="header">
                            Welcome to our page
                        </h2>
                        <div className="body">
                            <p className="main-content">
                                Surf our page at your interest and find out what our wonderful system is capable of doing..
                            </p>
                            <h5 className="content text-capitalize">
                                The peoples choice
                            </h5>
                        </div>
                    </div>
                    <div className="content-tab-wrap">
                        <span className="left-tab"> <FontAwesomeIcon  icon={ faUser }  /> </span>
                        {/* <span className="right-tab"> <FontAwesomeIcon  /> </span> */}
                    </div>
                </div>
                <div className="img-box">
                    {/* <img className="page-img" src={ Richard } /> */}
                </div>

            </div>
            <div className="functionalities">
                <span className="function">
                    <div className="func-header-wrap">
                        <span className="icon-wrap">icon</span>
                        <span className="header-text">Header</span>
                    </div>
                    <div className="content-wrap">
                        <p className="main-text">paragraph text</p>
                        <h3 className="writer">composer</h3>
                    </div>
                </span>
                <span className="function">
                    <div className="func-header-wrap">
                        <span className="icon">icon</span>
                        <span className="header-text">Header</span>
                    </div>
                    <div className="content-wrap">
                        <p className="main-text">paragraph text</p>
                        <h3 className="writer">composer</h3>
                    </div>
                </span>
                <span className="function">
                    <div className="func-header-wrap">
                        <span className="icon">icon</span>
                        <span className="header-text">Header</span>
                    </div>
                    <div className="content-wrap">
                        <p className="main-text">paragraph text</p>
                        <h3 className="writer">composer</h3>
                    </div>
                </span>
            </div>

            <div className="image-courosel">
                <div className="img-box">
                    <img className="page-img" src={ Richard } />
                </div>
                <div className="img-box">
                    <img className="page-img" src={ Richard } />
                </div>
                <div className="img-box">
                    <img className="page-img" src={ Richard } />
                </div>
                <div className="img-box">
                    <img className="page-img" src={ Richard } />
                </div>
            </div>
        </div>
        </>
     );
}

export default FirstContent;