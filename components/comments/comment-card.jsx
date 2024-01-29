import { useContext, useState, React} from "react";
import { convertToDates } from "../../utils/convertDate";
import { AiFillWechat } from "react-icons/ai";
import { FcLike, FcDislike } from "react-icons/fc";
import { UserContext } from "../../context/user";
import { deleteCommentByID } from "../../utils/api";
import { Card, CardHeader, CardBody, CardFooter, Stack, Box, Divider, Heading,  AlertDialog,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useToast
} from '@chakra-ui/react'


const SingleComment = ({ comment, setComments }) => {
  const date = convertToDates(comment.created_at);
  const { user } = useContext(UserContext);
  const [disableDeleteButton, setDisableDeleteButton] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [err, setErr] = useState(false)

const toast=useToast()
  function deleteComment(comment_id) {
    setDisableDeleteButton(true)
    deleteCommentByID(comment_id).then(() => {
      setComments((currComment) => {
        return currComment.filter((comments) => {
          if (comments.comment_id !== comment_id) {
            return comments;
          }
        });
      });
      toast({
        title: 'Comment deleted',
        status: 'success',
        duration: 4000,
        isClosable: true
      })
    setDeletedError(null)
    }).catch((err)=>{
      setDisableDeleteButton(false)
       setErr(true)
      setComments((currComment) => {
       return currComment
      });
    })
  }

  return (
    <section className="comment">
  {err ? toast({
        title: 'Try again',
        description: 'Unable to delete your comment right now',
        status: 'error',
        duration: 4000,
        isClosable: true
      }) : null}
      <Card shadow='9px 9px RGBA(0, 0, 0, 0.06)' border='1px solid RGBA(0, 0, 0, 0.24)'>
        <CardHeader padding='10px' margin='5px'>
   <Heading as='h3' size='md' color='teal.700' padding='10px'>{comment.author} said:</Heading>
   <p>{date}</p>
        </CardHeader>
        <CardBody padding='10px' margin='5px'>
          <Stack>
            <Box >
                <p>
        <AiFillWechat className="comment-icon"/>
        {comment.body}
      </p>
            </Box>
      <Divider/>
            <Box>
      <p>Votes: {comment.votes}</p>
      <button className='like-buttons'aria-label="I like this"><FcLike/></button>
      <button className='like-buttons'aria-label="I don't like this"><FcDislike/></button>
            </Box>
            <CardFooter className='delete-box'>

               {user.username === comment.author ? <><Button colorScheme='orange' onClick={onOpen}>Delete Comment</Button>
               <Modal
          
               isOpen={isOpen}
               onClose={onClose}
               isCentered
               closeOnEsc={true}
               closeOnOverlayClick={true}
              motionPreset="slideInBottom"
               >
                <ModalOverlay/>
                <ModalContent>
                  <ModalHeader fontSize='lg' fontWeight='bold'>Delete Comment</ModalHeader>
                  <ModalCloseButton/>
                  <ModalBody>
                    Are you sure you want to delete this comment?
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>
                      Cancel
                    </Button>
                    <Button onClick={() => {deleteComment(comment.comment_id)}} className='delete-button'disabled={disableDeleteButton}
                    colorScheme="red" ml={3}>Confirm</Button>
                  </ModalFooter>
                </ModalContent>
               </Modal>
               </>: null}
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>
     
    
   
     
    </section>
  );
};

export default SingleComment;
//<button onClick={() => {deleteComment(comment.comment_id)}} className='comment-button'disabled={disableDeleteButton}>