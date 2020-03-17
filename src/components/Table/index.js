import React from "react";
import "./table.css";

export default function Table(props) {
  const data = props.data;
  const headings = Object.keys(data[0]);
  const { newName, newUsername, newEmail, newPhone } = props.newData;
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
            <th>Action</th>
          </tr>
          {data.map((ele, ind) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>
                  {ind === parseInt(props.editable) ? (
                    <input
                      type="text"
                      id="newName"
                      value={newName}
                      required
                      onChange={props.handleChange}
                    />
                  ) : (
                    ele.name
                  )}
                </td>
                <td>
                  {ind === parseInt(props.editable) ? (
                    <input
                      type="text"
                      id="newUsername"
                      value={newUsername}
                      required
                      onChange={props.handleChange}
                    />
                  ) : (
                    ele.username
                  )}
                </td>
                <td>
                  {ind === parseInt(props.editable) ? (
                    <input
                      type="text"
                      id="newEmail"
                      value={newEmail}
                      required
                      onChange={props.handleChange}
                    />
                  ) : (
                    ele.email
                  )}
                </td>
                <td>
                  {ind === parseInt(props.editable) ? (
                    <input
                      type="text"
                      id="newPhone"
                      value={newPhone}
                      onChange={props.handleChange}
                    />
                  ) : (
                    ele.phone
                  )}
                </td>
                <td>
                  <input
                    type="button"
                    id={ind}
                    value={ind === parseInt(props.editable) ? "save" : "edit"}
                    onClick={props.handleEdit}
                    style={{
                      backgroundImage: "linear-gradient(white,blue)",
                      color: "white"
                    }}
                  />
                  <input
                    type="button"
                    id={ind}
                    value="remove"
                    onClick={props.handleDelete}
                    style={{
                      backgroundImage: "linear-gradient(white,red)",
                      color: "black"
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
