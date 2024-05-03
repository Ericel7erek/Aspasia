import { collection, addDoc, getDocs, query,db,doc ,updateDoc, getDoc, deleteDoc, where } from "./firebase";
import { type QuerySnapshot } from 'firebase/firestore'

export type todo = {
    id?:string;
    userName: string;
    date: string
}
export type user = {
    user?:string;
    id?:string;
    tasks?:{
        txt:string
    }[]
}
const collectionName = 'items';
// Users
export const newTask = async (id:string, taskText:{
        txt:string
    }[]) => {
    const result = await getDoc(doc(db, "Users", id));
    const user = result.data();
    const prevTasks = user?.tasks ? [...user.tasks,taskText] : [ taskText ];
    await updateDoc(doc(db, "Users", id), { ...user, tasks: prevTasks });
}

export const getUser = async (id:string) => {
    console.log('id', id)
    const result = await getDoc(doc(db, "Users", id));
    console.log('result', result.data())
    return result.data();
}

export const access = async (name?:string) => {
    const colRef = collection(db, "Users");
    const result = await getDocs(query(colRef, where('name', '==', name)));
    if (result.size === 0) {
        const a = await addDoc(colRef, { name });
        return a.id;
    }
    return result.docs[0].id;
}

export const deleteTask = async (userId:string, taskPos:string) => {
    console.log(userId)
    const result = await getDoc(doc(db, "Users", userId));
    const user = result.data();
    console.log('deleteTask', user)
    await updateDoc(doc(db, "Users", userId), { ...user, tasks: user?.tasks.filter((t, i) => i !== taskPos) });
}

export const updateTask = async (userId:string, taskPos:string, taskText:{
        txt:string
    }[]) => {
    const result = await getDoc(doc(db, "Users", userId));
    const user = result.data();
    console.log('uuuuuuuuuuuuuuuuuu', userId, taskPos, taskText);
    if(user){
   user.tasks[taskPos]= taskText
    // const newTasks = user?.tasks.map((task, i) => {
    //     if (i !== taskPos) {
    //         return task;
    //     } else {
    //         return { ...task, txt: taskText }
    //     }
    // })
    await updateDoc(doc(db, "Users", userId), user);
    }
 
}

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

