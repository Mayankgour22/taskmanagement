import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
const MyTask = () => {
  const [mytask , setMytask ] = useState([])
  const loadData = async () => {
    let api = `http://localhost:8000/admin/showtaskData/?id=${localStorage.getItem(
      "userid"
    )}`;
    try {
      const response = await axios.get(api);
      console.log(response.data);
      setMytask(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const submitTask = async (id) => {
    let api = `http://localhost:8000/admin/uplodetask/?id=${id}`;
    let response = await axios.get(api);
    console.log(response.data);
    loadData();
  };

  const ans= mytask.map((key)=>{
    return (
      <tr>
        <td>{key.title}</td>
        <td>{key.description}</td>
        <td>{key.complday}</td>
        <td>
          {key.taskstatus ? (
            <>
              <Button style={{ backgroundColor: "green" }} disabled>
                Task Submited
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  submitTask(key._id);
                }}
              >
                Submit Task
              </Button>
            </>
          )}
        </td>
      </tr>
    );
  })

  return (
    <>
      <h1>my Task</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Completion Day</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};
export default MyTask;
