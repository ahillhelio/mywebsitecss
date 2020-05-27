import React from 'react'
import './mywebsite.css'
import ContactForm from "./contactform"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function MyWebSite() {
    return (
        <>
        <div className="topnav">
            <a href="https://github.com/ahillhelio/">Portfolio(GitHub)</a>
            <Link to="/contactform">
            {/* <Link to={ContactForm}> */}
              Contact
            </Link>
            <a href="/assets/resume.pdf">Resume</a>
            <Link to="/">
            Home
            </Link>
        </div>

            <Switch>
              <Route path ="/contactform">
                <ContactForm/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>



        {/* <div className="footer">
          <a><button className="button" onclick="myFunction()">Dark Mode</button></a>
        </div> */}

        </>
    )

}

const Home = () => {
  return (
    <>
      <div className="header">
      <h1>Web Development</h1>
      <h3>by Alex Hill</h3>
      <h2>"Hello, World!"</h2>
      </div>

      <div className="row">
      <div className="column">
      <h2>Intro</h2>
      <p>
        Alex Hill is a Utah-based developer who is passionate about creating an
        aesthetically pleasing UX. <br />
        <br />
        He gives great importance to keeping track of the latest changes in this
        dynamic field and has a special interest in RESTful API architecture.{" "}
      </p>
      </div>
      <div className="column">
        <h2>Bio</h2>
        <p>Life's an experiment. </p>
      </div>
      <div className="column">
        <h2>Column</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </div>
      </div>
    </>
  )
}