export const Loading = () => <h1 className='loading'>Loading...</h1>

export const Error = ({ error }) => <div className='red card-panel'>{error?.message}</div>

export const Success = ({ data, email }) => {
    if (email) return <div className='green card-panel'> {email} create successfully... 👍</div>;
    if (data) return <div className='green card-panel'>{data?.createQuote}</div>;
}

