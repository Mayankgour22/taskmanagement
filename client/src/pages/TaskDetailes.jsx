import { useState , useEffect } from "react";
import axios  from "axios";
import Table from "react-bootstrap/Table";
import right from "../images/right.png";
import wrong from "../images/wrong.jpeg";
import Button from "react-bootstrap/esm/Button";
const TaskDetailes=()=>{
    const [mydata , setMydata] = useState([])

    const lodeData=async()=>{
       let api ="http://localhost:8000/user/taskdetailes";
       try {
         const response= await axios.get(api)
         console.log(response.data)
         setMydata(response.data)
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(()=>{
        lodeData()
    },[])
    const changeTaskStatus=async(id)=>{
        let api=`http://localhost:8000/user/changetaskstatus/?id=${id}`;
        try {
              const response = await axios.get(api);
              console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    
        lodeData();
    }
    let no = 0;
    const ans = mydata.map((key) => {
      no++;
      return (
        <>
          <tr>
            <td>
              {key.taskstatus ? (
                <>
                  <img src={right} width="30" height="30" />
                </>
              ) : (
                <>
                  <img src={wrong} width="30" height="30" />
                </>
              )}
            </td>
            <td>{no}</td>
            <td>{key.uid.name}</td>
            <td>{key.uid.email}</td>
            <td>{key.title}</td>
            <td>{key.description}</td>
            <td>
              {key.taskstatus ? (
                <>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => {
                      changeTaskStatus(key._id);
                    }}
                  >
                    {" "}
                    ReAssign{" "}
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="danger" size="sm">
                    {" "}
                    Pending...{" "}
                  </Button>
                </>
              )}
            </td>
          </tr>
        </>
      );
    });
    return (
      <>
        <h1>Task Detailes</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Task Title</th>
              <th>Description</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>
      </>
    );
}
export default TaskDetailes;