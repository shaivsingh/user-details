import React from "react";
import "./table.css";

export default function Table(props) {
  const data = props.data;
  const headings = Object.keys(data[0]);
  const { errors, newName, newUsername, newEmail, newPhone } = props.newData;
  return (
    <>
      <table>
        <caption></caption>
        <tbody>
          <tr>
            <th>{headings[0]}</th>
            <th>{headings[1]}</th>
            <th>{headings[2]}</th>
            <th>{headings[3]}</th>
            <th>{headings[5]}</th>
            <th>
              Action
              <button
                style={{
                  marginLeft: "20px",
                  borderRadius: "20px",
                  outline: "none"
                }}
                id="sortBtn"
                onClick={props.handleSort}
              >
                Sort
              </button>
            </th>
          </tr>
          {data.map((ele, ind) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>
                  {ele.id === parseInt(props.editable) ? (
                    <>
                      <input
                        type="text"
                        id="newName"
                        value={newName}
                        required
                        onChange={props.handleChange}
                      />
                      <br />
                      <span style={spanStyle}>{errors.newName}</span>
                    </>
                  ) : (
                    ele.name
                  )}
                </td>
                <td>
                  {ele.id === parseInt(props.editable) ? (
                    <>
                      {" "}
                      <input
                        type="text"
                        id="newUsername"
                        value={newUsername}
                        required
                        onChange={props.handleChange}
                      />
                      <br />
                      <span style={spanStyle}>{errors.newUsername}</span>
                    </>
                  ) : (
                    ele.username
                  )}
                </td>
                <td>
                  {ele.id === parseInt(props.editable) ? (
                    <>
                      {" "}
                      <input
                        type="text"
                        id="newEmail"
                        value={newEmail}
                        required
                        onChange={props.handleChange}
                      />
                      <br />
                      <span style={spanStyle}>{errors.newEmail}</span>
                    </>
                  ) : (
                    ele.email
                  )}
                </td>
                <td>
                  {ele.id === parseInt(props.editable) ? (
                    <>
                      <input
                        type="text"
                        id="newPhone"
                        value={newPhone}
                        onChange={props.handleChange}
                      />
                      <br />
                      <span style={spanStyle}>{errors.newPhone}</span>
                    </>
                  ) : (
                    ele.phone
                  )}
                </td>
                <td>
                  <input
                    type="button"
                    id={ele.id}
                    value={
                      ele.id === parseInt(props.editable) ? "save" : "edit"
                    }
                    onClick={props.handleEdit}
                    style={{
                      backgroundImage: "linear-gradient(white,blue)",
                      color: "white"
                    }}
                  />
                  <input
                    type="button"
                    id={ele.id}
                    value="X"
                    onClick={props.handleEdit}
                    style={{
                      backgroundImage: "linear-gradient(red,black)",
                      color: "white",
                      display:
                        ele.id === parseInt(props.editable)
                          ? "inline-block"
                          : "none"
                    }}
                  />
                  <input
                    type="button"
                    id={ele.id}
                    value="remove"
                    onClick={props.handleDelete}
                    style={{
                      backgroundImage: "linear-gradient(white,red)",
                      color: "black",
                      display:
                        ele.id === parseInt(props.editable)
                          ? "none"
                          : "inline-block"
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
const spanStyle = {
  position: "relative",
  left: "10px",
  color: "red",
  fontSize: "0.8em"
};
