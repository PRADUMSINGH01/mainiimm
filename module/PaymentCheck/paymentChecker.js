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
      return false;
    }

    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    return users.length > 0 ? users[0].payment : false;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return false;
  }
};

export default PaymentChecker;
