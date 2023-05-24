import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
    let [selectedImage,setSelectedImage]=useState()

    let handleChange=(e)=>{
        if(e.target.files && e.target.files.length>0){
            setSelectedImage(e.target.files[0])
        }


    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(URL.createObjectURL(selectedImage))
        let val=URL.createObjectURL(selectedImage)
        console.log(typeof(val))
        localStorage.setItem("url",val)
    }
  return (
    <div>
        <h1>Upload a file</h1>
      <input type='file'  onChange={handleChange}/>
      <Button onClick={handleSubmit}>
      <Link to="/main">Upload</Link>
</Button>
    </div>
  )
}

export default Home