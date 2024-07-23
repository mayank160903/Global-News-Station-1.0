import React from 'react';
import {

  Link
} from "react-router-dom";
import './Navbar.css';


const Navbar = (props) => {
  

 
    return (
      <div className='navbar-content'>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid center-elements">
    <div>
    <Link className="navbar-brand" to="/">HOME</Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
          <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
    </div>
    {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Your Country
  </button>
  <ul className="dropdown-menu scrollable-menu me-auto mb-2 mb-lg-0" role='menu'>
    <li><Link className="dropdown-item content-font" to="/home/aus" onClick={props.setAus}>Australia(.au)</Link></li>
    <li><Link className="dropdown-item content-font" to="/home/chi" onClick={props.setChi}>China(.cn)</Link></li>
    <li><Link className="dropdown-item content-font" to="/home/fra" onClick={props.setFra}>France(.fr)</Link></li>
    <li><Link className="dropdown-item content-font" to="/home/ind" onClick={props.setInd}>India(.in)</Link></li>
    <li><Link className="dropdown-item content-font" to="/home/jap" onClick={props.setJap}>Japan(.jp)</Link></li>
    <li><Link className="dropdown-item content-font" to="/home/nez" onClick={props.setNz}>New Zealand(.nz)</Link></li>
    <li><Link className="dropdown-item content-font" to="/home/rus" onClick={props.setRus}>Russia(.ru)</Link></li>
    <li><Link className="dropdown-item content-font" to="/home/sau" onClick={props.setSar}>Saudi Arabia(.sa)</Link></li>
    <li><Link className="dropdown-item content-font" to="/home/usa" onClick={props.setUsa}>United States of America(.us)</Link></li>
    



      </ul>
    </div>     */}
  </div>
</nav>
      </div>
    )
  }


export default Navbar
