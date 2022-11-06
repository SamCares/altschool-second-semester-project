import React from "react";
import UserCard from './userCard'
//import MoreInfo from "./moreInfo";
import { Link } from "react-router-dom";

const ApiCall = ({ currentPost, postsPerPage, paginate, totalPost }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div>
            <section className="apipage-container">
                <h1 className="heading">Checkout <span>My Repositories</span></h1>
                {/* {profile.length === 0 && <h1 className="loader">Loading...</h1>}  */}
                <div className="box-container">
                    {currentPost.map((user, i) => (
                        <div key={i}>
                            <Link>
                                <UserCard userData={user} />
                            </Link>
                            {/* <MoreInfo userData = {user}/> */}
                        </div>
                    ))}
                </div>
                <div className="page-flex">
                    {pageNumbers.map(number =>
                    (<p key={number}>
                        <Link className="btn active" onClick={() => paginate(number)} >{number}</Link>
                    </p>))}
                </div>
                <Link className="more">
                    Home
                </Link>
            </section>

        </div>
    )
}

export default ApiCall