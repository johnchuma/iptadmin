import React from 'react'
import { animated } from 'react-spring'
import { textColor } from '../utils/company_colors'
import Space from './space'
const Heading2 = ({fontWeight,fontSize,color,text,className,...style}) => {
    return (
        <>
          <animated.div className={className+` d-none d-md-block `} style={{...style,fontWeight:fontWeight??700, lineHeight:1.2,fontFamily:"aeonik", fontSize:fontSize??"1.9vw",color:color??textColor}}   
        dangerouslySetInnerHTML={{__html:text}}></animated.div>
          <animated.div className={className+` d-block d-md-none `} 
          style={{textIndent:0, fontWeight:fontWeight??700, lineHeight:1.0, 
            fontSize:fontSize??"6vw",color:color??textColor}}   
        dangerouslySetInnerHTML={{__html:text}}></animated.div>
        </>
      
    )
}

export default Heading2