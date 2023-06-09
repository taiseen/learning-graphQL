import { CREATE_NEW_USER } from '../../gql/mutations';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Error, Success } from '../Status';


const Registration = () => {

    const navigate = useNavigate();
    const [registrationInfo, setRegistrationInfo] = useState({});


    const [registerNewUser, { error, data }] = useMutation(CREATE_NEW_USER);
    const { email } = data?.createNewUser ?? {}


    const handelUserInput = (e) => setRegistrationInfo(pre => ({ ...pre, [e.target.name]: e.target.value }))


    const handelFormSubmit = (e) => {
        e.preventDefault();
        registerNewUser({
            variables: {
                newUser: registrationInfo,
            }
        });
    }


    useEffect(() => {
        if (email) {
            setTimeout(() => {
                navigate('/login');
            }, 5000);
        }
    }, [email]);


    return (
        <div className='container my-container'>

            {
                error && <Error error={error} />
                ||
                email && <Success email={email} />
            }

            <h5>User Registration!</h5>

            <form onSubmit={handelFormSubmit}>
                <input type="text" name="firstName" placeholder='First Name' onChange={handelUserInput} required />
                <input type="text" name="lastName" placeholder='Last Name' onChange={handelUserInput} required />
                <input type="email" name="email" placeholder='Email' onChange={handelUserInput} required />
                <input type="password" name="password" placeholder='Password' onChange={handelUserInput} required autoComplete="on" />
                <div className='displayFlex'>
                    <button className='btn deep-purple' type='submit'>Register</button>
                    <Link to='/login'><p>Already have an account?</p></Link>
                </div>
            </form>
        </div>
    )
}

export default Registration