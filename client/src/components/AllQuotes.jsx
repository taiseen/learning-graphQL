// import manualApiCall from "../helper/manualApiCall";
import { GET_ALL_QUOTES } from '../gql/queries';
import { useQuery } from '@apollo/client';


const AllQuotes = () => {

    // const allQuotes = manualApiCall();
    const { loading, error, data } = useQuery(GET_ALL_QUOTES);

    if (loading) return <h1 className='loading'>Loading...</h1>;
    if (!data.quotes.length) return <h1 className='loading'>No quotes are available...</h1>;
    if (error) return console.log(error);


    return (
        <div className='container'>
            {
                data.quotes.map(({ quote, userId }, idx) =>
                    <blockquote key={idx}>
                        <h6>{quote}</h6>
                        <p className='right-align'>~{userId.firstName}</p>
                    </blockquote>
                )
            }
        </div>
    )
}

export default AllQuotes