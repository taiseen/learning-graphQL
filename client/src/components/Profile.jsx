import { GET_USER_PROFILE } from '../gql/queries';
import { useQuery } from "@apollo/client";
import { Error, Loading } from './Status';


const Profile = () => {

    const { loading, error, data } = useQuery(GET_USER_PROFILE);

    const { firstName, lastName, email, quotes } = data?.userProfile ?? {};


    return (
        <div className='container my-container'>

            {
                loading && <Loading />
                ||
                error && <Error error={error} />
            }

            <div className='center-align'>
                <img
                    className='circle imgLogo'
                    src={`https://robohash.org/${firstName}?size=150x150`}
                />
                <h5>Name: {firstName + ' ' + lastName}</h5>
                <h5>Email: {email}</h5>
            </div>

            <hr />
            
            <p>My Created Quote List:- </p>

            {
                quotes?.map(({ quote }, idx) =>
                    <blockquote key={idx}>
                        <h6>{quote}</h6>
                        <p className='right-align'>
                            <span>Delete</span>
                        </p>
                    </blockquote>
                )
            }

        </div>
    )
}

export default Profile