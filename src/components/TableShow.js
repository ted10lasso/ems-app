import React, { useContext, useState } from 'react';
import { Button, Modal, ModalBody, Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ContextData from '../context/context';

function TableShow(props) {
  const contextValue = useContext(ContextData)
  console.log(contextValue.storeData);
  console.log(contextValue);
 // const [show, setShow] = useState(false)


  const deleteData = (index) => {
    const array = [...contextValue.storeData]
    array.splice(index, 1)
    contextValue.setStoreData(array)
  }

  const editData = (data, index) => {
    console.log(contextValue.showEditModal);
    contextValue.setEditModal(true)
   // setShow(true)
    
    console.log('its commign');
    // const array=[...contextValue.storeData]
    contextValue.setSelectedEmployee(data);
    // array.splice()
    contextValue.setIndex(index)
props.history.push('/editEmployee')
    
  }
  return <div>
  
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {contextValue.storeData && contextValue.storeData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.fullName}</td>
              <td>{data.designation}</td>
              <td>{data.salary}</td>
              <td>{data.age}</td>
              <td><button onClick={() => { editData(data, index) }}>Edit</button></td>
              <td><button onClick={(index) => { deleteData(index) }}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  </div>;
}

export default withRouter(TableShow);
