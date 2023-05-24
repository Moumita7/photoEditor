
// import { Button } from "@chakra-ui/react"
import "../App.css"

const SideBarItem = ({name,active,handleClick}) => {
  return (
    <div>
        {/* <button className="sidebar_item">SideBar Item</button> */}
        
         <button className={`sidebar_item ${active ? 'active': ""}`} 
         onClick={handleClick}
         >{name}</button>
    </div>
  )
}

export default SideBarItem