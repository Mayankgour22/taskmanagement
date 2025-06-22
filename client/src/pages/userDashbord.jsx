import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link , Outlet } from "react-router-dom";

const UserDashbord = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link as={Link} to="mytask">
                My Task
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <h1>hi {localStorage.getItem("username")}</h1>
      </div>
      <Outlet />
    </>
  );
};
export default UserDashbord;
