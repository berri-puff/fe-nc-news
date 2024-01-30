import { useState } from "react"
import {Button} from '@chakra-ui/react'

const DropMenu = ({children, title})=>{
    const [showContent, setShowContent]= useState(true)
function dropContent (){
setShowContent(!showContent)
}
    return (
        <div>
            <Button onClick={dropContent} color='orange.600' background='orange.50' border='solid' size='sm' marginTop='3px'>{showContent ? 'Show' : 'Hide'} {title}</Button>
           {showContent ? null:[children] } 
        </div>
    )
}

export default DropMenu