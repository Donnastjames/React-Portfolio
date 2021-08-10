import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Portfolio() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    // <div>
    //   <h1>Blog Page</h1>
    //   <p>
    //     Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
    //     Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
    //     dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
    //     sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
    //     sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
    //     vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
    //     libero. Class aptent taciti sociosqu ad litora torquent per conubia
    //     nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
    //     lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    //     Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
    //     in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
    //     bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
    //     est ligula suscipit velit, sed bibendum turpis dui in sapien.
    //   </p>
    // </div>
  );
}
