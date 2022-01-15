import React from "react";
import Avatar from "@mui/material/Avatar";
import "./card.css";
import { Divider, IconButton, Popover } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserCard = ({ name, email, contact, address }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  ////
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);
  const id = open1 ? "simple-popover" : undefined;

  return (
    <div className="user__card">
      <div className="user__card__left">
        <Avatar
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 0xffffff).toString(
              16
            )}`,
          }}
          sx={{ width: 56, height: 56 }}
        >
          {name[0].toUpperCase()}
        </Avatar>
        <div style={{ marginLeft: "15px" }}>
          <h3>{name}</h3>
          <h5>email: {email}</h5>
          <h5>Contact Number: {contact}</h5>
        </div>
      </div>
      <div className="threeDot">
        <IconButton aria-describedby={id} onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className="popBox">
          <Avatar
            style={{
              backgroundColor: "#D3DEDC",
            }}
            sx={{ width: 100, height: 100 }}
          >
            {name[0].toUpperCase()}
          </Avatar>
          <h2>Name: {name} </h2>
          <h4>email: {email}</h4>
          <h4>Contact Number: {contact}</h4>
          <h4>Address: {address}</h4>
        </div>
      </Popover>

      {/* ///// */}
      <Popover
        id={id}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <div style={{ width: "120px", height: "120px", padding: "10px" }}>
          <div className="popItem">
            <EditIcon /> <h4>Edit</h4>{" "}
          </div>
          <Divider />
          <div className="popItem">
            <DeleteIcon /> <h4>Delete</h4>{" "}
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default UserCard;
