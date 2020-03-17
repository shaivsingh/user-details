import React from "react";
import "./inputForm.css";

export default function inputForm(props) {
  const { name, username, email, phone } = props.data;
  return (
    <div style={{ width: "70%", margin: "20px auto" }}>
      <form
        onSubmit={props.handleSubmit}
        style={{ margin: "auto" }}
        id="addDetails"
      >
        <input
          type="text"
          placeholder={"name"}
          id="name"
          required
          onChange={props.handleChange}
          value={name}
          min="2"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          required
          value={username}
          onChange={props.handleChange}
          title={"Enter valid email like: example@yahoo.com"}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={props.handleChange}
          value={email}
          required
        />
        <input
          type="tel"
          placeholder="phone"
          id="phone"
          onChange={props.handleChange}
          value={phone}
          required
          min="2"
        />
        <input type="submit" id="add" />
      </form>
    </div>
  );
}
