import { collection, addDoc, getDocs, query,db } from "./firebase";

export type todo = {
    userName: string;
    id?:string;
}

const collectionName = 'items';

// CREATE
export const createItem = async(obj:todo):Promise<string> => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id!;
}

// READ
export const getItems= async ()  => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

const getArrayFromCollection = (collection:any) => {
    return collection.docs.map((doc:any) => {
        return { ...doc.data(), id: doc.id };
    });
}