import React, { useRef, useState } from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { GrUpdate } from "react-icons/gr";
import "./RowTable.css";
import { v4 as uuidv4 } from "uuid";
const RowTable = ({ data, rowNumber, cancelHandler, updateHandler }) => {
  const [mode, setMode] = useState(data.mode);
  const newId = uuidv4();
  const fullnameRef = useRef(data.fullname);
  const usernameRef = useRef(data.username);
  const rolenameRef = useRef(data.rolename);
  const exitHandler = () => {
    cancelHandler(data);
    setMode(false);
  };
  const update = () => {
    const fullname = fullnameRef.current.value;
    const username = usernameRef.current.value;
    const rolename = rolenameRef.current.value;
    setMode(false);
    updateHandler(data.id,fullname,username,rolename);
  };
  return (
    <>
      <tr>
        <td className={"center table-item" + (rowNumber % 2)}>{rowNumber}</td>
        <td className={"table-item" + (rowNumber % 2)}>
          {mode === false ? (
            data.fullname
          ) : (
            <input ref={fullnameRef} type="text" defaultValue={data.fullname} />
          )}
        </td>
        <td className={"table-item" + (rowNumber % 2)}>
          {mode === false ? (
            data.username
          ) : (
            <input ref={usernameRef} type="text" defaultValue={data.username} />
          )}
        </td>
        <td className={"table-item" + (rowNumber % 2)}>
          {mode === false ? (
            data.rolename
          ) : (
            <input ref={rolenameRef} type="text" defaultValue={data.rolename} />
          )}
        </td>
        <td className={"center table-item" + (rowNumber % 2)}>
          {data.createdate}
        </td>
        <td className={"center table-item" + (rowNumber % 2)}>
          {data.lastmodifydate}
        </td>
        <td className={"center table-item" + (rowNumber % 2)}>
          {mode === false ? (
            <a onClick={() => setMode(true)}>
              <MdOutlineTipsAndUpdates />
            </a>
          ) : (
            <div className="action-group">
              <a onClick={update}>
                <GrUpdate />
              </a>
              <a onClick={exitHandler}>
                <ImCancelCircle />
              </a>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default RowTable;
