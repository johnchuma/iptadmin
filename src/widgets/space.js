import React from 'react'

const Space = ({height}) => {
    return (
        <>
         <div className='d-none d-md-block' style={{height:height??100}}></div>
        <div className='d-block d-md-none' style={{height:height??40}}></div>
        </>
       

    )
}

export default Space
