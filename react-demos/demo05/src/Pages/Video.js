import React from 'react';
import {Route, Link} from 'react-router-dom';
import ReactPage from './video/ReactPage';
import FlutterPage from './video/FlutterPage';
import VuePage from './video/VuePage';

function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React Tutorial</Link></li>
                    <li><Link to="/video/vuepage">Vue Tutorial</Link></li>
                    <li><Link to="/video/flutterpage">Flutter Tutorial</Link></li>
                </ul>
            </div>
            <div className="content">
                <div><h3>Video Tutorial</h3></div>
                <Route path="/video/reactpage"  component={ReactPage} />
                <Route path="/video/vuepage"  component={VuePage} />
                <Route path="/video/flutterpage"  component={FlutterPage} />
            </div>
        </div>
    )
}

export default Video;