import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Marc"; // Change to empty string to test "Hello, there!"

function App() {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <h3 className="mt-3">Hello, {firstName ? firstName : "there"}!</h3>
      {firstName && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          alt="User Avatar"
          width="50"
        />
      )}
    </Container>
  );
}

export default App;
