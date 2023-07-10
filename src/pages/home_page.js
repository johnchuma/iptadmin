import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import Space from '../widgets/space'
import Heading from '../widgets/heading'
import Heading3 from '../widgets/heading3'
import { BsPower } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../controllers/auth_controller'
import { getStudentsWithDocs } from '../controllers/students_controller'
import { getIPTplaces } from '../controllers/places_controller'

const HomePage = () => {
    const navigate = useNavigate()
    const [students, setStudents] = useState([]);
    useEffect(() => {
        getStudentsWithDocs().then((value)=>setStudents(value));
       
     }, []);


     const [places, setPlaces]= useState([])


     useEffect(() => {
        getPlaces()
    }, []);
    const getPlaces = ()=> {
        getIPTplaces().then((data)=>{
            setPlaces(data);
        })
    }
    return (
        <div>
          <Container>
            <Space height={60} />
            <div className='py-3 px-3 rounded' style={{backgroundColor:"rgba(255,255,255,0.8)"}}>
                <Stack  direction='horizontal' onClick={()=>logOut()} className='d-flex border-0 justify-content-end btn'>
                   <BsPower color='red' className='me-2'/> <Heading3 color={`red`} className={`me-4`} fontSize={20} text={`Logout`}/>
                </Stack >
               <Row className='d-flex align-items-center'>
                <Col md={{offset:1,span:2}}>
                <Image fluid src='/student.png'/>
                </Col>
                <Col>
                 <Heading color={`black`} text={`Hello! <span style="font-weight:300;"> supervisor </span>`}/>
                 <Heading color={`black`} className={`mt-2`} fontWeight={300} fontSize={22} text={`Manage your students here (monitor students) `}/>
                </Col>
               </Row>
            </div>
            <Space height={40}/>
            <Row>
                <Col md={3}>
            <div onClick={()=>navigate("/students")} className='py-5 btn px-5 rounded' style={{backgroundColor:"purple"}}>
                <Heading fontSize={50}  text={students.length}/>
                <Heading  className={`mt-2`} fontWeight={400} fontSize={20} text={`Registered students `}/>
            </div>
                </Col>
                <Col md={3}>
             <div onClick={()=>navigate("/places")} className='py-5 w-100 btn px-5 rounded' style={{backgroundColor:"blue"}}>
                <Heading fontSize={50}  text={places.length}/>
                <Heading  className={`mt-2`} fontWeight={400} fontSize={20} text={`IPT <br/>places  `}/>
            </div>
                </Col>
                <Col md={3}>
            <div onClick={()=>navigate("/attending")} className='py-5 btn px-5 rounded' style={{backgroundColor:"orange"}}>
                <Heading fontSize={50}  text={students.filter((item)=>item.reports.length >0).length}/>
                <Heading  className={`mt-2`} fontWeight={400} fontSize={20} text={`Students Attending IPT `}/>
            </div>
                </Col>
                <Col md={3}>
            <div onClick={()=>navigate("/notAttending")} className='py-5 btn px-5 rounded' style={{backgroundColor:"red"}}>
                <Heading fontSize={50}  text={students.filter((item)=>item.reports.length <1).length}/>
                <Heading  className={`mt-2`} fontWeight={400} fontSize={20} text={`Students not attending IPT `}/>
            </div>
                </Col>
            </Row>
          </Container>
        </div>
    )
}

export default HomePage
