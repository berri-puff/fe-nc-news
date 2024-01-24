import {Heading} from '@chakra-ui/react'
const Header = () =>{
    const headingStyle = {
        textShadow: '3px 5px #B794F4'
    }
    return <Heading size='3xl' color='orange.300' style={headingStyle} >NC Hot Issue</Heading>
}

export default Header