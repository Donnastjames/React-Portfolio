import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Portfolio.css';

export default function Project(props) {
  const { title, imageSrc, linkPath, altImage } = props;

  return (
    <Card style={{ width: '22rem', height: '15rem', zIndex: '-1'}}>
      <Card.Img src={imageSrc} alt={altImage} fluid />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="link" active href={linkPath} target="_blank" rel="noopener noreferrer" >Github</Button>
        </Card.Footer>
      </Card.ImgOverlay> 
    </Card>
  );

}