import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { UserTable } from "./components/UserTable";
import { UserInfo } from "./components/UserInfo";
import users from "./users.json";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [tableLayout, setTableLayout] = useState("scroll");
  const selectedUserRef = useRef(null);

  const selectUser = (user) => {
    setSelectedUser(user);

    if (selectedUserRef.current) {
      selectedUserRef.current.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }
  };

  return (
    <Container fluid>
      <Nav
        fill
        variant="tabs"
        defaultActiveKey="scroll"
        onSelect={(eventKey) => setTableLayout(eventKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="scroll">Scroll</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="paginate">Paginate</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="unset">Unset</Nav.Link>
        </Nav.Item>
      </Nav>
      <UserTable users={users} selectUser={selectUser} layout={tableLayout} />
      <div ref={selectedUserRef}>
        {selectedUser ? <UserInfo user={selectedUser} /> : null}
      </div>
    </Container>
  );
}

export default App;
