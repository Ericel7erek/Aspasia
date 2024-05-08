import firebase from "firebase/compat/app";
import { collection, addDoc, getDocs, query,db,doc ,updateDoc, getDoc, deleteDoc, where, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from "./firebase";
import { setDoc, type QuerySnapshot } from 'firebase/firestore'

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
    const result = await getDoc(doc(db, "users", id));
    const user = result.data();
    const prevTasks = user?.tasks ? [...user.tasks,taskText] : [ taskText ];
    await updateDoc(doc(db, "users", id), { ...user, tasks: prevTasks });
}
export const newHilo = async (taskText: string) => {
    // Add the new "hilo" document to the "Hilos" collection
    await addDoc(collection(db, "Hilos"), {
        taskText: taskText,
        // You can add more fields here if needed
    });
}

// Function to add a comment to a specific "hilo"
export const addCommentToHilo = async (hiloId: string, comment: string, userId: string) => {
    // Get a reference to the specific "hilo" document
    const hiloRef = doc(db, "Hilos", hiloId);
    // Update the "comments" array within the "hilo" document
    await updateDoc(hiloRef, {
        comments: firebase.firestore.FieldValue.arrayUnion({ comment, userId })
    });
}


export const getUser = async (id:string) => {
    console.log('id', id)
    const result = await getDoc(doc(db, "users", id));
    console.log('result', result.data())
    return result.data();
}

export const getHilos = async () => {
    // Retrieve all documents from the "Hilos" collection
    const querySnapshot = await getDocs(collection(db, "Hilos"));
    // Iterate through the documents and extract data
    const hilos = querySnapshot.docs.map(doc => ({
        id: doc.id, // Document ID
        ...doc.data() // Other data in the document
    }));
    return hilos;
}
export const access = async (name?:string) => {
    const colRef = collection(db, "users");
    const result = await getDocs(query(colRef, where('name', '==', name)));
    if (result.size === 0) {
        const a = await addDoc(colRef, { name });
        return a.id;
    }
    return result.docs[0].id;
}

export const deleteTask = async (userId:string, taskPos:number) => {
    console.log(userId)
    const result = await getDoc(doc(db, "users", userId));
    const user = result.data();
    console.log('deleteTask', user)
    await updateDoc(doc(db, "users", userId), { ...user, tasks: user?.tasks.filter((t:number, i:number) => i !== taskPos) });
}

export const updateTask = async (userId:string, taskPos:string, taskText:{
        txt:string
    }[]) => {
    const result = await getDoc(doc(db, "users", userId));
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
    await updateDoc(doc(db, "users", userId), user);
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



export const signUp = async (email:string, password:string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(userCredential.user);
        const user = userCredential.user;
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, {});
        return user.uid;
    } catch (err:any) {
        return err.message;
    }
}

export const signIn = async (email:string, password:string) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user.uid;
    } catch (err:any) {
        return err.message;
    }
}

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);



export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(result => {
        return result.user;
    });
}