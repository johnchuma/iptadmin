import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Stack, Table } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import Heading from '../widgets/heading'
import Space from '../widgets/space'
import { useNavigate } from 'react-router-dom'
import { getStudentsWithDocs } from '../controllers/students_controller'

const StudentsPage = () => {
    const navigate = useNavigate()
    const [students, setStudents] = useState([]);
    useEffect(() => {
       getStudentsWithDocs().then((value)=>setStudents(value));
      
    }, []);

    const [keyword, setKeyword] = useState("");
    return (
        <Container>
            <Space/>
            <div className='p-5 rounded' style={{backgroundColor:"rgba(255,255,255,0.7)"}}>
                <Stack className='mb-3' direction='horizontal' >
                    <BsArrowLeft onClick={()=>navigate('/')} size={30} color='black'/>
                    <Heading fontSize={30} className={`ms-4`} color={'black'} text={`Registered students`}/>
                </Stack>
                <Row className='mb-3'>
                    <Col md={{offset:7,span:5}}>
                      <Form.Control onChange={(e)=>setKeyword(e.target.value)} placeholder='Search student'></Form.Control>
                    </Col>
                </Row>
               <table className='table rounded table-bordered table-striped'>
                <thead>
                    <tr>
                    <th>No</th>

                        <th>Reg</th>
                        <th>Name</th>
                        <th>email</th>
                  
                    </tr>
                </thead>
                <tbody>


{
    students.filter((item)=>item.student.reg.includes(keyword)||item.student.name.includes(keyword)).map((item,index)=>{
        return <tr>
        <td>{index+1}</td>
        <td>{item.student.reg}</td>
        <td>{item.student.name}</td>
        <td>{item.student.email}</td>
</tr>
    })
}
                
                </tbody>
               </table>
            </div>
        </Container>
    )
}

export default StudentsPage
