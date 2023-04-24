// import manualApiCall from "../helper/manualApiCall";
import { GET_ALL_QUOTES } from '../gql/queries';
import { useQuery } from '@apollo/client';
import { Error, Loading } from './Status';
import { Link } from 'react-router-dom';


const AllQuotes = () => {

    // const allQuotes = manualApiCall();
    const { loading, error, data } = useQuery(GET_ALL_QUOTES);

    if (loading) return <Loading />
    if (error) return <Error error={error} />
    if (!data?.quotes?.length) return <h1 className='loading'>No quotes are available...</h1>;

    return (
        <div className='container'>
            {
                data?.quotes?.map(({ quote, userId }, idx) =>
                    <blockquote key={idx}>
                        <h6>{quote}</h6>
                        <Link to={`/profile/${userId?._id}`}>
                            <p className='right-align'>~{userId?.firstName}</p>
                        </Link>
                    </blockquote>
                )
            }
        </div>
    )
}

export default AllQuotes