import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Pages/index';
import Video from './Pages/Video';
import Workplace from './Pages/Workplace'
import './index.css';

function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftDiv">
                    <h3>nav</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/video/">video</Link></li>
                        <li><Link to="/workplace/">skill</Link></li>
                    </ul>
                </div>

                <div className="rightDiv">
                    <Route path="/" exact component={Index} />
                    <Route path="/video/" component={Video} />
                    <Route path="/workplace/" component={Workplace} />
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;