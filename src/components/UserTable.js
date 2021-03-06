import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import _ from "lodash";
import "./UserTable.css";

export const UserTable = ({ users, selectUser, layout }) => {
  const [_users, setUsers] = useState([]);
  const [pages, setPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    if (layout === "paginate") {
      const pages = _.chunk(users, 10);
      const pageNumber = 0;

      setPageNumber(pageNumber);
      setPages(pages);
      setUsers(pages[pageNumber]);
    } else {
      setUsers(users);
    }
  }, [users, layout]);

  return (
    <div>
      <div className={layout}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>State</th>
              <th>Account Status</th>
              <th>View User Info</th>
            </tr>
          </thead>
          <tbody>
            {_users.map((user) => (
              <tr key={user.username}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.state}</td>
                <td>{user.account_status}</td>
                <td>
                  <Button onClick={() => selectUser(user)}>Select</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {layout === "paginate" ? (
        <Pagination>
          {pages.map((page, i) => (
            <Pagination.Item
              key={i}
              active={pageNumber === i}
              onClick={() => {
                setPageNumber(i);
                setUsers(pages[i]);
              }}
            >
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      ) : null}
    </div>
  );
};
