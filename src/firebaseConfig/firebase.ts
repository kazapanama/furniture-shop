
import { FirebaseApp, initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc} from 'firebase/firestore' 
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
export async function addNewFlat(){
  await setDoc(doc(db, "products",String(Date.now())), {name:'jej'});
}