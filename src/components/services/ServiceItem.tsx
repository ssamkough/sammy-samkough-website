import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }: { service: any }) => {
  return (
    <Card className="entity-card service">
      <Card.Header>{service.date}</Card.Header>
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.content}</Card.Text>
        <Link to={{ pathname: "/service/" + service.path, state: service }}>
          <Button variant="outline-secondary">View Service</Button>
        </Link>
      </Card.Body>
      <Card.Footer>{service.tags}</Card.Footer>
    </Card>
  );
};

export default ServiceItem;
