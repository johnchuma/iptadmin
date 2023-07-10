import React from 'react'
import { textColor } from '../utils/company_colors'
import { animated } from 'react-spring'

const Paragraph = ({fontWeight,fontSize,color,text,className,textIndent,style}) => {
    return (
        <div>
        <animated.div className={className+` d-none d-md-block `} 
        style={{...style, fontWeight:fontWeight??400,textIndent:textIndent??0, 
        lineHeight:1.2, fontSize:fontSize??"1vw",
        letterSpacing:1.5,
       
         color:color??textColor}} dangerouslySetInnerHTML={{__html:text}}  ></animated.div>
        <animated.div className={className+` d-block d-md-none `}
         style={{...style,fontWeight:fontWeight??400,textIndent:textIndent??0, 
         lineHeight:1.2, fontSize:fontSize??"3vw",fontFamily:"aeonik", 
         color:color??textColor}} dangerouslySetInnerHTML={{__html:text}} ></animated.div>
        </div>
    )
}

export default Paragraph
