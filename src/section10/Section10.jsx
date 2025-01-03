import React, { useState, useEffect } from "react";
import { userList } from "./data/table.js";
import "./index.css";
import RowTable from "./components/RowTable.jsx";
import { FormatDate } from "./util/DateTime.js";
import { v4 as uuidv4, v4 } from "uuid";

const Section10 = () => {
  const [initialData, setIntialData] = useState(userList);
  const [data, setData] = useState(userList);
  const [sortState, setSortState] = useState("asc");
  const [waitRole, setWaitRole] = useState(
    data.filter((item) => item.rolename === "")
  );
  const [notAssigned, setNotAssigned] = useState(waitRole.length || 0);

  useEffect(() => {
    const filteredData = initialData.filter((item) => item.rolename === "");
    setWaitRole(filteredData);
    setNotAssigned(filteredData.length || 0);
    setData(initialData);
  }, [initialData]);

  const dataFilter = (item) => {
    setData(item);
  };
  const sortData = (database, column, type) => {
    setSortState(sortState === "asc" ? "dsc" : "asc");
    const newData = [...database].sort((a, b) => {
      let comparison = 0;
      if (type === "string") {
        comparison = a[column].localeCompare(b[column]);
      } else if (type === "number") {
        comparison = a[column] - b[column];
      } else if (type === "date") {
        comparison = new Date(a[column]) - new Date(b[column]);
      }
      return sortState === "asc" ? comparison : -comparison;
    });
    setData(newData);
  };
  const cancelHandler = (item) => {
    let updateData;
    if (item.id !== 0) {
      updateData = initialData.map((row) =>
        row.id === item.id ? { ...row, mode: false } : row
      );
    } else {
      updateData = initialData.filter((row) => row.id !== 0);
    }
    setIntialData(updateData);
  };
  const updateHandler = (id, fullname, username, rolename) => {
    const updateData = initialData.map((row) =>
      row.id === id
        ? {
            ...row,
            mode: false,
            id: row.id !== 0 ? row.id : v4(),
            fullname: fullname || row.fullname,
            username: username || row.username,
            rolename: rolename || row.rolename,
            lastmodifydate: FormatDate(new Date()),
          }
        : row
    );
    setIntialData(updateData);
    //roleHandler();
  };

  const AddHandler = () => {
    const existData = initialData.filter((row) => row.id === 0);
    if (!existData.length > 0) {
      const newData = {
        id: 0,
        fullname: "",
        username: "",
        rolename: "",
        createdate: FormatDate(new Date()),
        lastmodifydate: FormatDate(new Date()),
        mode: true,
      };
      setIntialData([...initialData, newData]);
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-group">
          <div className="form-header">
            <div className="title-group">
              <h3>User List</h3>
              <div className="filter">
                <a
                  className="filter-table"
                  onClick={() => setIntialData(userList)}
                >
                  Reset Data
                </a>
                <a
                  className="filter-table"
                  onClick={() => dataFilter(initialData)}
                >
                  all Data
                </a>
                <a
                  className="filter-table"
                  onClick={() => dataFilter(waitRole)}
                >
                  Not Assigned <span className="badge">{notAssigned}</span>
                </a>
              </div>
            </div>
            <button className="btn-primary" onClick={AddHandler}>
              Add Data
            </button>
          </div>
          <div className="form-body">
            <table className="my-table">
              <thead>
                <tr>
                  <td className="table-header">#</td>
                  <td className="table-header">
                    <a
                      onClick={() =>
                        sortData(data, "fullname", "string", sortState)
                      }
                    >
                      Full Name
                    </a>
                  </td>
                  <td className="table-header">
                    <a
                      onClick={() =>
                        sortData(data, "username", "string", sortState)
                      }
                    >
                      Username
                    </a>
                  </td>
                  <td className="table-header">
                    <a
                      onClick={() =>
                        sortData(data, "rolename", "string", sortState)
                      }
                    >
                      Role Name
                    </a>
                  </td>
                  <td className="table-header">
                    <a
                      onClick={() =>
                        sortData(data, "createdate", "date", sortState)
                      }
                    >
                      Create Date
                    </a>
                  </td>
                  <td className="table-header">
                    <a
                      onClick={() =>
                        sortData(data, "lastmodifydate", "date", sortState)
                      }
                    >
                      Last Modify Date
                    </a>
                  </td>
                  <td className="table-header">Action</td>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <RowTable
                    key={index}
                    data={user}
                    rowNumber={index + 1}
                    cancelHandler={cancelHandler}
                    updateHandler={updateHandler}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section10;
