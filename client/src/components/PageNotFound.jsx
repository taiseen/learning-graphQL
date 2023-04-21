import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="container pageNotFound">
            <h2>404 | Page Not Found</h2>
            <Link to='/'> <h4>Go to home page</h4> </Link>
        </div>
    )
}

export default PageNotFound 