import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Stack, Table } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import Heading from '../widgets/heading'
import Space from '../widgets/space'
import { useNavigate, useParams } from 'react-router-dom'
import { getStudentsWithDocs } from '../controllers/students_controller'

const ReportPage = () => {
    const navigate = useNavigate()
    const params = useParams();
    const id = params.id;
    const [students, setStudents] = useState([]);
    useEffect(() => {
        getStudentsWithDocs().then((value)=>setStudents(value));
       
     }, []);
     const [keyword,setKeyword]= useState("")
    return (
        <Container>
            <Space/>
            <div className='p-5 rounded' style={{backgroundColor:"rgba(255,255,255,0.7)"}}>
                <Stack className='mb-3' direction='horizontal' >
                    <BsArrowLeft onClick={()=>navigate('/attending')} size={30} color='black'/>
                    <Heading fontSize={30} className={`ms-4`} color={'black'} text={`Daily reports`}/>
                </Stack>
                <Row className='mb-3'>
                    <Col md={{offset:7,span:5}}>
                      <Form.Control onChange={(e)=>setKeyword(e.target.value)} placeholder='Search date'></Form.Control>
                    </Col>
                </Row>
               <table className='table rounded table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>More details</th>
                       
                    </tr>
                </thead>
                <tbody>
                {
                   students.length > 0 && students[id].reports.filter((value)=>value.id.includes(keyword)).map((item)=>{
                        return <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>

                        {/* <td>Veniam nostrud aliquip magna exercitation aute nisi nulla. Adipisicing adipisicing cillum laboris duis proident nisi. Duis sunt sint ipsum eu et laborum enim anim excepteur. Sit reprehenderit mollit cillum anim sunt ut exercitation dolore elit do ad est. Id labore ad ipsum elit culpa cupidatat deserunt eu consequat. Sunt culpa sit sint dolor incididunt tempor dolor esse est eu.</td> */}
                      
                </tr>
                    })
                }
                
                </tbody>
               </table>
            </div>
        </Container>
    )
}

export default ReportPage
