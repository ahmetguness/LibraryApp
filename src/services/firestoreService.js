import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
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

export async function getUserId(userKind, userName, password) {
  const userRef = collection(db, userKind);
  const q = query(userRef, where(`${userKind}UserName`, "==", userName));
  const querySnapshot = await getDocs(q);

  let userId = null;

  querySnapshot.forEach((doc) => {
    const userData = doc.data();
    const passPropertyName = `${userKind}Password`;
    if (
      userData.hasOwnProperty(passPropertyName) &&
      userData[passPropertyName] === password
    ) {
      userId = doc.id;
    }
  });

  return userId;
}

export async function getUserById(userKind, userId) {
  const userRef = collection(db, userKind);
  const q = query(userRef, where("__name__", "==", userId));
  const querySnapshot = await getDocs(q);

  let userData = null;

  querySnapshot.forEach((doc) => {
    userData = { id: doc.id, ...doc.data() };
  });

  return userData;
}

export async function updateMemberFavorites(memberId, favoritesToAdd) {
  try {
    const memberRef = doc(db, "member", memberId);
    const memberDoc = await getDoc(memberRef);

    if (memberDoc.exists()) {
      const memberData = memberDoc.data();

      if (!memberData.memberFavorites) {
        memberData.memberFavorites = {};
      }
      for (const [categoryId, bookIds] of Object.entries(favoritesToAdd)) {
        if (memberData.memberFavorites[categoryId]) {
          const existingFavorites = new Set(
            memberData.memberFavorites[categoryId]
          );
          for (const bookId of bookIds) {
            if (existingFavorites.has(bookId)) {
              existingFavorites.delete(bookId);
            } else {
              existingFavorites.add(bookId);
            }
          }
          memberData.memberFavorites[categoryId] = [...existingFavorites];
        } else {
          memberData.memberFavorites[categoryId] = bookIds;
        }
      }
      await updateDoc(memberRef, memberData);
    } else {
      console.log("Member not found!");
    }
  } catch (error) {
    console.error("Error updating member favorites:", error);
  }
}

export async function fetchMemberFavorites(memberId) {
  try {
    const memberRef = doc(db, "member", memberId);
    const memberDoc = await getDoc(memberRef);

    if (memberDoc.exists()) {
      const memberData = memberDoc.data();
      
      // Üye favorileri mevcutsa, bunları döndür
      if (memberData.memberFavorites) {
        return memberData.memberFavorites;
      } else {
        // Üyenin favori kitapları yoksa boş bir obje döndür
        return {};
      }
    } else {
      // Üye bulunamadıysa null döndür
      return null;
    }
  } catch (error) {
    console.error("Error fetching member favorites:", error);
    // Hata durumunda null döndür
    return null;
  }
}