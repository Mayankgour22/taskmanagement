import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Home = () => {
   const [email, setEmail] = useState();
   const [password , setPassword] = useState();
   const navigate = useNavigate();
   const handleSubmit=async(e)=>{
      e.preventDefault();
      let api="http://localhost:8000/user/loginuser";
      try {
        let response = await axios.post(api, {email:email , password:password})
        console.log(response.data)
        localStorage.setItem("user", response.data.user.name);
        localStorage.setItem("email" ,response.data.user.email)
        toast(response.data.msg)
        setTimeout(()=>{navigate("/dashbord")}, 1000);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
   }
  return (
    <>
      <div id="login">
        <h1> Login Register Page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        <div id="tosignup">
          if you dont't have an account <a href="/signup">click here</a>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Home;
