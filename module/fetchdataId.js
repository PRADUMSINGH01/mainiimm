import { app } from "./firebase";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
const db = getFirestore(app);

const FETCHDATAID = async (DocumentName) => {
  try {
    const querySnapshot = await getDocs(collection(db, DocumentName));
    const fetchedData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const sortedData = fetchedData.sort((a, b) => a.id - b.id);

    return sortedData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default FETCHDATAID;
