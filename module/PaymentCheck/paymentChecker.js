import { app } from "../firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
const db = getFirestore(app);

const PaymentChecker = async (email) => {
  try {
    const q = query(collection(db, "user"), where("email", "==", email));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() }); // Collect id and document data
    });
    //console.log(users[0].payment);
    return users[0].payment;
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
};

export default PaymentChecker;
