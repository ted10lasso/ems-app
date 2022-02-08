import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from 'react-router-dom';
import ContextData from '../context/context';
import { withRouter } from 'react-router-dom';



function Registration(props) {

    const recivedData=useContext(ContextData)

    const [userDetails, setuserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        // valid: false
    })

    //---------------------------------------------------------
    const [isFirstNameValid, setisFirstNameValid] = useState(true)
    const [firstNameError, setfirstNameError] = useState('')
    const [isLastNameValid, setisLastNameValid] = useState(true)
    const [lastNameError, setlastNameError] = useState('')
    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')
    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')
    const [isConfirmPasswordValid, setisConfirmPasswordValid] = useState(true)
    const [confirmPasswordError, setconfirmPasswordError] = useState('')


    //---------------------------------------------------------
    const submit = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);

        const isFirstNameValid = validateFirstName(userDetails.firstName)
        const isLastNameValid = validateLastName(userDetails.lastName)
        const isEmailValid = validateEmail(userDetails.email)
        const isPasswordValid = validatePassword(userDetails.password)
        const isConfirmPasswordValid = validateConfirmPassword(userDetails.confirmPassword, userDetails.password)

        
        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            alert('Valid')
            //  props.setData([...props.data, userDetails])
            props.history.push('/login')
         
        } else {
            alert('Not Valid')
        }
    }
    const validateFirstName = (firstName) => {
        if (firstName) {
            let fName = (/^[a-zA-Z]+$/);
            if (firstName.match(fName)) {
                setisFirstNameValid(true)
                setfirstNameError('')
                return true
            } else {
                setisFirstNameValid(false)
                setfirstNameError('*Please enter valid name')
                return false
            }
        } else {
            setisFirstNameValid(false)
            setfirstNameError('*Name cannot be empty')
            return false
        }
    }
    const validateLastName = (lastName) => {
        if (lastName) {
            let lName = (/^[a-zA-Z]+$/);
            if (lastName.match(lName)) {
                setisLastNameValid(true)
                setlastNameError('')
                return true
            } else {
                setisLastNameValid(false)
                setlastNameError('*Please enter valid name')
                return false
            }
        } else {
            setisLastNameValid(false)
            setlastNameError('*Name cannot be empty')
            return false
        }
    }
    const validateEmail = (email) => {
        if (email) {
            let mail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
            if (email.match(mail)) {
                setisEmailValid(true)
                setemailError('')
                return true
            } else {
                setisEmailValid(false)
                setemailError('*Please enter valid email')
                return false
            }
        } else {
            setisEmailValid(false)
            setemailError('*Email cannot be empty')
            return false
        }
    }
    const validatePassword = (password) => {
        if (password) {
            let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            if (password.match(pass)) {
                setisPasswordValid(true)
                setpasswordError('')
                return true
            } else {
                setisPasswordValid(false)
                setpasswordError('*Please enter valid password')
                return false
            }
        } else {
            setisPasswordValid(false)
            setpasswordError('*Password cannot be empty')
            return false
        }
    }

    const validateConfirmPassword = (confirmPassword, password) => {
        if (confirmPassword) {

            if (confirmPassword === password) {
                setisConfirmPasswordValid(true)
                setconfirmPasswordError('')
                return true
            } else {
                setisConfirmPasswordValid(false)
                setconfirmPasswordError('*Invalid')
                return false
            }
        } else {
            setisConfirmPasswordValid(false)
            setconfirmPasswordError('*Password cannot be empty')
            return false
        }
    }
  

    //-----------------------------------------------------------
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] = event.target.value
        setuserDetails(userDetailsCopy)
    }
  return <div className='text-left regi'>
         <div className="register col-4 m-auto" >
            <p className='fsize text-center text-white font-weight-normal'>REGISTRATION FORM</p>
            <form className="shadow p-3 mb-5 bg-white rounded text-left" >
                <div className="form-group p-2 ">
                    <label className='text-left'>Name </label><br />
                    <div className="row">
                        <div className="">
                            <input className="bg-light form-control form-control-sm widthchange mt-2" type="firstName"
                                name="firstName"
                                value=""
                                placeholder='Enter your full name...'
                                onChange={(event) => { handleChange(event) }}
                                value={userDetails.firstName} />
                            {!isFirstNameValid ? <span style={{
                                color: 'red',
                                fontSize: '12px'
                            }}>{firstNameError}</span> : null}
                        </div>
                        <div className="col">
                    <label className='mt-2'>Username </label>
                    

                            <input className="bg-light form-control form-control-sm widthchange mt-2" type="lastName"
                                name="lastName"
                                value=""
                                placeholder='Enter a username...'
                                onChange={(event) => { handleChange(event) }}
                                value={userDetails.lastName} />
                            {!isLastNameValid ? <span style={{
                                color: 'red',
                                fontSize: '12px'
                            }}>{lastNameError}</span> : null}
                        </div>
                    </div>
                </div>
                
                <div className="form-group p-2">
                    <label >Email address </label><br />
                    <input className="bg-light form-control form-control-sm widthchange mt-2" type="text"
                        name="email"
                        value=""
                        placeholder='Enter your email address...'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.email} />
                    {!isEmailValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{emailError}</span> : null}
                </div>
                <div className="form-group p-2">
                    <label>Password </label><br />
                    <input className="bg-light form-control form-control-sm widthchange mt-2" type="text"
                        name="password"
                        value=""
                        placeholder='Enter your password...'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.password} />
                    {!isPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{passwordError}</span> : null}
                </div>
                <div className="form-group p-2">
                    <label >Confirm Password </label><br />
                    <input className="bg-light form-control form-control-sm widthchange mt-2" type="confirmPassword"
                        name="confirmPassword"
                        value=""
                        placeholder='Enter your password again...'
                        onChange={(event) => { handleChange(event) }}
                        value={userDetails.confirmPassword} />
                    {!isConfirmPasswordValid ? <span style={{
                        color: 'red',
                        fontSize: '12px'
                    }}>{confirmPasswordError}</span> : null}
                </div>
                <div className=" p-2">
                    <button className="form-control btn btn-success" type="submit" onClick={submit} >Sign Up</button>
                </div>
                <div>
                    <p>Already having an account <Link to='/login'>Login</Link></p>
                </div>

            </form>


        </div>
  </div>;
}

export default withRouter(Registration)