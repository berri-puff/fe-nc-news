import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";
import { StarIcon } from "@chakra-ui/icons";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

const Navigation = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="Nav-bar">
      <Tabs variant="soft-rounded" align="center" colorScheme="purple" size='md' isFitted color='teal.600'>
        <TabList>
          <Tab style={{fontSize:'20px'}}>
            <Link to="/" className="nav-buttons">
              Home
            </Link>
          </Tab>
          <StarIcon/>
          <Tab style={{fontSize:'20px'}}>
            <Link to="/topics" className="nav-buttons">
              Topics
            </Link>
          </Tab>
          <StarIcon />
          <Tab style={{fontSize:'20px'}}>
            <Link to="/articles" className="nav-buttons">
              Articles
            </Link>
          </Tab>
          <StarIcon />
          <Tab style={{fontSize:'20px'}}>
            {user.length === 0 ? (
              <Link to="/users" className="nav-buttons">
                Log In
              </Link>
            ) : (
              <p>
                You are logged in as
                <span className="logged-in">{user.username}</span>
              </p>
            )}
          </Tab>
        </TabList>
      </Tabs>
    </nav>
  );
};
export default Navigation;
