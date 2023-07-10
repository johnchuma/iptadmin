import React from 'react'
import { Nav, Stack, Toast, ToastContainer } from 'react-bootstrap'
import { AiFillWarning, AiOutlineClose } from 'react-icons/ai'
import Paragraph from '../widgets/paragraph'

const Toastr = ({show,onClose,text,color}) => {
    return (
        <ToastContainer className='p-4'  position='top-end'>
        <Toast autohide show={show} onClose={onClose} >
        <Toast.Body>
            <Stack direction='horizontal'>
            <AiFillWarning color={color??'green'}/>
            <Paragraph className={`ms-3`} fontWeight={600} color={color??'green'} text={text}/>
            <Nav.Link className="ms-auto" onClick={onClose}>
            <AiOutlineClose   color="gray" />
            </Nav.Link>
            </Stack>
            </Toast.Body>
        </Toast>
    </ToastContainer>
    )
}

export default Toastr
