import React, { useContext, useState } from 'react';
import { Button, Modal, ModalBody, ModalTitle } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ContextData from '../context/context';

function EditEmployee(props) {
 const contextValue=useContext(ContextData)
 // const data={...contextValue.selectedEmployee}
 console.log(contextValue);
//console.log(data.fullName);

const[selectedEmployee1,setSelectedEmployee1]=useState({
  fullName:'',
  designation:'',
  salary:'',
  age:''
})


 const eventHandler=(e)=>{
//const dataCopy={...data}
//dataCopy[contextValue.index][e.target.name]=e.target.value

//const selectedEmployee1Copy={...selectedEmployee1}
//console.log(selectedEmployee1Copy.fullName);
// selectedEmployeeCopy[contextValue.index][e.target.name]=e.target.value
//console.log(selectedEmployee1Copy);
const employeeCopy={...selectedEmployee1}
employeeCopy[e.target.name]=e.target.value
setSelectedEmployee1(employeeCopy)
 }

 const closeModal=()=>{
props.history.push('/tableshow')
 }

const saveChanges=()=>{
 const storeDataCopy=[...contextValue.storeData]
  storeDataCopy.splice(contextValue.index,1,selectedEmployee1)
  contextValue.setStoreData(storeDataCopy)
  props.history.push('/tableshow')
}
  return <div>
<Modal show={contextValue.showEditModal}>
<Modal.Header closeButton>
    <Modal.Title>Edit Employee Data</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <label className='form-lable'>FullName</label>
    <input className='form-control' placeholder='Enter full name' value={selectedEmployee1.fullName} name='fullName' onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable'>Designation</label>
    <input className='form-control' name='designation' placeholder='Enter Designation' value={selectedEmployee1.designation} onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable' >Salary</label>
    <input className='form-control' name='salary' type='number' placeholder='Enter salaru' value={selectedEmployee1.salary} onChange={(e)=>eventHandler(e)}/>
    <label className='form-lable'>Age</label>
    <input className='form-control' name='age' type='number' placeholder='Enter Age' value={selectedEmployee1.age} onChange={(e)=>eventHandler(e)}/>

  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={()=>{closeModal()}}>Close</Button>
    <Button variant="primary" onClick={()=>{saveChanges()}}>Save changes</Button>
  </Modal.Footer>
</Modal>
  </div>;
}

export default withRouter(EditEmployee);
