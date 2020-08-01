import React from "react";
import { Card, Button, Row, Container } from 'react-bootstrap'
import AddRemoveButton from 'components/AddRemoveButton'


function Book(props) {
  const {title, description, id, image, author, link} = props;
  const action = props.deleteBook ? 'delete' : 'save';
  const typeOfButton = props.deleteBook ? props.deleteBook : props.saveBook;

  return (
    <>
      <Card id={id + "Card"} border="secondary">
        <Card.Body>    
          <Card.Img src={image} alt={"Image of " + title} variant="left" />
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>by {author}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" href={ '/saved/' + id} className="mr-2">Read summary</Button>
            <Button variant="secondary" href={link} target="_blank" rel="noopener noreferrer" className="mr-2">View on Google Books</Button>
            
            {/* {action === 'delete' ? (
            <Button className="btn btn-danger mr-2" id={id} onClick={(event) => { props.deleteBook(event.target.id) }}>Remove</Button>
            ) : (
            <Button className="btn btn-danger mr-2" id={id} onClick={(event) => { props.saveBook(event.target.id) }}>Save</Button>
            )} */}
            
            <AddRemoveButton id={id} typeOfButton={typeOfButton} typeOfAction={action} />
          </Card.Footer>
      </Card>
      <br />
    </>
  );
};

export default Book