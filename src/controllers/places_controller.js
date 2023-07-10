import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { firestore } from "./firebase"
import {v4 as uuidv4} from "uuid";
export const addPlace  = async (data) =>{
    try {
        const uuid = uuidv4()
      const response = await setDoc(doc(firestore,"places",uuid), {
            id:uuid,
            ...data
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getIPTplaces = async(data)=>{
    try {
    const snapshots = await getDocs(collection(firestore,"places"))
     const response = await Promise.all(snapshots.docs.map((snapshot)=>{
        return snapshot.data()
     }))
    
     return response;
    } catch (error) {
        console.log(error)
    }
}

export const deletePlace = async(id)=>{
    try {
        await deleteDoc(doc(firestore,"places",id));
    
    } catch (error) {
        console.log(error);
    }
}