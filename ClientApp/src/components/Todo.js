import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
export default function Todo({todo}) {
    return (
        <div className="col-4 mb-3">
        <Card>
          {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle tag="h5">{todo.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <CardText>{todo.text}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    )
}
