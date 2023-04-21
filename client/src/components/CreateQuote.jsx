import { useState } from 'react'

const CreateQuote = () => {

    const [createQuote, setCreateQuote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(createQuote);
    }

    return (
        <div className='container my-container'>
            <form onSubmit={handleSubmit} className='createQuoteForm'>
                <input
                    required
                    type="text"
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