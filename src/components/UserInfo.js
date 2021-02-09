import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export const UserInfo = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <ListGroup>
          <ListGroupItem>Name: {user.name}</ListGroupItem>
          <ListGroupItem>State: {user.state}</ListGroupItem>
          <ListGroupItem>Address: {user.address}</ListGroupItem>
          <ListGroupItem>Date of Birth: {user.dob}</ListGroupItem>
          <ListGroupItem>
            Verified: {user.verified_status.toString()}
          </ListGroupItem>
          <ListGroupItem>Account Status: {user.account_status}</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
