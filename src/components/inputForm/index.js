import React from "react";
import "./inputForm.css";

export default function inputForm(props) {
  const { errors, name, username, email, phone } = props.data;
  return (
    <div style={{ width: "70%", margin: "20px auto" }}>
      <form
        onSubmit={props.handleSubmit}
        style={{ margin: "auto", display: "flex" }}
        id="addDetails"
      >
        <div>
          <input
            type="text"
            placeholder={"name"}
            id="name"
            required
            autoComplete="off"
            onChange={props.handleChange}
            value={name}
            min="2"
          />
          <br />
          <span style={spanStyle}>{errors.name}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="username"
            id="username"
            required
            autoComplete="off"
            value={username}
            onChange={props.handleChange}
            title={"Enter valid email like: example@yahoo.com"}
          />{" "}
          <br />
          <span style={spanStyle}>{errors.username}</span>
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={props.handleChange}
            value={email}
            required
            autoComplete="off"
          />{" "}
          <br />
          <span style={spanStyle}>{errors.email}</span>
        </div>
        <div>
          <input
            type="tel"
            placeholder="phone"
            id="phone"
            onChange={props.handleChange}
            value={phone}
            required
            min="2"
            autoComplete="off"
          />{" "}
          <br />
          <span style={spanStyle}>{errors.phone}</span>
        </div>
        <div>
          <input type="submit" id="add" />
        </div>
      </form>
    </div>
  );
}

const spanStyle = {
  position: "relative",
  left: "10px",
  color: "red",
  fontSize: "0.8em"
};
