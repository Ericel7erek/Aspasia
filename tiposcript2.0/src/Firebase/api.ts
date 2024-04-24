import { collection, addDoc, db } from "./firebase";

export type todo = {
    userName: string
}

const collectionName = 'items';

// CREATE
export const createItem = async(obj:todo):Promise<string> => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id!;
}