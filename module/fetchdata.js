
import { app } from "./firebase"
import { getFirestore, collection, getDocs , doc } from "firebase/firestore";
const db = getFirestore(app);

const FETCHDATA =async (DocumentName)=>{
    
        try {
          const querySnapshot = await getDocs(collection(db, DocumentName));
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          const sortedData = fetchedData.sort((a, b) => a.id - b.id);

          return sortedData ;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
}


export default FETCHDATA




export const fetchCaseStudyById = async (id) => {
  const docRef = doc(db, 'bcs', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();  // Return the document data
  } else {
    throw new Error('No such document!');
  }
};
