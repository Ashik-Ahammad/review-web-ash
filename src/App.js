import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/NavBar/Navbar';
import NotFound from './Components/Not Found/NotFound';
import OurCourses from './Components/Our Courses/OurCourses';
import TestInfo from './Components/Test Info/TestInfo';


function App() {

  return (
    <div className="App">
      <h1 className="page-name">IELTS PRO GUIDE</h1>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/ourcourses">
            <OurCourses></OurCourses>
          </Route>
          <Route path="/testinfo">
            <TestInfo></TestInfo>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
