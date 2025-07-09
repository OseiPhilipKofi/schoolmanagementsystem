import { Link } from 'react-router-dom';
import './css/appointment.css';

const Appointment = () => {
    return (
        <>
            <div className="appoint-wrapper d-flex flex-row justify-content-center align-items-center pt-5">
                <form action="" className="appointment-form position-relative" >
                    <h3 className="title text-center">Book an Appointment</h3>
                    <div className="messages">
                        <div className="errMessage"></div>
                        <div className="sucMessage"></div>
                    </div>
                    <div className="form-group">
                        <input type="text" name="username" id="username" className="username form-control" placeholder="user name"  />
                    </div>

                    <div className="form-group">
                        <input type="email" name="useremail" id="useremail" className="useremail form-control" placeholder="user email"  />
                    </div>

                    <div className="form-group d-flex flex-row gap-10 flex-nowrap">
                        <span className=" w-50">
                            <label for="apdate">Date</label>
                            <input type="date" name="date" className="form-control newapdate" id="apdate" placeholder="00/00/0000" />
                        </span>
                        <span className=" w-50">
                            <label for="aptime">Time</label>
                            <input type="time" name="time" className="form-control" id="aptime" placeholder="00:00" />
                        </span>
                    </div>

                    <div className="form-group">
                        <select id="hospital-reasons" name="header" className="form-control w-100">
                            <option value="consultation">General Consultation</option>
                            <option value="follow-up">Follow-up Visit</option>
                            <option value="diagnostic-tests">Diagnostic Tests</option>
                            <option value="vaccination">Vaccination</option>
                            <option value="chronic-care">Chronic Disease Management</option>
                            <option value="specialist-referral">Specialist Referral</option>
                            <option value="surgery-consultation">Surgery Consultation</option>
                            <option value="pregnancy-care">Pregnancy and Maternity Care</option>
                            <option value="mental-health">Mental Health Services</option>
                            <option value="physical-therapy">Physical Therapy and Rehabilitation</option>
                            <option value="emergency">Emergency care (accidents, severe injury)</option>
                            <option value="illness">Serious illness (infection, flu, pneumonia)</option>
                            <option value="surgery">Scheduled surgery or operation</option>
                            <option value="checkup">Routine checkup or health screening</option>
                            <option value="pregnancy">Pregnancy and childbirth care</option>
                            <option value="chronic">Management of chronic conditions (diabetes, asthma)</option>
                            <option value="diagnosis">Diagnostic tests and imaging</option>
                            <option value="vaccination">Vaccinations and immunizations</option>
                            <option value="mental-health">Mental health treatment</option>
                            <option value="rehabilitation">Rehabilitation and physical therapy</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="form-group position-relative">
                        <textarea type="text" name="body" id="body" className="body form-control" placeholder="message body" ></textarea>
                        <label for='addfile' className="files pointer position-absolute absolute-bottom absolute-right">
                            <span>
                                <i className="fa fa-plus "></i>
                            </span>
                            <span>
                                Attach files
                            </span>
                        </label>
                    </div>

                    <div className="form-group" >
                        <input type="file" name="files" id="addfile" multiple className="body custom-file-input d-none invisible" />
                    </div>
                    <div className="showfiles d-flex flex-row justify-content-lg-start align-items-center gap-10 mb-3">
                    </div>

                    <div className="btns">
                        <input type="submit"  className="btn loginUser" value="submit" />
                        <input type="reset"  classNameName="btn signinUser" value="clear forms" className="btn signinUser"/>
                    </div>
                </form>
            </div>

        </>
     );
}

export default Appointment;