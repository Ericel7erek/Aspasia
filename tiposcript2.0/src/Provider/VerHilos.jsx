import React, { useEffect, useState } from "react";
import { useUserContext } from "./UserProvider";
import { getUser } from "../Firebase/api";
import EditPart from "../Components/EditPart";

const VerHilos = () => {
  const [user, setUser] = useUserContext();
  const [hilos, setHilos] = useState();
  return <div></div>;
};

export default VerHilos;
