import { Error, Loading, Success } from './Status';
import { reRunQueries } from '../gql/reRunQueries';
import { CREATE_QUOTE } from '../gql/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';


const CreateQuote = () => {

    const [createQuote, setCreateQuote] = useState('');


    const [createNewQuote, { loading, error, data }] = useMutation(CREATE_QUOTE, {
        // this is for auto refetch updated values & discard last cached values...
        refetchQueries: reRunQueries // <== re-fetch this list of queries...
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        createNewQuote({
            variables: {
                quote: createQuote
            }
        })
    }


    if (loading) return <Loading />

    return (
        <div className='container my-container'>

            {
                error && <Error error={error} />
                ||
                data && <Success data={data} />
            }

            <form onSubmit={handleSubmit} className='createQuoteForm'>
                <input
                    required
                    type="text"
                    autoComplete='on'
                    placeholder='Enter a quote'
                    value={createQuote}
                    onChange={e => setCreateQuote(e.target.value)}
                />

                <button
                    type='submit'
                    className="btn-floating btn cyan pulse"
                >
                    +
                </button>
            </form>
        </div>
    )
}

export default CreateQuote