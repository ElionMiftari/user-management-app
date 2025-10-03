import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserCard({ user, onDelete }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>
          <strong>Company:</strong> {user.company?.name}
        </Card.Text>
        <Link to={`/users/${user.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
        <Button variant="danger" onClick={onDelete}>
            Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
