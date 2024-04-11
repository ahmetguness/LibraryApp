import db from './config';
import { collection, getDocs } from 'firebase/firestore';

export const getAdminUserNames = async () => {
  const adminsRef = collection(db, 'admins');
  const adminsSnapshot = await getDocs(adminsRef);
  const adminUserNames = adminsSnapshot.docs.map(doc => doc.data().adminUserName);
  return adminUserNames;
}
