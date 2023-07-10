import { useSpring } from "react-spring"

export const AnimateComponent = ({from,to,delay,config,loop})=>{
    const [styles,api] = useSpring(()=>({
        from,
        
        config:{...config}
}))
const startAnimation = ()=>{
    return new Promise((resolve)=>{
        api.start({
            from,
            to,
            delay:delay??0,
            loop:{reverse:loop??false},            
            onRest:()=>{
                resolve()
            }
           })
    })
  
}
return {styles,animate:startAnimation}
}