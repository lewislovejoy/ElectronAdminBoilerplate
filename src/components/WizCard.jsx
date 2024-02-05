import { Card } from 'react-bootstrap';

export function WizCard() {
  return (
    <div style={{ width: '100%', padding: 15 }}>
      <Card style={{ width: '100%', border: 'none' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text style={{ color: '#89879f', fontSize: 14 }}>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
