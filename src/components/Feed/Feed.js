import React from "react";
import UserCard from "../Card/UserCard";
import "./feed.css";

const Feed = ({ data }) => {
  return (
    <div className="feed">
      {data.length === 0 && (
        <div>
          <button className="feed__cbtn">CREATE USER</button>
        </div>
      )}
      {data.length > 0 &&
        data.map((user) => (
          <UserCard
            name={`${user.firstname} ${user.lastname}`}
            email={user.email}
            contact={user.contactNo}
            address={user.address}
          />
        ))}
    </div>
  );
};

export default Feed;
