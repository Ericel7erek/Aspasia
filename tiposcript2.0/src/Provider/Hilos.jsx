import { useParams } from "react-router-dom";
import { addCommentToHilo, getComments } from "../Firebase/api";
import { useEffect, useState } from "react";
import { useUserContext } from "./UserProvider";

const Hilos = () => {
  const id = useParams();
  const [comment, setCommment] = useState();
  const [txt, setTxt] = useState();
  const [user] = useUserContext();
  const getComm = () => {
    getComments(id.id).then(setTxt);
  };
  useEffect(() => {
    getComm();
  }, []);
  return (
    <div>
      {txt &&
        txt.map((t, i) => (
          <p key={i}>
            {t.comment}--
            {t.userId}--
            {/* {t.id} */}
            {console.log(t)}
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
