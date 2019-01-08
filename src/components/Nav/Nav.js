import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div>
                <h1>Google Book Search</h1>
            </div>
            <ul>
                <li>
                    <Link to='/'
                        className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                        Search
                    </Link>
                </li>
                <li>
                    <Link to='/saved'
                        className={window.location.pathname === '/saved' ? 'nav-link active' : 'nav-link'}>
                        Saved
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;