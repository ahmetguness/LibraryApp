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

      // Eğer memberFavorites alanı yoksa oluştur
      if (!memberData.memberFavorites) {
        memberData.memberFavorites = {};
      }

      // favoritesToAdd parametresindeki her kategori için işlem yap
      for (const [categoryId, bookIds] of Object.entries(favoritesToAdd)) {
        // Eğer categoryId zaten memberFavorites içinde varsa, favori kitapları güncelle
        if (memberData.memberFavorites[categoryId]) {
          // bookIds'yi bir Set'e dönüştürerek uniq değerleri al
          const existingFavorites = new Set(memberData.memberFavorites[categoryId]);
          const newFavorites = new Set(bookIds);

          // Yeni favori kitapları ekle
          newFavorites.forEach(bookId => existingFavorites.add(bookId));

          // Güncellenmiş favori kitapları array'e dönüştür
          memberData.memberFavorites[categoryId] = [...existingFavorites];
        } else {
          // Eğer categoryId yoksa, direkt olarak yeni favori kitapları ata
          memberData.memberFavorites[categoryId] = bookIds;
        }
      }

      // Güncellenmiş member verisini Firestore'a gönder
      await updateDoc(memberRef, memberData);
    } else {
      console.log("Member not found!");
    }
  } catch (error) {
    console.error("Error updating member favorites:", error);
  }
}


// export async function updateMemberFavorites(memberId, newFavorites) {
//   try {
//     const memberRef = doc(db, "member", memberId);
//     await updateDoc(memberRef, {
//       memberFavorites: newFavorites,
//     });

//     return true;
//   } catch (error) {
//     console.error("Favori kitaplar güncellenirken bir hata oluştu:", error);
//     return false;
//   }
// }
