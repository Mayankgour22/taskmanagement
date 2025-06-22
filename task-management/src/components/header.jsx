import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Header=()=>{

    const navigate= useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `http://localhost:8000/admin/userlogin`;
    try {
      const response = await axios.post(api, { email, password });
      localStorage.setItem("username" , response.data.user.name)
      localStorage.setItem("userid" , response.data.user._id)
      console.log(response);
      toast(response.data.msg)
      navigate("userdashbord")
    } catch (error) {
      console.log(error);
      toast(error.response.data.msg);
    }
  };
    return (
      <>
        <nav class="navbar">
          <div class="nav-logo">Task Management</div>

          <ul class="nav-links">
            <li>
              <a href="/dashbord">Dashboard</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <FaUserCircle onClick={handleShow} />
            </li>
          </ul>

          <div class="nav-buttons">
            <button
              onClick={() => {
                navigate("/home");
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </button>
          </div>
        </nav>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <ToastContainer/>
      </>
    );
}
export default Header;