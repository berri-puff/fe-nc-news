import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../utils/api";
import { UserContext } from "../../context/user";
import { LoadingContext } from "../../context/loading";
import Error from "../error";

const SingleUser = () => {
  const { username } = useParams();
  const [singleUser, setSingleUser] = useState([]);
  const { setUser } = useContext(UserContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [serverErr, setServerErr] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getUserByUsername(username)
      .then((receivedUser) => {
        setSingleUser(receivedUser);
        setIsLoading(false);
      })
      .catch((error) => {
        setServerErr(error.response); 
         setIsLoading(false);
      });
  }, []);

  function userLogIn() {
    setUser(singleUser);
  }

  if (serverErr) {
        return <Error status={serverErr.status} msg={serverErr.data.msg}/>
  } else if (isLoading) {
    return <h2>Fetching...</h2>;
  } else {
    return (
      <section>
        <h2>Name: {singleUser.name}</h2>
        <img
          className="profilePic"
          src={singleUser.avatar_url}
          onClick={userLogIn}
        />
        <h3>Username: {singleUser.username}</h3>
      </section>
    );
  }
};

export default SingleUser;
