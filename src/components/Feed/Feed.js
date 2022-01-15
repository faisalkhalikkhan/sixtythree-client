import React from 'react'
import UserCard from '../Card/UserCard';

const Feed = () => {
    const data = [
      {
        id: 1,
        firstname: "Faisal",
        lastname: "Khan",
        email: "faisal.khalik.khan@gmail.com",
        contactNo: 7400514604,
        address: "21/1 rajpura burhanpur madhya pradesh 450331",
      },
      {
        id: 2,
        firstname: "36",
        lastname: "Sharma",
        email: "63@gmail.com",
        contactNo: 8955625695,
        address: "bhopal madhya pradesh 450331",
      },
    ];
    // const data = []
    return (
        <div className="feed">
            {data.length === 0 && <div>
                <button className='feed__cbtn'>CREATE USER</button>
            </div>}
        {data.length > 0 && data.map((user) => (
            <UserCard name={`${user.firstname} ${user.lastname}`} email={user.email} contact={ user.contactNo} address={user.address} />
        ))}
      </div>
    );
}

export default Feed
