import { Heading } from "@chakra-ui/react";
import { FaGithubSquare } from "react-icons/fa";

const Welcome = () => {
  return (
    <article className="home-page">
        <section className='instructions'>
         <Heading size="lg">Start exploring articles today by navigating to the nav bar!</Heading>
      <p>Don't forget to log-in to start commenting</p>
      <p>
        Have an article you'd like to talk about? Submit a piece yourself!
      </p>
        </section>
     <section className="introduction"> 
             <Heading size='lg'>What's this app about?</Heading>
    <p>As part of the Software Development course in Northcoders, 'Hot Issue' was produced as a project to showcase skills learnt during the Front-end production phase, ultilising React.js to allow users interaction and making API calls to the database produced during Back-end development.</p>
    <a href='https://github.com/berri-puff/fe-nc-news' target='_blank'className="github-icon"><FaGithubSquare style={{fontSize: '2em'}} /></a>
     </section>

    </article>
  );
};
export default Welcome;
