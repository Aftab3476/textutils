import React from 'react'
import {Link} from "react-router-dom";


const Navbar = (props) => {
    return (
        <div>
            <div className="d-none d-md-block">
                <div className={`bg-${props.mode} fixed-top`}>
                    <div className="container-fluid">
                        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
                            <Link className="navbar-brand" to="/" style={{fontWeight:"900"}}>{props.title}</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link " to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                </ul>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1" />
                                    <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="d-md-none d-sm-block">
                <div className={`bg-${props.mode} fixed-top`}>
                    <div className="container-fluid">
                        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
                            <Link className="navbar-brand" to="/">{props.title}</Link>
                            <div className="custom-control custom-switch custom2">
                                <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1" />
                                <label className="custom-control-label" htmlFor="customSwitch1"></label>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link " to="/"><b>Home</b> <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/about"><b>About</b></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar