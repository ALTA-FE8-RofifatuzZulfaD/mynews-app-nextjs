import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Cards = ({image, title, date, author, content}) => {
  return (
    <Card style={{ width: '35rem'}}>
      <Card.Img variant="top" src={image} style={{height: '20rem', objectFit: 'cover'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>By : {author}</ListGroup.Item>
        <ListGroup.Item>{date}</ListGroup.Item>
        <ListGroup.Item>{content}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Cards