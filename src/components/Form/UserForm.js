import { Input } from "@mui/material";
import { useState } from "react";
import "./f.css";
import { useDispatch } from "react-redux";
import { add_user } from "../redux/actions/user.action";
import axios from "axios";

const UserForm = () => {
  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [address, setAddress] = useState("");

  const dispu = useDispatch();

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
        .post("https://sixty-three-project-backend.herokuapp.com/user/create", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          contactNo: contact,
          address: address,
        })
        .then((res) => {
          dispu(add_user(res.data));
          alert("Successful");
        });
    }
  };

  return (
    <div className="user_form">
      <h3 style={{ marginTop: "15px" }}>First Name</h3>
      <Input
        value={firstname}
        onChange={(e) => setFirst(e.target.value)}
        placeholder="Drop your first name here..."
      />
      <h3 style={{ marginTop: "15px" }}>Last Name</h3>
      <Input
        value={lastname}
        onChange={(e) => setLast(e.target.value)}
        placeholder="Drop your last name here..."
      />
      <h3 style={{ marginTop: "15px" }}>Email Address</h3>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Drop your email here..."
      />
      <h3 style={{ marginTop: "15px" }}>Contact Number</h3>
      <Input
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Drop your mobile number here..."
      />
      <h3 style={{ marginTop: "15px" }}>Address</h3>
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Drop your address here..."
      />
      <br />
      <button onClick={submitHandler} className="create__cbtn">
        CREATE USER
      </button>
    </div>
  );
};

export default UserForm;
