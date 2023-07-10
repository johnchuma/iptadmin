import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, firestore } from "./firebase";
import {v4 as uuidv4} from "uuid";

export const getStudentsWithDocs = async () => {
    try {
      const snapshots = await getDocs(collection(firestore, "students"));
      const response = await Promise.all(
        snapshots.docs.map(async (snapshot) => {
          const student = snapshot.data();

         const placeResponse = await getDoc(doc(firestore,"places",student.IPTId))
         console.log(placeResponse);
          const attendanceQr =  query(
            collection(firestore, "checks"),
            where("studentId", "==", student.email)
          );
         const responseqr = await Promise.all((await getDocs(attendanceQr)).docs.map((doc)=>{
            return doc.data();
         }));
         const attendancR =  query(
            collection(firestore, "reports"),
            where("studentId", "==", student.email)
          );
         const responser = await Promise.all((await getDocs(attendancR)).docs.map((doc)=>{
            return doc.data();
         }));
          return {student,attendance:responseqr,reports:responser,place:placeResponse.data()};
       })
      );
    
      return response;
    } catch (error) {
      console.log(error);
    }
};
