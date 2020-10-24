import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Container, Card, Alert,Navbar,Nav,Col,InputGroup,FormControl } from 'react-bootstrap';
import {useAuth} from "../context/Authcontext"
import {database} from "../firebase"
import "../App.css"
import uuid from 'react-uuid'
function Home() {
    const fname = useRef("No Name")
    const lname = useRef("No Last Name")
    const [name, setName] = useState()
    const message = useRef()
    const {currentUser} = useAuth()
    const {logout} = useAuth()
    const messagesref = database.ref('messages/')
    const [messages, setMessages] = useState({})
    useEffect(() => {
        
        messagesref.on('value', function(snapshot){
            setMessages(snapshot.val())
        })
    }, [])
    
      
    const handleClick1=()=>{
         
            database.ref('messages/' + uuid()).set({
              sender: name.firstName +" "+ name.lastName,
              message: message.current.value,
              email:  currentUser.email ,
              image:  `https://avatars.dicebear.com/api/avataaars/${currentUser.email}.svg` ,
              
            });
        
    }
    
    const handleCliCk = ()=>{
        setName({firstName: fname.current.value, lastName: lname.current.value})
        
    }
    
    return (
            <React.Fragment>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand >React-Chat</Navbar.Brand>
            <Nav className="mr-auto">
      <Nav.Link onClick={()=>logout()}>Logout</Nav.Link>
    <Nav.Link >Loged in with: {currentUser.email}</Nav.Link>
      
    </Nav>

            </Navbar>
          {!name&&<div className="container mt-4">
            <Form>
  <Form.Row>
    <Col>
      <Form.Control ref={fname} placeholder="First name" />
    </Col>
    <Col>
      <Form.Control ref={lname} placeholder="Last name" />
    </Col>
  </Form.Row>
</Form>
<Button onClick={handleCliCk} className="mt-2 container" varient="primary">Submit</Button>
</div>}
    <div className="container overflow-auto mb-5 mt-5">
    <div class="container-fluide">
    	
        <div class="msg-group center">
        {Object.keys(messages).map((key,index)=>(<div class="card">
                 <div class="card-body">
                 <div className="row">
                 <img src={messages[key].image} alt="Avatar" class="avatar"/>
    <h6 class="card-subtitle mt-1 mb-2 text-muted text-left">Name: {messages[key].sender} </h6>
    </div>
                   <p class="card-text float-left">{messages[key].message}</p>
                 </div>
            </div>))}
        
        </div>
        
        
      
</div>
    </div>
    
    {name&&<div className="container fixed-bottom">
    
    <InputGroup className="mb-3">
    <FormControl
      ref={message}
      placeholder="Type Something"
      aria-label="Type Something"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button onClick={handleClick1} variant="outline-secondary">Enter</Button>
    </InputGroup.Append>
  </InputGroup>
    </div>}
            </React.Fragment>
    )
}

export default Home
