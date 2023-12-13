import { useState } from "react"

const DropMenu = ({children, title})=>{
    const [showContent, setShowContent]= useState(false)
function dropContent (){
setShowContent(!showContent)
}
    return (
        <div className="dropdown">
            <button onClick={dropContent}>{showContent ? 'Show' : 'Hide'} {title}</button>
           {showContent ? null:[children] } 
        </div>
    )
}

export default DropMenu