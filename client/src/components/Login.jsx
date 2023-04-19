import { useState } from 'react'

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({});

    const handelUserInput = (e) => setLoginInfo(pre => ({ ...pre, [e.target.name]: e.target.value }))

    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(loginInfo);
        // setLoginInfo({})
    }

    return (
        <div className='container my-container'>
            <h5>User Login!</h5>

            <form onSubmit={handelFormSubmit}>
                <input type="email" name="email" placeholder='Email' onChange={handelUserInput} required />
                <input type="password" name="password" placeholder='Password' onChange={handelUserInput} required />
                <button className='btn deep-purple' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login