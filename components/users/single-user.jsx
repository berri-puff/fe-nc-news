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
      <> <Heading as='h2' size='lg' color='teal.700' textAlign='center'>Fetching...</Heading >
    <Spinner
    thickness="4px"
    speed="0.85s"
    emptyColor="purple.50"
    color="purple.300"
    size="xl"
    display='block'
    justifyContent='center'
  />
      </>
   )
  } else {
    return (
      <section className="single-user">
        <Heading as='h2' size='md'>Username: <Highlight query={singleUser.username} styles={{rounded:'full', bg:'orange.200', px: '3'}}>{singleUser.username}</Highlight></Heading>
        <Heading as='h3' size='md'>Name:
        <Highlight query={singleUser.name} styles={{rounded:'full', bg:'orange.200', px: '3'}}>{singleUser.name}</Highlight>
        </Heading>

        <img
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
