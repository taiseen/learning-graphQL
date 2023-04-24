import { GET_OTHERS_PROFILE } from '../gql/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { Error, Loading } from './Status';


const OthersProfile = () => {

    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_OTHERS_PROFILE, {
        variables: { id }
    });

    const { firstName, lastName, email, quotes } = data?.user ?? {};


    if (loading) return <Loading />

    return (
        <div className='container my-container'>

            {
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
                    </blockquote>
                )
            }

        </div>
    )
}

export default OthersProfile