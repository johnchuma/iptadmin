import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Spinner, Stack, Table } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import Heading from '../widgets/heading'
import Space from '../widgets/space'
import { useNavigate } from 'react-router-dom'
import { addPlace, deletePlace, getIPTplaces } from '../controllers/places_controller'

const IPTplaces = () => {
    const navigate = useNavigate()
    const [showModal,setShowModal] = useState(false)
    const [name, setName]= useState("")
    const [address, setAddress]= useState("")
    const [latitude, setLatitude]= useState(0.0)
    const [places, setPlaces]= useState([])

    const [longitude, setLongitude]= useState(0.0)
    const [loading,setLoading] = useState(false);
    const [errorToast,setErrorToast] = useState(false);
    const addPlac = (e)=>{
        e.preventDefault()
        setLoading(true)
        const data = {name,address,latitude,longitude};
        addPlace(data).then((response)=>{
            setShowModal(false)
            setLoading(false)
            getPlaces()
        })
    }
    useEffect(() => {
        getPlaces()
    }, []);
    const getPlaces = ()=> {
        getIPTplaces().then((data)=>{
            setPlaces(data);
        })
    }
    const [keyword, setKeyword] = useState("");

    return (
        <Container>
            <Space/>
            <Modal show={showModal} onHide={()=>setShowModal(false)}>
                <Modal.Header>
                    Add IPT place
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={addPlac} className='mt-0'>
                    <FloatingLabel label="Industry/Company name">
                    <Form.Control onChange={(e)=>setName(e.target.value)} required placeholder='Enter your email' 
                    className='bg text-dark my-1' style={{borderColor:"white", "::placeholder":"white", color:"white"}} type='text'></Form.Control>
                    </FloatingLabel >
                    <FloatingLabel label="Address">
                    <Form.Control onChange={(e)=>setAddress(e.target.value)} required placeholder='Enter your email'
                     className='bg text-dark my-1' style={{borderColor:"white", "::placeholder":"white", color:"white"}} type='text'></Form.Control>
                    </FloatingLabel >
                    <FloatingLabel label="Latitude">
                    <Form.Control onChange={(e)=>setLatitude(e.target.value)} required placeholder='Enter your email'
                     className='bg text-dark my-1'  style={{borderColor:"white", "::placeholder":"white", color:"white"}} type='number'></Form.Control>
                    </FloatingLabel >
                    <FloatingLabel label="Longitude">
                    <Form.Control onChange={(e)=>setLongitude(e.target.value)} required placeholder='Enter your email' 
                    className='bg text-dark my-1'  style={{borderColor:"white", "::placeholder":"white", color:"white"}} type='number'></Form.Control>
                    </FloatingLabel >
                     <Button className='text-white py-3 mt-2 border-0 w-100' type='submit' style={{backgroundColor:"orange"}}>
                        {loading?<Spinner/>:"Add place"}
                     </Button>
                </Form>

                    
                </Modal.Body>
            </Modal>
            <div className='p-5 rounded' style={{backgroundColor:"rgba(255,255,255,0.7)"}}>
                <Stack className='mb-3' direction='horizontal' >
                    <BsArrowLeft onClick={()=>navigate('/')} size={30} color='black'/>
                    <Heading fontSize={30} className={`ms-4`} color={'black'} text={`IPT places`}/>
                    <Button onClick={()=>setShowModal(true)} className='text-white rounded btn py-2 ms-auto mt-2 border-0' type='submit' style={{backgroundColor:"orange"}}>Add new place</Button>

                </Stack>
                <Row className='mb-3'>
                    <Col md={{offset:7,span:5}}>
                      <Form.Control onChange={(e)=>setKeyword(e.target.value)} placeholder='Search place'></Form.Control>
                    </Col>
                </Row>
               <table className='table rounded table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {places.filter((value)=>value.name.includes(keyword)).map((data,index)=>{
                     return <tr>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.address}</td>
                        <td>
                        <Button onClick={()=>deletePlace(data.id).then(()=>{
                            setShowModal(false)
                            getPlaces();
                        })} className='text-white rounded btn py-1 ms-auto  border-0' type='submit' style={{backgroundColor:"red"}}>Delete</Button>
                        </td>
                        </tr>
                    })}
               
                </tbody>
               </table>
            </div>
        </Container>
    )
}

export default IPTplaces
