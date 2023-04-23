import { Error, Loading, Success } from './Status';
import { CREATE_QUOTE } from '../gql/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';


const CreateQuote = () => {

    const [createQuote, setCreateQuote] = useState('');


    const [createNewQuote, { loading, error, data }] = useMutation(CREATE_QUOTE, {
        // this is for auto refetch updated values & discard last cached values...
        refetchQueries: [
            'getAllQuote', // <== re-run this query again...
            'getUserProfile',
        ]
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        createNewQuote({
            variables: {
                quote: createQuote
            }
        })
    }


    return (
        <div className='container my-container'>

            {
                loading && <Loading />
                ||
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