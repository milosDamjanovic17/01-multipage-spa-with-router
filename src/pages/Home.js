import { Link } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function HomePage() {

    return (
        <>
            <p>Home page</p> 
            <p>
                Navigate to <Link to="/products">products page</Link>
            </p>
        </>
    )
};

export default HomePage;