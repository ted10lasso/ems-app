import "../App.css"

import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import ContextData from "../context/context"

function Login(props) {
  const [user, setuser] = useState({
    email: "",
    password: "",
  })
  const dataReceived = useContext(ContextData)
  const [isEmailValid, setisEmailValid] = useState(true)
  const [emailError, setemailError] = useState("")

  const [isPasswordValid, setisPasswordValid] = useState(true)
  const [passwordError, setpasswordError] = useState("")

  const login = (event) => {
    event.preventDefault()

    const validEmail = validateEmail(user.email)
    const validPass = validatePass(user.password)
    if (validEmail && validPass) {
      dataReceived.setShowLogin(false)
      props.history.push("/tableshow")
    }
  }

  const validateEmail = (email) => {
    let empty2 = /^$/
    const letter = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (empty2.test(email)) {
      setisEmailValid(false)
      setemailError("Please fill the field")
      return false
    } else if (letter.test(email)) {
      setisEmailValid(true)
      setemailError("")
      return true
    } else {
      setisEmailValid(false)
      setemailError("Email should be strong")
      return false
    }
  }

  const validatePass = (pass) => {
    let emp = /^$/
    let lett = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (emp.test(pass)) {
      setisPasswordValid(false)
      setpasswordError("Please fill the field")
      return false
    } else if (lett.test(pass)) {
      setisPasswordValid(true)
      setpasswordError("")
      return true
    } else {
      setisPasswordValid(false)
      setpasswordError("Password should be strong")
      return false
    }
  }

  const handelChange = (event) => {
    const userCopy = { ...user }
    userCopy[event.target.name] = event.target.value
    setuser(userCopy)
  }
  return (
    <div className="App">
      <div className="main_divtag1">
        <h5>Sign in to your account</h5>
        <form onSubmit={login} className="container">
          <div className="box">
            <div class="mb-3">
              <label
                style={{ marginLeft: "-30px" }}
                for="exampleInputEmail1"
                class="form-label"
              >
                Email address
              </label>
              <input
                style={{ width: "370px", marginLeft: "-30px" }}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email address...."
                name="email"
                onChange={handelChange}
                value={user.email}
              />
              {!isEmailValid ? (
                <span
                  style={{ color: "red", border: "red", fontSize: "12px" }}
                  id="ss"
                >
                  {emailError}
                </span>
              ) : null}
            </div>
            <div class="mb-3">
              <label
                style={{ marginLeft: "-30px" }}
                for="exampleInputPassword1"
                class="form-label"
              >
                Password
              </label>{" "}
              <a href="" className="lab">
                Forgot password ?
              </a>
              <br />
              <input
                style={{ width: "370px", marginLeft: "-30px" }}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your Password..."
                name="password"
                onChange={handelChange}
                value={user.password}
              />
              {!isPasswordValid ? (
                <span style={{ color: "red", border: "red", fontSize: "12px" }}>
                  {passwordError}
                </span>
              ) : null}
            </div>{" "}
            <br />
            <div style={{ marginLeft: "-40px" }} className="btn">
              <input type="submit" value="Sign in" className="btn" />
            </div>
          </div>
        </form>
        <br /> <br />
        <div className="box2">
          <p>
            <br />
            New user? <Link to="/registration"> Create an account.</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)
