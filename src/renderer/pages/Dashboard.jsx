import { Col, Container, Row } from 'react-bootstrap';
import { WizFrame } from '../../frame';
import { WizCard, WizChartPanel } from '../../components';

function Dashboard() {
  return (
    <WizFrame navHighlight={['HOME', 'Bootstrap', 'Light']}>
      <Container style={{ padding: 0 }}>
        <Row className="no-gutters">
          <Col>
            <WizCard />
          </Col>
          <Col>
            <WizCard />
          </Col>
          <Col>
            <WizCard />
          </Col>
          <Col>
            <WizCard />
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col lg={4}>
            <WizChartPanel />
          </Col>
          <Col lg={8}>
            <WizCard />
          </Col>
        </Row>
      </Container>
    </WizFrame>
  );
}

export default Dashboard;
