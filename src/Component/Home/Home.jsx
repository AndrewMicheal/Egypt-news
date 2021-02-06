import React, { Component } from 'react';
import "./home.css";

class Home extends Component {
    render() {
        return (
            <section className = "home position-relative">
                <div className = "overlay position-absolute">
                    <div className="home-content position-absolute">
                        <p>اخبار عن الاعمال .اخبار عن الصحة . &nbsp;&nbsp;أخبار عن الرياضة. &nbsp;&nbsp;اخبار عن التكنولوجيا</p>
                        {/* <h1>اخبار الرياضة. اخبار الاعمال. اخبار الصحة.اخبار التكنولوجيا.</h1> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;