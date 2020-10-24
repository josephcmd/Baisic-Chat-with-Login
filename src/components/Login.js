import React, {useRef, useState} from 'react'
import { Button, Form, Container, Card, Alert } from 'react-bootstrap';
import {useAuth} from "../context/Authcontext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";






  function Login() {
  const {login} = useAuth()  
  const email = useRef()
  const password = useRef()
  const [error, setError] = useState("")
  const history = useHistory()
  async function handleSubmit(e){
    e.preventDefault()

    try{
      setError("")
      await login(email.current.value, password.current.value)
      history.push("/")
    }catch{
      setError("Failed to login, wrong Username / Password")
    }

    

}
  
  return (
    
       <React.Fragment>
            <Card className="mt-4 p-5">
            <Card.Title>Login</Card.Title>
  {error && <Alert variant='danger'>{error}</Alert>}
            <Form >

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={email} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={password} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    
    <Link to="/sign-up">Dont have an account ?? sign up</Link>
    
  </Form.Group>
  <Button onClick={handleSubmit} variant="primary" type="submit">
    Login
  </Button>
</Form>
</Card>
        </React.Fragment>
        
    )
}

export default Login
