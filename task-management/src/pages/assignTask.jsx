import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table"; // if using react-bootstrap
import { Modal, Button, Form } from "react-bootstrap";
const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [uid , setUid] = useState("");
  const [task, setTask] = useState({});

  const handleShow = (id) => {
    setUid(id);
    setShow(true);
  }

  const handleClose = () => setShow(false);
  
  const handleInput=(e)=>{
     let name = e.target.name
     let value = e.target.value
     setTask((values)=>({...values , [name]:value}))
     console.log(task)

  }

  const handleSubmit =async(e) => {
    e.preventDefault();
   
    try {
       let api = "http://localhost:8000/user/assigntask";
       const response = await axios.post(api, {...task , uid})
       console.log(response)
    } catch (error) {
      console.log(error)
    }
    handleClose();
  }

  const loadData = async () => {
    const api = "http://localhost:8000/user/showuserdata";
    try {
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Assign a task</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.designation}</td>
              <td>{user.email}</td>
              <td>
                <button variant="primary" onClick={() => handleShow(user._id)}>
                  Assign Task
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="taskInput">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                name="title"
                onChange={handleInput}
                required
              />
            </Form.Group>
            <Form.Group controlId="taskInput">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task description"
                name="description"
                onChange={handleInput}
                required
              />
            </Form.Group>
            <Form.Group controlId="taskInput">
              <Form.Label>Completion Date</Form.Label>
              <Form.Control
                type="number"
                placeholder="completion date"
                name="complday"
                onChange={handleInput}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AssignTask;
