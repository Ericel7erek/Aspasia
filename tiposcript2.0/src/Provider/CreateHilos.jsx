import { useEffect, useState } from "react";
import { useUserContext } from "./UserProvider";
import { logout, newHilo, getHilos } from "../Firebase/api";
import { Link, useNavigate, useParams } from "react-router-dom";

const CreateHilos = () => {
  const [user, setUser] = useUserContext();
  const [txt, setTxt] = useState();
  const [hilos, setHilos] = useState();
  const nav = useNavigate();

  const getHilo = () => {
    getHilos().then((u) => {
      u && setHilos(u);
    });
  };
  useEffect(() => {
    getHilo();
  }, []);

  return (
    <>
      {user ? (
        <>
          <p>Hello {user?.email}, Welcome to your todo List:</p>

          {hilos &&
            hilos.map((hilo, i) => {
              return (
                <div>
                  <Link to={`/Hilos/${hilo.id}`} key={i}>
                    {hilo.taskText}
                  </Link>
                  <br />
                </div>
              );
            })}
          <input
            type="text"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          />
          <button
            onClick={async () => {
              console.log("11111111111", user);
              await newHilo(txt);
              getHilo();
              setTxt("");
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              logout();
              nav("/login");
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        nav("/login")
      )}
    </>
  );
};

export default CreateHilos;
