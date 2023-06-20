import { Box, Button, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Home.css"


const Home = () => {
    let [selectedImage,setSelectedImage]=useState()

    let handleChange=(e)=>{
        if(e.target.files && e.target.files.length>0){
            setSelectedImage(e.target.files[0])
        }


    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        // alert(URL.createObjectURL(selectedImage))
        let val=URL.createObjectURL(selectedImage)
        console.log(typeof(val))
        localStorage.setItem("url",val)
    }
  return (
    <Box bg="blue.800" display={"flex"} justifyContent={"center"} h="100vh" alignItems={"center"}>
    <Box display={"flex"} bg="blue.500" flexDir={"column"} textAlign={"center"} p="50px" borderRadius={"20px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
   <Heading mb="20px">Upload Your Image</Heading>
      <Input p="5px" type='file'  onChange={handleChange}/>
      <Button mt="20px" onClick={handleSubmit} bg=" rgb(78, 73, 95);">
      <Link to="/main">Upload</Link>
</Button>
    </Box>

    </Box>
  )
}

export default Home