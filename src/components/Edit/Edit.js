import React from "react";
import "./e.css";
import { Input } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_user, update_user } from "../redux/actions/user.action";
import { make_it_null } from "../redux/actions/edit.action";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [address, setAddress] = useState("");

  const dispu = useDispatch();
  const data = useSelector((state) => state.Edit);
  const nevigate = useNavigate();

  const submitHandler = () => {
    if (firstname.length === 0) {
      alert("Invalid Input/ or Feild Empty");
    } else if (lastname.length === 0) {
      alert("Invalid Input/ or Feild Empty");
    } else if (email.length === 0) {
      alert("Invalid Input/ or Feild Empty");
    } else if (address.length === 0) {
      alert("Invalid Input/ or Feild Empty");
    } else if (contact.toString().length < 10) {
      alert("Invalid Input/ or Feild Empty");
    } else {
      axios
        .put(
          `https://sixty-three-project-backend.herokuapp.com/user/edit/${data._id}`,
          {
            firstname: firstname,
            lastname: lastname,
            email: email,
            contactNo: contact,
            address: address,
          }
        )
        .then((res) => {
          dispu(
            update_user({
              _id: data._id,
              firstname: firstname,
              lastname: lastname,
              email: email,
              contactNo: contact,
              address: address,
            })
          );
          alert("Successful");
        });

      nevigate("/");
    }
  };

  return (
    <div className="user_form">
      <h3 style={{ marginTop: "15px" }}>First Name</h3>
      <Input
        value={firstname}
        onChange={(e) => setFirst(e.target.value)}
        placeholder={`${data.firstname}`}
      />
      <h3 style={{ marginTop: "15px" }}>Last Name</h3>
      <Input
        value={lastname}
        onChange={(e) => setLast(e.target.value)}
        placeholder={` ${data.lastname}`}
      />
      <h3 style={{ marginTop: "15px" }}>Email Address</h3>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={` ${data.email}`}
      />
      <h3 style={{ marginTop: "15px" }}>Contact Number</h3>
      <Input
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder={` ${data.contactNo}`}
      />
      <h3 style={{ marginTop: "15px" }}>Address</h3>
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder={` ${data.address}`}
      />
      <br />
      <button onClick={submitHandler} className="create__cbtn">
        EDIT USER
      </button>
    </div>
  );
};

export default Edit;
