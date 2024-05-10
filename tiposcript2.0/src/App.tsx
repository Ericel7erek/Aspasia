import UserProvider, { useUserContext } from "./Provider/UserProvider";
import UserInfo from "./Provider/UserInfo";
import Login from "./Provider/Login";
import Router from "./Router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./Firebase/firebase";

const App = () => {
  const [user, setUser] = useUserContext();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user, " userId:", user.uid);
        setUser(user);
      } else {
        console.log("No user logged");
        setUser('nouser');
      }
    });
  }, []);
  return  (
    <>
    {user === null ?<div>Loading</div>:user != 'nouser'? <Router />: <Login />}

    </>
  )
};

export default App;
