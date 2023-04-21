import { useEffect, useState } from 'react';
import { serverUrl } from './serverUrl';

const manualApiCall = () => {

    const [allQuotes, setAllQuotes] = useState([]);

    // without apollo client - network call automatically when this component is mount...
    useEffect(() => {
        fetch(serverUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query getAllQuote {
                    quotes {
                      quote
                      userId{
                        firstName
                        _id
                      }
                    }
                  }
                `
            })
        })
            .then(res => res.json())
            .then(data => setAllQuotes(data?.data?.quotes))
            .catch(err => console.log(err))
    }, []);

    return allQuotes;
}

export default manualApiCall