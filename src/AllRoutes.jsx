import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Main from "./Components/Main"


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/main" element={<Main/>}/>

        </Routes>
    </div>
  )
}

export default AllRoutes