import { Box } from "@chakra-ui/react"
import "../App.css"


const Slider = ({min,max,value,handleChange}) => {
  return (
  <Box className="slider-container">
    <input type="range" className="slider"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
    />
  </Box>
  )
}

export default Slider