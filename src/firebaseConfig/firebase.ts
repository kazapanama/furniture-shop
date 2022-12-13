import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc} from 'firebase/firestore' 
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { AllProducts } from "../Products";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "furniture-shop-1a08f.firebaseapp.com",
  projectId: "furniture-shop-1a08f",
  storageBucket: "furniture-shop-1a08f.appspot.com",
  messagingSenderId: "961379232668",
  appId: "1:961379232668:web:814ae5f043ae199cecf659"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const productsRef = collection(db, 'products');

async function getProducts():Promise<AllProducts[]> {
    const productsSnapshot = await getDocs(productsRef);
    const List = productsSnapshot.docs.map(doc => doc.data());
    return List as AllProducts[];
  }



//gets all products from the database
export const products = await getProducts();

//adds dummy data to the database
export async function addNewProduct(product:AllProducts){
  await setDoc(doc(db, "products",product.id), product);
}

export   const storage = getStorage();


//uploads image to the storage
export const uploadFile = async (image: File,setImgURLs:any,id:string,productName:string,productCategory:string) => {
  const storage = getStorage();

  const storageRef = ref(storage, `products/${productCategory}/${productName}/${image.name}`);

  const uploadTask = uploadBytesResumable(storageRef, image as File);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      switch (snapshot.state) {
        case "paused":
          break;
        case "running":
          break;
        default:
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    async () => {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImgURLs((prevState:string[]) => [...prevState, downloadURL]);
      });
    }
  );
};

//login admin
export const signInAdmin = async (credentials:{email:string,password:string}) => {
const {email,password} = credentials;
  const auth = getAuth();
 
const user = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  return user;
}


