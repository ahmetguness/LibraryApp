import { collection, query, where, getDocs } from "firebase/firestore";
import db from "./config";

export async function checkUserCredentials(userKind, userName, password) {
  const userRef = collection(db, userKind);
  const q = query(userRef, where(userKind + "UserName", "==", userName));
  const querySnapshot = await getDocs(q);

  let isUserValid = false;

  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    const passPropertyName = userKind + "Password";
    if (
      userData.hasOwnProperty(passPropertyName) &&
      userData[passPropertyName] === password
    ) {
      isUserValid = true;
    }
  });

  return isUserValid;
}


export async function listCategories() {
  const categoriesRef = collection(db, "categories");
  const querySnapshot = await getDocs(categoriesRef);

  const categories = [];
  querySnapshot.forEach((doc) => {
    categories.push({ id: doc.id, ...doc.data() });
  });

  return categories;
}

export async function listBooksInCategory(categoryId) {
  const booksRef = collection(db, `categories/${categoryId}/books`);
  const querySnapshot = await getDocs(booksRef);

  const books = [];
  querySnapshot.forEach((doc) => {
    books.push({ id: doc.id, ...doc.data() });
  });

  return books;
}