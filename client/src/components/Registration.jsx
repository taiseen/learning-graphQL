import { useState } from 'react'

const Registration = () => {
    const [registrationInfo, setRegistrationInfo] = useState({});

    const handelUserInput = (e) => setRegistrationInfo(pre => ({ ...pre, [e.target.name]: e.target.value }))

    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(registrationInfo);
        // setLoginInfo({})
    }

    return (
        <div className='container my-container'>
            <h5>User Registration!</h5>

            <form onSubmit={handelFormSubmit}>
                <input type="text" name="firstName" placeholder='First Name' onChange={handelUserInput} required />
                <input type="text" name="lastName" placeholder='Last Name' onChange={handelUserInput} required />
                <input type="email" name="email" placeholder='Email' onChange={handelUserInput} required />
                <input type="password" name="password" placeholder='Password' onChange={handelUserInput} required />
                <button className='btn deep-purple' type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Registration