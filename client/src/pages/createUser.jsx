import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
const CreateUser = () => {
    const [name , setName] = useState("");
    const [ department, setDepartment] = useState("");
    const [ email , setEmail] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api = "http://localhost:8000/user/createuser";
        try {
            const response = await axios.post(api , {name:name , department:department , email:email})
            console.log(response.data)
        } catch (error) {
            toast(error)
        }
        toast("User Creacted succeffuly") 
        setTimeout(()=>{navigate("/assigntask")}, 1000)
    }
  return (
    <>
      <div id="createform">
        <h1>Create User</h1>
        <Form style={{ width: "300px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          >
            <option>Open this select menu</option>
            <option>Programmer</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>DataBase Developer</option>
            <option>Analyst</option>
            <option>Coder</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
export default CreateUser;
