import React from 'react'


const moreInfo = ({ userData }) => {
    //const gitUrl = `${userData.git_url}`;
    return (
        <div>
            <p style={{ color: 'white' }} > User:  {userData.owner.login}</p>
            <p style={{ color: 'white' }}>{userData.name}</p>
            <p style={{ color: 'white' }} > Privacy:  {userData.visibility}</p>
            <p style={{ color: 'white' }} > Push Date:  {userData.pushed_at}</p>
            <p style={{ color: 'white' }} > last Commit:  {userData.updated_at}</p>
        </div>
    )
}

export default moreInfo