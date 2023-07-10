import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
    return (
        <div>
            <div style={{
                height:"100vh",
                width:"100%",
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundImage:"url(https://legacy.travelnoire.com/wp-content/uploads/2021/11/GettyImages-1170998900.jpg)"}}>
                    <div style={{
                                height:"100vh",
                                width:"100%",
                                backgroundColor:"rgba(0,0,0,0.7)"
                    }}>
                        <Outlet/>
                    </div>
                </div>
        </div>
    )
}

export default LayoutPage
