import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
const [input , setInput] = useState({});
const navigate = useNavigate();
    const handleInput=(e)=>{
           let name = e.target.name;
           let value = e.target.value;
           setInput((values)=>({...values, [name]: value}))
           console.log(input)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api = "http://localhost:8000/user/login";
        const response =  await axios.post(api,input)
        console.log(response.data);
        toast(response.data.msg)
        setTimeout(()=>{navigate("/home")} , 1200)  
    }
  return (
    <>
      <div id="signup">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="passward"
              placeholder="Enter password"
              name="password"
              onChange={handleInput}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer/>
    </>
  );
};
export default Signup;
