import React from "react";
import UserCard from "../Card/UserCard";
import "./feed.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const data = useSelector((state) => state.Users);
  const nevigate = useNavigate();

  return (
    <div className="feed">
      {data.length === 0 && (
        <div>
          <button
            onClick={() => {
              nevigate("/form");
            }}
            className="feed__cbtn"
          >
            CREATE USER
          </button>
        </div>
      )}
      {data.length > 0 &&
        data.map((user) => (
          <UserCard
            key={user._id}
            uid={user._id}
            name={`${user.firstname} ${user.lastname}`}
            email={user.email}
            contact={user.contactNo}
            address={user.address}
            user={user}
          />
        ))}
    </div>
  );
};

export default Feed;
