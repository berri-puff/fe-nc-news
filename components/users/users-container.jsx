import { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../../utils/api";
import { LoadingContext } from "../../context/loading";
import { Spinner, Badge, Box, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    setIsLoading(true);
    getAllUsers().then((receivedUsers) => {
      setUsers(receivedUsers);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.85s"
        emptyColor="purple.50"
        color="purple.300"
        size="xl"
      />
    );
  } else {
    return (
      <section className="users-container">
        {users.map((user) => {
          return (
            <div className="user-box" key={user.username}>
              <Box fontWeight="semibold" padding="5px" margin="10px" size='md'>
                <Link to={`/users/${user.username}`}>
                  <Avatar
                    size="2xl"
                    src={user.avatar_url}
                  ></Avatar>
                </Link>
                <Box>
                  <Badge
                    padding="2px"
                    colorScheme="orange"
                    textTransform="lowercase"
                    fontSize="md"
                  >
                    <Link to={`/users/${user.username}`}>{user.username}</Link>
                  </Badge>
                </Box>
              </Box>
            </div>
          );
        })}
      </section>
    );
  }
};

export default UsersContainer;
