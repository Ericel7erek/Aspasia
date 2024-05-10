import { useParams } from "react-router-dom";
import { addCommentToHilo, getComments, uploadImage } from "../Firebase/api";
import { useEffect, useState } from "react";
import { useUserContext } from "./UserProvider";

const Hilos = () => {
  const id = useParams();
  const [comment, setCommment] = useState(null);
  const [txt, setTxt] = useState();
  const [user] = useUserContext();
  const [imageId, setImageId] = useState();
  console.log(user);
  const getComm = () => {
    getComments(id.id).then(setTxt);
  };
  console.log(user);
  useEffect(() => {
    getComm();
  }, []);
  return (
    <div>
      {txt &&
        txt.map((t, i) => (
          <p
            key={i}
            style={{
              border: "1px solid black",
              padding: "25px",
              boxSizing: "border-box",
              backgroundColor: "tomato",
              borderRadius: "20px",
              margin: "10px",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Comment:{t.comment}-- User:{" "}
            {user.uid === t.userId ? user.displayName : t.userId}
            {/* {t.id} */}
            {console.log("111111111111111", t)}
          </p>
        ))}
      <input
        type="text"
        value={comment}
        onChange={(e) => setCommment(e.target.value)}
      />

      {console.log(id.id)}
      <button
        onClick={() => {
          addCommentToHilo(id.id, comment, user.uid);
          getComm();
        }}
      >
        Add Comment
      </button>
    </div>
  );
};

export default Hilos;
