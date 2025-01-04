import { useState } from 'react'
import { Link } from 'react-router-dom'
///shortcut for import react component =>  rfc
///shortcut for import props prototypes component =>  impt
import PropTypes from 'prop-types'
export default function Navbar(props) {
  const[setNavbar,setNavStyle]=useState({
    color:'blue',
    border:'4px solid black'
  })
    return (
      /////class = className
    <nav className={`navbar navbar-expand-lg  bg-dark`} >  
            <div className="container-fluid">
                {/* /* '#' = '/' */}

                <a className="navbar-brand" href="/"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          {/* <a className="nav-link active text-light" aria-current="page" href="#">Home</a> */}
          <Link rel="stylesheet" className="nav-link text-light"  to="/" >Home</Link>
        </li>
        <li className="nav-item">
                          {/* <a className="nav-link text-light" href="#">{props.aboutus}</a> */}
                          <Link className="nav-link text-light"  rel="stylesheet" to="/about" >About</Link>
        </li>
        <li className="nav-item">
<Link rel="stylesheet" className="nav-link text-light"  to="/feedback" >Feedback</Link>
        </li>
      </ul>
      <div className='d-flex' >
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
      </div>
      <div className={`form-check form-switch text-${props.mode==='dark'?'white':'gray'}`}>
  {/* <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Default switch checkbox input</label> */}
</div>

    </div>
  </div>
</nav>
  )
}
Navbar.prototype = {  /////it is used to set what type of value to assign in props
    title: PropTypes.string.isRequired,

    aboutus: PropTypes.string,
}
///default props
Navbar.defaultProps = {
    title: "JSON",
    aboutus: "MSON",
    finds:'find'
}




