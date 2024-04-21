import { collection, addDoc, getDocs, query,db,doc ,updateDoc, getDoc, deleteDoc, where } from "./firebase";
import { type QuerySnapshot } from 'firebase/firestore'

export type todo = {
    id?:string;
    userName: string;
    date: string
}
const collectionName = 'items';

// CREATE
export const createItem = async(obj:todo):Promise<string> => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}
export const updateItem = async (id:string , obj:todo) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}
// READ
export const getItems= async ():Promise<todo[]> => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    console.log(result)
    return getArrayFromCollection(result);
}

export const getItemById = async (id:string) => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

export const deleteItem = async (id:string) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    
}
const getArrayFromCollection = (collection:QuerySnapshot) => {
    return collection.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as todo;
    });
}
// Access 
export const access = async (name?:string) => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef, where('name', '==', name)));
    if (result.size === 0) {
        const a = await addDoc(colRef, { name });
        return a.id;
    }
    return result.docs[0].id;
}