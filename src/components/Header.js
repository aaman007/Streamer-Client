import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu" style={{fontSize: '18px'}}>
                <Link to="/" className="item">
                    <i className="video camera icon"></i>
                    Streamer
                </Link>

                <div className="right menu">
                    <Link to="/" className="item"> All Streams </Link>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}

export default Header;