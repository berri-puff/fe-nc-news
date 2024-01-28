import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../utils/api";
import { UserContext } from "../../context/user";
import { LoadingContext } from "../../context/loading";
import Error from "../error";
import {Spinner, Heading,Highlight, Divider} from '@chakra-ui/react'

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
    return (
      <section className="loading-container"> 
      <Heading as='h2' size='lg' color='teal.700' >Fetching...</Heading >
      <> </>
    <Spinner
    thickness="4px"
    speed="0.85s"
    emptyColor="purple.50"
    color="purple.300"
    size="xl"
  />
      </section>
   )
  } else {
    return (
      <section className="single-user">
        <Heading as='h1' size='lg' color='teal.700'>Click on the avatar to log in!</Heading>
        <p>If you like to change user, click on the button top right to navigate you back to the users page.</p>
        <Heading as='h2' size='md' margin='5px' padding='5px'>Username: <span className='name'>{singleUser.username}</span></Heading>
        <Heading as='h3' size='md' margin='5px' padding='5px'>Name: <span className="name">{singleUser.name}</span>
        </Heading>

        <img className="profile-pic"
          src={singleUser.avatar_url}
        width='200px'
      height='auto'
      display='flex'
          onClick={userLogIn}
        />
        
      </section>
    );
  }
};

export default SingleUser;
