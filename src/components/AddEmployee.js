import React,{ useContext, useEffect, useState } from 'react';
import ContextData from '../context/context';

function AddEmployee() {
   const recivedData=useContext(ContextData)
    const [employeeDetails, setEmployeeDetails] = useState({
        fullName:'',
        designation:'',
        salary:'',
        age:''
    });

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [ageErrorMessage, setAgeErrorMessage] = useState('');
    const [salaryErrorMessage, setSalaryErrorMessage] = useState('');

    const [nameError, setnameError] = useState(false);
    const [designationError, setdesignationError] = useState(false);
    const [salaryError, setSalaryError] = useState(false);
    const [ageError, setAgeError] = useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault()
        const isNameValid=validateName(employeeDetails.fullName)
        const isDesignationValid=validateDesignation(employeeDetails.designation)
        const isSalaryValid=validateSalary(employeeDetails.salary)
        const isAgeValid=validateAge(employeeDetails.age)

        if (isNameValid && isDesignationValid && isSalaryValid && isAgeValid){
          const array= [...recivedData.storeData]
          array.push(employeeDetails)
          recivedData.setStoreData(array)
            console.log(recivedData.storeData);
            setEmployeeDetails({
                fullName:'',
                designation:'',
                salary:'',
                age:''
            })
            alert('Details Added Successfully')
        }else {
            console.error('invalid data');
        }
    }
//===========================================================================
    const validateName=(name)=>{
        const nameFormat= /[a-zA-Z]+/
        if (name===''){
            setnameError(true)
            setNameErrorMessage('Please enter username')
            return false
        }else if (nameFormat.test(name)){
            setnameError(false)
            setNameErrorMessage(' ')
            return true
        } else{
            setnameError(true)
            setNameErrorMessage('Please enter valid username')
            return false
        }
    }

    const validateDesignation=(designation)=>{
        if (designation){
            setdesignationError(false)
            return true
        }else{
            setdesignationError(true)
            return false
        }
    }

    const validateSalary=(salary)=>{
        if (salary===''){
            setSalaryError(true)
            setSalaryErrorMessage('please enter salary')
            return false
        }
        if (salary>0){
            setSalaryError(false)
            setSalaryErrorMessage(' ')
            return true
        }else{
            setSalaryError(true)
            setSalaryErrorMessage('salary not valid')
            return false
        }
    }

    const validateAge=(age)=>{
        if (age===''){
            setAgeError(true)
            setAgeErrorMessage('Please Enter Age')
            return false
        }else if (age>18){
            setAgeError(false)
            setAgeErrorMessage('')
            return true
        }else{
            setAgeError(true)
            setAgeErrorMessage('Age not valid')
            return false
        }
    }
//=================================================================================
    const handleData=(event)=>{
        setEmployeeDetails({
            ...employeeDetails,
            [event.target.name]:event.target.value
        })
    }

  return <div class='division'>
        <form class="row g-2 form shadow rounded " style={{width:'500px', marginLeft:'450px', marginTop:'20px'}}onSubmit={(event)=>{handleSubmit(event)}}>
            <div class="form-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Employee Details</h5>
            </div>
            <div class="form-div">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" placeholder='Enter full name' onChange={(e)=>{handleData(e)}} value={employeeDetails.fullName} name='fullName'/>
                {nameError ? <div class="error-message">{nameErrorMessage}</div> : null}
            </div>

            <div class="">
                <label class="form-label">Designation</label>
                <input type="text" class="form-control" placeholder='Enter designation' onChange={(e)=>{handleData(e)}} value={employeeDetails.designation} name='designation'/>
                {designationError ? <span class="error-message">Please choose a designation.</span> : null }
                
            </div>

            <div class="">
                <label class="form-label">Salary</label>
                <input type="number" class="form-control" placeholder='salary per year' onChange={(e)=>{handleData(e)}} value={employeeDetails.salary} name='salary'/>
                {salaryError ? <span class="error-message">{salaryErrorMessage}</span> : null }
            </div>

            <div class="">
                <label class="form-label">Age</label>
                <input type="number" class="form-control" placeholder='Enter age' onChange={(e)=>{handleData(e)}} value={employeeDetails.age} name='age'/>
                {ageError ? <span class="error-message">{ageErrorMessage}</span> : null }
            </div>

            <div class="button">
                <button  class="btn btn-primary " type="submit">Submit</button>
            </div>
        </form>
  </div>;
}

export default AddEmployee