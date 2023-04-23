import { clearToken, getToken } from '../helper/localStorage';
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate();
    const token = getToken();


    const handleLogOut = () => {
        navigate('/login');
        clearToken();
    }


    return (
        <nav className='navBar'>

            <div className="nav-wrapper deep-purple">

                <Link to='/' className="brand-logo left">
                    Quote App
                </Link>

                <ul id="nav-mobile" className="right">
                    {
                        token
                            ? (
                                <>
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li><Link to='/crateQuote'>Crate Quote</Link></li>
                                    <button className='red btn' onClick={handleLogOut}>Logout</button>
                                </>
                            ) : (
                                <>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/registration'>Registration</Link></li>
                                </>
                            )
                    }
                </ul>

            </div>
        </nav>
    )
}

export default NavBar