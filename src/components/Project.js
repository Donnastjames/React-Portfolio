import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Portfolio.css';

export default function Project(props) {
  const { title, imageSrc, linkPath, altImage } = props;

  return (
    <Button
      variant="link"
      active
      href={linkPath}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4>{title}</h4>
      <Card style={{ width: '18rem', height: '13rem', zIndex: '-1'}}>
        <Card.Img src={imageSrc} alt={altImage} fluid />
      </Card>
    </Button>
  );

}