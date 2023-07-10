import React from 'react'
import Space from './space'
import { secondaryColor, textColor } from '../utils/company_colors'

const Separator = () => {
    return (
    <div>
         <Space height={50}/>
                      <div className='mb-1' style={{width:"100%",height:1,backgroundColor:textColor}}></div>
              {/* <div style={{width:"100%",height:1,backgroundColor:"#ffffff30"}}></div> */}
             
    
    </div>
    )
}

export default Separator
