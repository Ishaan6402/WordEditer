import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (        
        <div className="navbar-min-div" >
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='light'?'info':props.mode}`} style={{border:`1px solid ${props.mode==='light'?'black':'white'}`}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{textDecoration:'bold', fontFamily:"arial black",fontSize:"1.5rem"}}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{textDecoration:"bold",fontFamily:"arial black"}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{textDecoration:"bold",fontFamily:"arial black"}}>AboutUs</Link>
                            </li>
                        </ul>
                        <label className="form-check-label mx-1" style={props.modeText} htmlFor="defaultCheck1">
                            Dark Mode
                        </label>
                        <div className="form-check form-switch ">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: "set Title here"
}
