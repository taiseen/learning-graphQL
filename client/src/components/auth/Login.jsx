import { Link, useNavigate } from 'react-router-dom';
import { setToken } from '../../helper/localStorage';
import { LOGIN_USER } from '../../gql/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react'

const Login = () => {

    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({});

    // graphQL Mutation Call...
    const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);

    // locally data collect...
    const handelUserInput = (e) => setLoginInfo(pre => ({ ...pre, [e.target.name]: e.target.value }))

    // data send to server by graphQL...
    const handelFormSubmit = (e) => {
        e.preventDefault();
        loginUser({
            variables: {
                existingUser: loginInfo,
            }
        });
    }


    if (data) {
        setToken(data.loginExistingUser.token)
        navigate('/');
    };


    return (
        <div className='container my-container'>

            {
                loading && <h1 className='loading'>Loading...</h1>
            }

            {
                error && <div className='red card-panel'>{error?.message}</div>
            }

            <h5>User Login!</h5>

            <form onSubmit={handelFormSubmit}>
                <input type="email" name="email" placeholder='Email' onChange={handelUserInput} required />
                <input type="password" name="password" placeholder='Password' onChange={handelUserInput} required autoComplete="on" />

                <div className='displayFlex'>
                    <Link to='/registration'><p>Don't have an account?</p></Link>
                    <button className='btn deep-purple' type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login