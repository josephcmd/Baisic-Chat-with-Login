import React, { useState }  from 'react'
import { Button, Form, Container, Card, Alert } from 'react-bootstrap';
import {authh} from '../firebase'
import {useAuth} from "../context/Authcontext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import { useRef } from 'react';
function SignUp() {
    const { signup } = useAuth()
   const history = useHistory()
    const email = useRef("");
    const pass = useRef("");
    const check = useRef("");
    const [error, setError] = useState("");
    const [loading,setLoading] = useState(false);
    
    async function handleSubmit(e) {;
        e.preventDefault()
    
        if (pass.current.value !== check.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(email.current.value, pass.current.value)
          
          history.push("/")
          
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }
        
    
    return (
        
        <React.Fragment>
            <Card className="mt-4 p-5">
            <Card.Title>Sign Up</Card.Title>
    {error && < Alert variant='warning'>{error}</Alert>}
    
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
    <Form.Control ref={pass} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Repeat Password</Form.Label>
    <Form.Control ref={check} type="password" placeholder="Repeat Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">

    <Link  to="/Login">have an account ?? Log in</Link>
    
  </Form.Group>
  <Button onClick={handleSubmit} variant="primary" type="submit">
    Sign Up
  </Button>
</Form>
</Card>
        </React.Fragment>
        
    )
    }

export default SignUp
