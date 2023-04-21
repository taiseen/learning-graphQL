import { Link } from 'react-router-dom';
import React from 'react'


const NavBar = () => {
    return (
        <nav style={{ marginBottom: '40px' }}>

            <div className="nav-wrapper deep-purple">

                <Link to='/' className="brand-logo left" style={{ paddingLeft: '15px' }}>
                    Quote App
                </Link>

                <ul id="nav-mobile" className="right">
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/registration'>Registration</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/crateQuote'>Crate Quote</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar