import React from 'react';
import lside from './images/Side.svg';
import logo from './images/logo.svg';
import add_file from './images/add_file.svg';
import trophy from './images/trophy.svg';
import r_side from './images/rside.svg';
import homeside from './images/home-side.svg';
import statistics from './images/statistics.svg';
import r_side_home from './images/rside_home.svg';
import purple_side from './images/purple-side.svg';
import home_rotate from './images/home_rotate.svg';
import student_stats from './images/student_stats.svg';
import struggling from './images/struggling.svg'
import get_started from './images/get_started.svg';
import developer from './images/developer.svg';
import Quizmaker from './Quizmaker.js';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Form, Button, Row, Col, Container } from 'react-bootstrap';
import Sidebar from './sidebar.js';

var struggle_percent = "14%";
var average_time = "20";
var hardest_questions = "1"
function App() {
  
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

const Students = () => (
  <div className="students">
    <header className='header'></header>
    <img src={lside} className='side' />
    <img src={r_side} className='rside' />
    <h1 className='page-header'>Students</h1>
    <h2 className='enter-meeting-header'>Enter the Zoom Meeting</h2>
    <Form className='student-form'>
      <Row>
        <Col>
          <Form.Group controlId="room-code">
            <Form.Label className = "student-form-label">Enter Room Code:</Form.Label>
            <div className = "student-form-text-padding">
              <Form.Control size="lg" type="text" placeholder="Room Code"/>
            </div>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="room-password">
            <Form.Label className = "student-form-label">Enter Room Password:</Form.Label>
            <div className = "student-form-text-padding">
              <Form.Control size="lg" type="text" placeholder="Room Password" />
            </div>
          </Form.Group>
        </Col>
      </Row>

      <Button className='main-button' variant='primary' type="submit" size='lg'>Submit</Button>
    </Form>
  </div>
);

const Home = () => (
  <div className="home">
    <header className="home-header"></header>
    <img src={homeside} className='side-home'/>
    <img src={r_side_home} className='rside-home'/>
    <h1 className='home-org-header'>IntuiTeach</h1>
    <div className='container-img-txt home-feedback-layout'>
      <img src={home_rotate} alt='Rotation Icon'/>
      <div>
        <h2 className='home-container-h2'>Live feedback for live teaching</h2>
        <p className='home-container-p'>Plugin that allows teachers to quiz their students in real time</p>
        <div className='home-feedback-button-container'>
          <Button className='main-button' variant='primary' size='lg'>Students</Button>
          <Button className='main-button' variant='primary' size='lg'>Educators</Button>
        </div>
      </div>
    </div>

    <div className='container-img-txt home-statistics-layout'>
      <div>
        <h2 className='home-container-h2'>Understanding Students Through Statistics</h2>
        <p className='home-container-p'>Allows educators to gauge participation
        and identify student success through a dashboard</p>
      </div>
      <img src={student_stats} alt='Student Pie Chart'/>
    </div>

    <div className='container-img-txt home-encouraging-layout'>
      <div>
        <h2 className='home-container-h2'>Encouraging Student Engagement</h2>
        <h2 className='home-container-p'>Point-based reward system ensures students participate 
        in the classroom</h2>
      </div>
      <img src={trophy} alt=''/>
    </div>

    <div className='container-img-txt home-streamlining-layout'>
      <img src={get_started} alt=''/>
      <div>
        <h2 className='home-container-h2'>Streamlining Virtual Learning</h2>
        <h2 className='home-container-p'>Facilitates student-teacher and peer-to-peer communication, 
        making virtual classrooms more enjoyable for students</h2>
        <Button className='main-button' variant='primary' size='lg'>Get Started</Button>
      </div>
    </div>

    <div className='container-img-txt home-developer-layout'>
      <div>
        <h2 className='home-container-h2'>Developer-Friendly API</h2>
        <h2 className='home-container-p'>Our flexible API allows IntuiTeach to easily be integrated to 
        different platforms</h2>
        <Button className='main-button' variant='primary' size='lg'>Documentation</Button>
      </div>
      <img src={developer} alt=''/>
    </div>
  </div>

);

const About = () => (
  <div className="about">
    <header className='header'></header>
  </div>
)

const Educators = () => (
  <div className="educators">
    <header className='header'></header>
    <img src={purple_side} className='side-educators'/>
    <img src={r_side} className='rside'/>
    <h1 className='page-header'>Educators</h1>
    <div className='container-img-txt eduactors-contents-layout'>
      <img src={statistics} alt='Statistics Icon'/>
      <div>
        <h2 className='educator-h2'>Integration with Zoom that allows for 
        better understanding of students
        </h2>
        <p className='educator-p'>Login with Zoom and download the plugin to start integrating statistics into your student's learning</p>
        <Button className='main-button educator-login' educator-login variant='primary' size='lg'>Login</Button>
      </div>
    </div>
  </div>

)

const Dashboard = () => (
  <div className="dashboard">
    <Container fluid>
      <Row>
        <Col xs={1} id = "no-padding">
          <Sidebar/>
        </Col>
        <Col xs={4}>
              <div className ='dashboard-container dashboard-card'>
                <img className='container-img-txt' src={struggling}></img>
                <h2 className= 'dashboard-text'>Struggling Students {struggle_percent}</h2>


              </div>
        </Col>
        <Col xs ={4}>
            <div className='dashboard-container dashboard-card'>
              <img className='container-img-txt' src={trophy}></img>
              <h2 className='dashboard-text'>Average Time {average_time}</h2>


            </div>
        </Col>
        <Col xs={3}>
            <div className='dashboard-container dashboard-card'>
              <img className='container-img-txt' src={struggling}></img>
              <h2 className='dashboard-text'>Longest to answer questions {hardest_questions}</h2>


            </div>
        </Col>
      </Row>
    </Container>
  </div>
)

//Test for buttons
function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
  }

}


const Navigation = () => (
  <Navbar className="nav" bg="light" variant="light" fixed="top">
    <Navbar.Brand as = {NavLink} to="/"> <img src={logo} className="logo" /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} className = "navlink" id = "home" to='/'>Home</Nav.Link>
      <Nav.Link as={NavLink} className="navlink" to='/about'>About</Nav.Link>
      <Nav.Link as={NavLink} className="navlink" to='/students'>Students</Nav.Link>
      <Nav.Link as={NavLink} className="navlink" to='/educators'>Educators</Nav.Link>
      <Nav.Link as={NavLink} className="navlink" id = "login" to='/dashboard'>Login</Nav.Link>
    </Nav>
  </Navbar>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/students' component={Students}></Route>
    <Route exact path='/educators' component={Educators}></Route>
    <Route exact path='/dashboard' component={Dashboard}></Route>
    <Route exact path='/quizmaker' component={Quizmaker}></Route>
  </Switch>
);


export default App;
