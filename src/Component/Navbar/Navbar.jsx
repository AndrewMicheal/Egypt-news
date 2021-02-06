import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <header className = "position-fixed w-100">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand link-color" href="/">اخبار مصر</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon btn-toggler-icon"></span>
                                    <span className="navbar-toggler-icon btn-toggler-icon"></span>
                                    <span className="navbar-toggler-icon btn-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/general">الرئيسية</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/business">اخبار الاعمال</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/health">اخبار الصحة</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/sports"> اخبار الرياضة</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/technology"> اخبار التكنولوجيا</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Navbar;