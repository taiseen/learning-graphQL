import React from 'react'

const Profile = () => {
    return (
        <div className='container my-container'>

            <div className='center-align'>
                <img
                    className='circle'
                    style={{ marginTop: '25px', border: '1px solid' }}
                    src="https://robohash.org/cat.png?size=150x150"
                />
                <h5>Name: </h5>
                <h5>Email: </h5>
            </div>

            <p>My Created Quote List:- </p>

            <blockquote>
                <h6>it is demo...</h6>
            </blockquote>

        </div>
    )
}

export default Profile