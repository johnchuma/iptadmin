
import React, { useState } from 'react'
import Heading from '../widgets/heading'
import { Col, Container, Image, Nav, Row, Stack } from 'react-bootstrap'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineLinkedin, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import Paragraph from '../widgets/paragraph'
import Space from '../widgets/space'
import Separator from '../widgets/separator'
import { backgroundColor, mutedText, primaryColor, secondaryColor, textColor } from '../utils/company_colors'
import Heading2 from './heading2'
import Heading3 from './heading3'

const Footer = () => {
    return (
        <div style={{backgroundColor:primaryColor}}>
          <Container>
            <Space/>
            <Row>
              <Col md={4}>
              <Heading2 color={`white`} text={`Address`}/>

              <Paragraph className={`mt-4`} color={`rgba(255,255,255,0.6)`} text={`Former TCU Building, Rose Garden Rd,
`}/>
    <Paragraph className={`mt-2`} color={`rgba(255,255,255,0.6)`} text={`
House No.:159, Plot No.:380,

`}/>
    <Paragraph style className={`mt-2`} color={`rgba(255,255,255,0.6)`} text={`
Mikocheni, Dar es Salaam, 

`}/>
    <Paragraph style className={`mt-2`} color={`rgba(255,255,255,0.6)`} text={`
Tanzania, East Africa.
`}/>
          

              </Col>
              <Col md={4}>
                <Heading2 color={`white`} text={`Contact info`}/>
              <Paragraph style className={`mt-4`} color={`rgba(255,255,255,0.6)`} text={`Phone: +255 746 800 020
`}/>
    <Paragraph style className={`mt-2`} color={`rgba(255,255,255,0.6)`} text={`
	Email:info@hakimawasiliano.or.tz
                                                          
`}/>
    <Paragraph className={`mt-2`} color={`rgba(255,255,255,0.6)`} text={`
                                                 Web.www.hakimawasiliano.or.tz
`}/>
            

             

              </Col>
            
              <Col className='' md={4}>
                <Stack className='d-flex justify-content-end' direction='horizontal'>
                <Nav.Link href='https://twitter.com/hakimawasiliano' target='__blank'>
                <AiFillFacebook size={40}  className='me-2 ms-auto' color='rgba(255,255,255,0.6)'/>
                </Nav.Link>
                <Nav.Link href='https://twitter.com/hakimawasiliano' target='__blank'>
                <AiFillTwitterCircle size={40}  className='me-2' color='rgba(255,255,255,0.6)'/>
                </Nav.Link>
                <Nav.Link href='https://www.instagram.com/hakimawasiliano/' target='__blank'>
                <AiFillInstagram size={40}  className='me-2' color='rgba(255,255,255,0.6)'/>
                </Nav.Link>
                <Nav.Link href='https://www.instagram.com/hakimawasiliano/' target='__blank'>
                <AiOutlineLinkedin size={40}  className='me-2' color='rgba(255,255,255,0.6)'/>
                </Nav.Link>

                </Stack>
              </Col>
             
            </Row>
            <Space/>
             <Stack className='d-flex justify-content-between' direction='horizontal'>
             <Paragraph color={'rgba(255,255,255,0.6)'} text={`©️ 2023 HakiMawasiliano`}/>
              <Image src='/logo.png' style={{height:50,width:50}}/>
             </Stack>

            <Space/>
          </Container>
         </div>
    )
}

export default Footer
