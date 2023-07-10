import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Image, Row, Spinner, Toast, ToastContainer } from 'react-bootstrap'

import { Bs0Circle, BsArrowsCollapse, BsDash, BsPersonUp } from 'react-icons/bs'
import Heading from '../widgets/heading.js'
import Paragraph from '../widgets/paragraph'
import Space from '../widgets/space.js'
import { signIn } from '../controllers/auth_controller.js'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const [errorToast,setErrorToast] = useState(false);
const navigate = useNavigate();
    const login = (e)=>{
      e.preventDefault();
    //   alert("hey")
      setLoading(true);
      const data = {email,password}
      signIn(data).then((response)=>{
        setLoading(false)
        if(response){
            navigate("/")
        }
        else{
          setErrorToast(true)
        }
      })
    }

    return (
        <div>
          <ToastContainer position='top-end'>
          <Toast show={errorToast}  onClose={()=>setErrorToast(false)} >
            <Toast.Header style={{  }}>
              <div className='me-auto text-danger text-weight-bold'>
              Failed
              </div>
              {/* <BsArrowsCollapse onClick={()=>setErrorToast(false)}/> */}
            </Toast.Header>
          <Toast.Body>
            Email doesn't exist
          </Toast.Body>
         </Toast>
          </ToastContainer>
          
            <Container className='text-center'>
                <Space/>
                <Row>
                    <Col md={{offset:3,span:6}}>
                    <Image style={{width:100}} src='/student.png' />
                <Heading color={'white'} className={`pt-3 pb-1`}  text={`IPT Admin`}/>
                <Paragraph color={`white`} text={`Enter your credentials to continue`}/>
                <Form onSubmit={login} className='mt-5'>
                    <FloatingLabel label="Email">
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} required placeholder='Enter your email' className='bg text-dark' style={{borderColor:"white", "::placeholder":"white", color:"white"}} type='text'></Form.Control>
                    </FloatingLabel >
                    <FloatingLabel label="Password">
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} required placeholder='Enter your password' className='bg mt-2 text-dark' style={{borderColor:"white"}} type='password'></Form.Control>
                    </FloatingLabel>
                     <Button className='text-white py-3 mt-2 border-0 w-100' type='submit' style={{backgroundColor:"orange"}}>
                        {loading?<Spinner/>:"Sign in"}
                     </Button>
                </Form>
                </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default LoginPage
