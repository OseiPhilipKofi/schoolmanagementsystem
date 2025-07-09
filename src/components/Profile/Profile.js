
import './css/profile.css';
import errorImg from '../../utility/icons-svgs/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
const Profile = () => {
    return (
        <>
            <div className="profile-wrap p-2 ">

                <div className="profile-form">
                    <h3 className=" head text-capitalize text-center"> Profile</h3>
                    <div className="messages">
                        <p className="errMessage" id="errMessage"></p>
                        <p className="sucMessage" id="sucMessage"></p>
                    </div>
                    <div className="body">
                        <form action="" className="profileForm" enctype="multipart/form-data">
                            <div className="profile-wrap w-100 d-flex flex-column justify-content-center align-items-center pb-4">
                                <div className="profile-img-wrap w-100 img-wrap border-radius-50 d-flex flex-column justify-content-center align-items-center m-auto">
                                    <img src={errorImg} onError={`src = ${errorImg}`} className="user-img pprofile userProfile my-4 pointer" />
                                </div>

                                <input type="file" name="pprofile" id="pchange" className="pprofile hideProfile invisible d-none" />
                                <label htmlFor="pchange" className="pagebtnmain profile-change custom-btn gap-10 bg-4 p-2 w-50 d-flex m-auto flex-row justify-content-center align-items-center pointer changeProfile">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={ faEdit } />
                                    </span>
                                    <span className="text-capitalize text-center ">Change Profile</span>
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="text" name="pusername" className="form-control" placeholder="Username" disabled  />
                            </div>
                            <div className="form-group">
                                <input type="email" name="pemail" className="form-control" placeholder="Email" disabled  />
                            </div>
                            <div className="form-group">
                                <input type="text" name="pnumber" className="form-control" placeholder="Phone number"  />
                            </div>
                            <div className="form-group d-flex flex-row justify-content-center align-items-center gap-10">
                                <input type="text" name="pcountry" className="form-control w-50" placeholder="country"  />
                                <input type="text" name="pcity" className="form-control w-50" placeholder="City"  />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
     );
}

export default Profile;