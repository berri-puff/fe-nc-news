import { IoSad } from "react-icons/io5";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
const Error = ({status, msg}) => {
  return (
    <section className="error">
      <Alert status='error' variant='top-accent' flexDirection='column' alignContent='center' textAlign='center' >
        <AlertIcon boxSize='40px' mr={0} mt={7}/>
        <AlertTitle fontSize='2xl' mt={5} mb={3}>
           Oops! {status == null ? <span>400<IoSad className="error-icon"/></span> : <span>{status}<IoSad className="error-icon"/></span>}
        </AlertTitle>
        <AlertDescription maxWidth='sm' fontSize='md'>
           {msg == null ? <p>Bad Request</p> : <p>{msg}</p>}
        </AlertDescription>
      </Alert>
    
     
    </section>
  
  )
};

export default Error
