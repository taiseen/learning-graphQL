import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({});
    const navigate = useNavigate();

    const handelUserInput = (e) => setLoginInfo(pre => ({ ...pre, [e.target.name]: e.target.value }))

    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(loginInfo);
        navigate('/');
    }

    return (
        <div className='container my-container'>
            <h5>User Login!</h5>

            <form onSubmit={handelFormSubmit}>
                <input type="email" name="email" placeholder='Email' onChange={handelUserInput} required />
                <input type="password" name="password" placeholder='Password' onChange={handelUserInput} required />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to='/registration'><p>Don't have an account?</p></Link>
                    <button className='btn deep-purple' type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login