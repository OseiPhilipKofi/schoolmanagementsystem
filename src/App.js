import  React  from "react";
import Homepage from "./components/Homepage/Home";
import About from "./components/About/About";
import Facilities from "./components/Facilities/Facilities";
import Administration from "./components/Administration/Administration";
import Blog from "./components/Blog/Blog";
import Classrooms from "./components/Classrooms/Classrooms";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/bootstrap.css';
import './css/index.css';
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Notfound from "./components/Notfound/Notfound";
function App() {
  return (
    <>
    <Router>
        <div className="App">
            <Header />
          <div className="content">
            <Routes>
              <Route exact path="/" element={ <Homepage/> }> </Route>

              <Route path="/home" element={ <Homepage/>}> </Route>

              <Route path="/about" element={ <About/>}> </Route>

              <Route path="/facilities" element={ <Facilities/>}> </Route>

              <Route path="/administration" element={ <Administration/>}> </Route>

              <Route path="/blog" element={ <Blog/>}> </Route>

              <Route path="/classrooms" element={ <Classrooms/>}> </Route>

              <Route path="/courses" element={ <Courses/>}> </Route>

              <Route path="/appointment" element={ <Appointment/>}> </Route>

              <Route path="/contact" element={ <Contact/>}> </Route>

              <Route path="/profile" element={ <Profile/>}> </Route>

              <Route path="/login" element={ <Login/>}> </Route>

              <Route path="/signup" element={ <Signup/>}> </Route>

              <Route path="*" element={ <Notfound/>}> </Route>

            </Routes>
          <Footer />
        </div>
      </div>

    </Router>
    </>

  );
}

export default App;
