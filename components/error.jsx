import { BiSolidMessageAltError } from "react-icons/bi";
const Error = ({status, msg}) => {
  return (
    <section className="error">
      <p ><BiSolidMessageAltError className="error-icon"/>Oops, Error : {status == null ? <span>400</span> : <span>{status}</span>}</p> 
      {msg == null ? <p>Bad Request</p> : <p>{msg}</p>}
    </section>
  
  )
};

export default Error
