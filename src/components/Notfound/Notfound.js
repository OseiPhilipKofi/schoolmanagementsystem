import './css/notfound.css';
import notfound from '../../utility/Errorpage/404-page.svg';
import { useLocation } from "react-router-dom";
const Notfound = () => {
    const location = useLocation();
    const pathname = location.pathname.toLowerCase();

    return (
        <>
            <div className='error-page-wrap mum d-flex flex-column justify-content-center align-items-center p-3 pt-5'>
                <div className="img-wrapper d-block">
                    <img src={ notfound } alt="" />
                </div>
                <div className="btn-container d-flex flex-column justify-content-center align-items-center">
                    <h3 className="urltext"> .... { pathname }</h3>
                    <p className="head-text text-first">
                        page load error
                    </p>
                    <h3 className="head-text text-second">
                        Page not found
                    </h3>
                </div>
            </div>
        </>
     );
}

export default Notfound;