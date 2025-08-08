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
import './css/index.css';
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Notfound from "./components/Notfound/Notfound";
import ImagePreview from "./components/Includes/ImagePreview";
function App() {
  const imagePreview = ImagePreview;
  return (
    <>
    <Router>
        <div className="App">
            <Header />
          <div className="content">
            <Routes>
              <Route exact path="/" element={ <Homepage imagePreview = {imagePreview}/> }> </Route>

              <Route path="/home" element={ <Homepage imagePreview = {imagePreview}/>}> </Route>

              <Route path="/about" element={ <About imagePreview = {imagePreview}/>}> </Route>

              <Route path="/facilities" element={ <Facilities imagePreview = {imagePreview}/>}> </Route>

              <Route path="/administration" element={ <Administration imagePreview = {imagePreview}/>}> </Route>

              <Route path="/blog" element={ <Blog imagePreview = {imagePreview}/>}> </Route>

              <Route path="/classrooms" element={ <Classrooms imagePreview = {imagePreview}/>}> </Route>

              <Route path="/courses" element={ <Courses imagePreview = {imagePreview}/>}> </Route>

              <Route path="/appointment" element={ <Appointment imagePreview = {imagePreview}/>}> </Route>

              <Route path="/contact" element={ <Contact imagePreview = {imagePreview}/>}> </Route>

              <Route path="/profile" element={ <Profile imagePreview = {imagePreview}/>}> </Route>

              <Route path="/login" element={ <Login imagePreview = {imagePreview}/>}> </Route>

              <Route path="/signup" element={ <Signup imagePreview = {imagePreview}/>}> </Route>

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
