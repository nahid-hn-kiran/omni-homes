import { Col, Container, Row } from "react-bootstrap";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="text-center">
          <Col>
            <h1 className="section-title">404</h1>
            <p className="lead section-title">
              Oops! The page youre looking for doesnt exist.
            </p>
            <Link
              to="/"
              size="lg"
              className="gap-top-20 omni-primary-btn rounded"
            >
              Go Back to Home
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
