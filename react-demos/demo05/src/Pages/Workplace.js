import React from 'react';
import {Route, Link} from 'react-router-dom';
import Money from './workPlace/Money';
import Getup from './workPlace/Getup';

function Workplace () {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/money">learn to make money</Link></li>
                    <li><Link to="/workplace/getup">learn to get up</Link></li>
                </ul>
            </div>
            <div className="content">
                <div><h3>small tips</h3></div>
                <Route path="/workplace/money" component={Money} />
                <Route path="/workplace/getup" component={Getup} />
            </div>
        </div>
    )
}

export default Workplace;