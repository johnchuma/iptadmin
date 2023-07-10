import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Nav, Navbar, Offcanvas, OverlayTrigger, Popover, Row, Stack } from 'react-bootstrap'
import Heading from './heading'
import Paragraph from './paragraph'

import Space from './space'

import { AnimateComponent } from '../utils/animation'
import { backgroundColor, backgroundColor2, mutedBackground, mutedText, primaryColor, secondaryColor, textColor } from '../utils/company_colors'


import { AiFillMail, AiFillPhone, AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMenu, AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai'
import Heading3 from './heading3'
import { BsChevronDoubleDown, BsChevronDown, BsChevronRight } from 'react-icons/bs'
import Heading2 from './heading2'
export const links = [
{name:"ABOUT US",path:"about"},
{name:"OUR WORK",path:"services"},
{name:"OUR FOCUSED AREAS",path:"thematic"},

{name:"RESOURCES",path:"#why"},
{name:"EVENTS",path:"#why"},

];

const NavigationBar = () => {
    const navAnimation = AnimateComponent({from:{x:0},to:{x:20}})
const [showMenu, setShowMenu] = useState(false);
const [currentNav, setCurrentNav] = useState(0);
    return (
       <>
       
     
      
        
      
       </>
    )
}

export default NavigationBar
