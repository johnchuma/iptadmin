


import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';




export const signIn = async(data)=>{
    try {
        const {email,password}= data;
   const response =   await  signInWithEmailAndPassword(auth,email,password)
   console.log(response.user)
   return response;
    } catch (error) {
        console.log(error)
    }
}
export const logOut = async()=>{
    try {
        const response = await signOut(auth)
        console.log(response)
    } catch (error) {
        console.log("Failed to sign out",error)
    }
}

