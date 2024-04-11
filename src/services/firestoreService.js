import { collection, query, where, getDocs } from "firebase/firestore";
import db from "./config";

export async function checkUserCredentials(userKind, userName, password) {
  const adminsRef = collection(db, userKind);
  const q = query(adminsRef, where(userKind + "UserName", "==", userName));
  const querySnapshot = await getDocs(q);

  let isUserValid = false;

  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    if (userData.adminPassword === password) {
      isUserValid = true;
    }
  });

  return isUserValid;
}
