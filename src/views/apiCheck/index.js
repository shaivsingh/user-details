import React from "react";
import Table from "../../components/Table";
import InputForm from "../../components/inputForm";

export default class ApiTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      username: "",
      email: "",
      phone: "",
      editable: ""
    };
  }

  componentDidMount() {
    /******** api for data fetching ****************************/
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
        console.log(data);
      })
      .catch(console.log);
    /*******************************************************/
  }

  handleChange = e => {
    if (e.target.id === "name" || e.target.id === "newName") {
    } else if (e.target.id === "username") {
    } else if (e.target.id === "email") {
    } else if (e.target.id === "phone" || e.target.id === "newPhone") {
    }
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    /******** api for data insertion ****************************/
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.username,
        username: this.state.username,
        email: this.state.email,
        phone: this.state.phone
      })
    })
      .then(res => res.json())
      .then(data => {
        alert(data);
        console.log(data);
      })
      .catch(console.log);
    /*******************************************************/
    let { data } = this.state;
    data.push({
      id: data[data.length - 1].id + 1,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone
    });
    this.setState({
      name: "",
      username: "",
      email: "",
      phone: ""
    });
  };

  handleEdit = e => {
    let { data } = this.state;
    if (e.target.value === "save") {
      if (
        this.state.newName === "" ||
        this.state.newUsername === "" ||
        this.state.newEmail === "" ||
        this.state.newPhone === ""
      ) {
        alert("field cannot be empty");
        return;
      }
      let newId = data[e.target.id].id;
      /******** api for data updation ****************************/
      fetch("https://jsonplaceholder.typicode.com/users/" + newId, {
        method: "PUT",
        body: JSON.stringify({
          id: newId,
          name: this.state.newName,
          username: this.state.newUsername,
          email: this.state.newEmail,
          phone: this.state.newPhone
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(console.log);
      /*******************************************************/
      data.splice(e.target.id, 1, {
        id: newId,
        name: this.state.newName,
        username: this.state.newUsername,
        email: this.state.newEmail,
        address: "",
        phone: this.state.newPhone
      });
      this.setState({
        data,
        editable: ""
      });
    } else {
      this.setState({
        newName: data[e.target.id].name,
        newUsername: data[e.target.id].username,
        newEmail: data[e.target.id].email,
        newPhone: data[e.target.id].phone,
        editable: e.target.id
      });
    }
  };

  handleDelete = e => {
    let { data } = this.state;
    let newId = data[e.target.id].id;
    /******** api for data deletion ****************************/
    fetch("https://jsonplaceholder.typicode.com/users/" + newId, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(console.log);
    /*******************************************************/
    data.splice(e.target.id, 1);
    this.setState({
      data
    });
  };

  render() {
    let data, headings;
    if (this.state.data.length > 0) {
      data = this.state.data;
      headings = Object.keys(data[0]);
    }
    return (
      <div className="container">
        <header>
          <h3 style={{ textAlign: "center" }}>Users List</h3>
        </header>
        <div className="addData">
          <InputForm
            headings={headings}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state}
          />
        </div>
        {this.state.data.length > 0 && (
          <div className="UsersTable">
            <Table
              data={data}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleChange={this.handleChange}
              editable={this.state.editable}
              newData={this.state}
            />
          </div>
        )}
      </div>
    );
  }
}
