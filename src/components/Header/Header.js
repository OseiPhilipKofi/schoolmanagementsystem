// import observer from "../../utility/Include";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Richmond from "../../utility/site packages/1210 Acheampong Richmond.jpg";
import Resizeobserver from "../../observers/observers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faCaretDown, faCaretUp, faChair, faClose, faHouse, faListDots, faPhone, faQuestion, faSchool, faSignIn, faSignOut, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import ScrollingObserver from "../../observers/ScrollingObserver";

const Header = () => {
    const { isLarger, isSmaller } = Resizeobserver(document.body);
    const [ currentPage, setCurrentPage ] = useState(false);
    const [ isusertab, setIsusertab ] = useState(false);
    const [ hasEntered, setHasEntered ] = useState(false);
    const [ userTab, setUserTab ] = useState(false);
    const [ islight, setIslight ] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        // const isScrolling = ScrollingObserver;
        const pathname = location.pathname.toLowerCase();
        const pageList = ['/', '/home', '/about', '/contact', '/facilities' ,'/administration' ,'/blog' ,'/classrooms' ,'/profile' ,'/login' ,'/logout' ,'/contact' ,'/appointment' ];
        const isPageInList = pageList.includes(pathname);
        const path = pathname.split('/')[1] || 'home';
        if(isPageInList){
            localStorage.setItem('page', path);
            if(path === 'home' || path === ''){
                setCurrentPage('home');
                navigate(path);
            }else{
                setCurrentPage(path);
                navigate(path);
            }
        }

    },[]);
    document.addEventListener('scroll', ()=>{
        ScrollingObserver( document.querySelector('.header-wrap') );
    })
    function toggleActive(obj){
        let key = obj.currentTarget.getAttribute('data-key');
        document.querySelectorAll('.page').forEach(page=>{
            if(page.getAttribute('data-key') === key){
                page.classList.add('active');
            }else{
                page.classList.remove('active');
            }
        })
        setCurrentPage(key);
        localStorage.setItem('page', key);
        hideusertab();
        hidepagetabs();
        window.scrollTo( 0, 0);
    }
    function toggleTheme(e) {
        var theme;
        console.log(e.currentTarget);
        let obj = e.currentTarget.lastElementChild;
        console.log(obj);
        if(obj.innerHTML === 'dark theme'){
            theme = 'dark';
            setIslight(false);
            obj.innerHTML = 'light theme';
        }else{
            theme = 'light';
            setIslight(true);
            obj.innerHTML = 'dark theme';
        }
        console.log(theme);
        document.documentElement.setAttribute("data-theme", theme );
        localStorage.setItem("theme", theme );
    }

    const storedTheme = localStorage.getItem("theme") !== null ? localStorage.getItem("theme") : 'light';
    const themevalue = storedTheme === 'light' ? 'dark theme' : 'light theme' ;

    useEffect(()=>{

        if (storedTheme) {

            let key = localStorage.getItem('page');
            if(key === null || key === ''){
                key = 'home';
            }
            document.querySelectorAll('.page').forEach(page=>{
                if(page.getAttribute('data-key') === key){
                    page.classList.add('active');
                }else{
                    page.classList.remove('active');
                }
            });

            document.documentElement.setAttribute("data-theme", storedTheme);
            if(storedTheme === 'light') {
                setIslight(true);
            }else{
                setIslight(false);
            }
        }
    }, [isLarger, isSmaller]);

    function showpagetabs(obj){
        setHasEntered(true);
    }
    function hidepagetabs(){
        setHasEntered(false);
    }
    function activateusertab(obj){
        setUserTab(true);
        setIsusertab(true);
    }
    function hideusertab(){
        setUserTab(false);
        setIsusertab(false);
    }
    function checkpagetab(){
        if(hasEntered === true){
            setHasEntered(false);
        }else{
            setHasEntered(true);
        }
    }
    function checkusertab(){
        if(userTab === true){
            setUserTab(false);
            setIsusertab(false);
        }else{
            setUserTab(true);
            setIsusertab(true);
        }
    }
    return (
        <>
            <>

                    <div className="header-wrap navbar m-0 py-2 px-md-5 px-2 w-100 d-fit-content d-flex flex-row justify-content-between align-items-center">
                        <div className="logo ">
                            <h4 className="text-uppercase text-bold m-0">
                                School Name
                            </h4>
                        </div>
                        <div className="other-tabs gap-20 d-flex flex-row justify-content-end align-items-center">
                            { isLarger &&
                            <ul className="pages m-0 gap-10 d-flex flex-row flex-no-wrap justify-content-between align-items-center">
                                <Link to="/home" data-key='home' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'home' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} > Home</Link>
                                <Link to="/about" data-key='about' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'about' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} > About</Link>
                                <Link to="/facilities" data-key='facilities' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'facilities' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} > Facilities</Link>
                                <Link to="/administration" key='administration' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'administration' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} > Administration</Link>
                                <Link to="/blog" data-key='blog' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'blog' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} > Blog</Link>
                                <Link to="/classrooms" data-key='classrooms' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'classrooms' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} > Classrooms</Link>
                            </ul>
                            }
                            <div className="mini-tab">
                                <div className="userprofile-wrap bg-danger">
                                    <img alt="img"  className="userprofile show-image" src={ Richmond } />
                                </div>
                                { !isSmaller &&

                                     !isLarger &&
                                        <div className="optionstab pointer" onMouseEnter={(e)=>{showpagetabs(e); hideusertab(e);}} onClick={()=>checkpagetab()}>
                                            <FontAwesomeIcon icon={ hasEntered === false ? faCaretDown : faCaretUp }  />
                                        </div>

                                }

                                    <div className="optionstab pointer" onClick={()=>checkusertab()} onMouseEnter={(e)=>{hidepagetabs(e); activateusertab(e);}}>
                                        <FontAwesomeIcon icon={ isusertab === false ? faListDots : faClose }  />
                                    </div>

                            </div>

                            { hasEntered &&
                                     !isLarger &&
                                     !isSmaller &&
                                <ul className="medium-page-tabs p-0 position-absolute absolute-right right-0 user-tabs d-flex flex-column flex-no-wrap justify-content-start align-items-start"  >
                                    <Link to="/home" data-key='home' onClick={ (e)=>{toggleActive(e);} }  className={`${currentPage === 'home' ? 'active' : '' } page text-decoration-none ${currentPage === null ? 'active' : ''} header-btn text-capitalize text-transparent`} >
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faHouse } />
                                        </span>
                                        <span className="text"> Home</span>
                                    </Link>
                                    <Link to="/about" data-key='about' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'about' ? 'active' : '' } page text-decoration-none header-btn text-capitalize text-transparent`} >
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faQuestion } />
                                        </span>
                                        <span className="text">About</span>
                                    </Link>
                                    <Link to="/facilities" data-key='facilities' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'facilities' ? 'active' : '' } page text-decoration-none header-btn text-capitalize text-transparent`} >
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faBuilding } />
                                        </span>
                                        <span className="text">Facilities</span>
                                    </Link>
                                    <Link to="/administration" key='administration' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'administration' ? 'active' : '' } page text-decoration-none header-btn text-capitalize text-transparent`} >
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faChair } />
                                        </span>
                                        <span className="text">Administration</span>
                                    </Link>
                                    <Link to="/blog" data-key='blog' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'blog' ? 'active' : '' } page text-decoration-none header-btn text-capitalize text-transparent`} >
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faBlog } />
                                        </span>
                                        <span className="text">Blog</span>
                                    </Link>
                                    <Link to="/classrooms" data-key='classrooms' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'classrooms' ? 'active' : '' } page text-decoration-none header-btn text-capitalize text-transparent`} >
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faSchool } />
                                        </span>
                                        <span className="text">Classrooms</span>
                                    </Link>
                                </ul>
                            }

                            {   userTab &&
                                <span className=" user-tabs position-absolute absolute-right right-0 user-tabs d-flex flex-column flex-no-wrap justify-content-start align-items-start">
                                    <Link to="/profile" data-key='profile' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'profile' ? 'active' : '' } page user-tab pointer text-decoration-none text-transparent`}>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faUser}/>
                                        </span>
                                        <span className="text"> profile </span>
                                    </Link>
                                    <Link to="/login" data-key='login' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'login' ? 'active' : '' } page user-tab pointer text-decoration-none text-transparent`}>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faSignIn }/>
                                        </span>
                                        <span className="text"> Login </span>
                                    </Link>
                                    <Link to="/logout" data-key='logout' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'logout' ? 'active' : '' } page user-tab pointer text-decoration-none text-transparent`}>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faSignOut }/>
                                        </span>
                                        <span className="text"> Logout </span>
                                    </Link>
                                    <Link to="/contact" data-key='contact' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'contact' ? 'active' : '' } page user-tab pointer text-decoration-none text-transparent`}>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faPhone }/>
                                        </span>
                                        <span className="text"> Contact </span>
                                    </Link>
                                    <Link to="/appointment" data-key='appointment' onClick={ (e)=>{toggleActive(e);} } className={`${currentPage === 'appointment' ? 'active' : '' } page user-tab pointer text-decoration-none text-transparent`}>
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ faAppStore }/>
                                        </span>
                                        <span className="text"> Appointment </span>
                                    </Link>
                                    <span onClick={(e)=>toggleTheme(e)} className="user-tab pointer text-transparent">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={ islight === true ? faToggleOff : faToggleOn }/>
                                        </span>
                                        <span className="text"> { themevalue } </span>
                                    </span>
                                </span>
                            }
                        </div>
                    </div>

                            { isSmaller &&
                        <div className="phone-tabs p-0 m-0 bg-white d-flex flex-row justify-content-start align-items-center">
                            <ul className="pages m-0 p-0 d-flex flex-row flex-no-wrap justify-content-between align-items-center">
                                <Link to="/home" data-key='home' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'home' ? 'active' : '' } page text-decoration-none ${currentPage === null ? 'active' : ''} header-btn text-capitalize p-0 text-transparent`} >
                                    <span className="icon"> <FontAwesomeIcon icon={ faHouse }  size={ 32 }/> </span>
                                    <span className="text"> Home</span>
                                </Link>
                                <Link to="/about" data-key='about' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'about' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} >
                                    <span className="icon"> <FontAwesomeIcon icon={ faQuestion } size={ 25 } /> </span>
                                    <span className="text"> About</span>
                                </Link>
                                <Link to="/facilities" data-key='facilities' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'facilities' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} >
                                    <span className="icon"> <FontAwesomeIcon icon={ faBuilding } size={ 25 } /> </span>
                                    <span className="text"> Facilities</span>
                                </Link>
                                <Link to="/administration" data-key='administration' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'administration' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} >
                                    <span className="icon"> <FontAwesomeIcon icon={ faChair } size={ 25 } /> </span>
                                    <span className="text"> Administration</span>
                                </Link>
                                <Link to="/blog" data-key='blog' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'blog' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} >
                                    <span className="icon"> <FontAwesomeIcon icon={ faBlog } size={ 25 } /> </span>
                                    <span className="text"> Blog</span>
                                </Link>
                                <Link to="/classrooms" data-key='classrooms' onClick={ (e)=>toggleActive(e) } className={`${currentPage === 'classrooms' ? 'active' : '' } page text-decoration-none header-btn text-capitalize p-0 text-transparent`} >
                                    <span className="icon"> <FontAwesomeIcon icon={ faSchool } size={ 25 } /> </span>
                                    <span className="text"> Classrooms</span>
                                </Link>
                            </ul>
                        </div>
                            }
            </>
        </>
     );
}

export default Header;