import { useMutation, useQuery } from "@apollo/client";
import { reRunQueries } from "../gql/reRunQueries";
import { GET_USER_PROFILE } from '../gql/queries';
import { DELETE_QUOTE } from '../gql/mutations';
import { Error, Loading } from './Status';



const Profile = () => {

    const [deleteBook] = useMutation(DELETE_QUOTE, {
        // this is for auto refetch updated values & discard last cached values...
        refetchQueries: reRunQueries // <== re-fetch this list of queries...
    });

    const { loading, error, data } = useQuery(GET_USER_PROFILE);

    const { firstName, lastName, email, quotes } = data?.userProfile ?? {};

    const handleDelete = (id) => {
        deleteBook({
            variables: { id }
        })
    }


    // window.location.reload(); // This will refresh the browser


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
                quotes?.map(({ quote, _id }) =>
                    <blockquote key={_id}>
                        <h6>{quote}</h6>
                        <p className='deleteBtn'>
                            <span onClick={() => handleDelete(_id)}>Delete</span>
                        </p>
                    </blockquote>
                )
            }

        </div>
    )
}

export default Profile