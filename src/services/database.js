import db from './config';
import { collection, getDocs } from 'firebase/firestore';

// Firestore'dan sadece adminUserName alanlarını getir
export const getAdminUserNames = async () => {
  const adminsRef = collection(db, 'admins');
  const adminsSnapshot = await getDocs(adminsRef);
  const adminUserNames = adminsSnapshot.docs.map(doc => doc.data().adminUserName);
  // console.log(adminUserNames); //["admin1", "admin"]
  return adminUserNames;
}
