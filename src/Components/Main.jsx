
import { Box,Image } from '@chakra-ui/react'
import '../App.css'
import Slider from './Slider'
import SideBarItem from './SideBarItem'
import { useState } from 'react'


const FILTER_OPTIONS=[
  {
    name:"Brightness",
    property:'brightness',
    value:100,
    range:{
      min:0,
      max:200
    },
    unit: '%'
  },
  {
    name:"Contrast",
    property:'contrast',
    value:100,
    range:{
      min:0,
      max:200
    },
    unit: '%'
  },
  {
    name:"Saturation",
    property:'saturate',
    value:100,
    range:{
      min:0,
      max:200
    },
    unit: '%'
  },
  {
    name:"Grayscale",
    property:'grayscale',
    value:0,
    range:{
      min:0,
      max:100
    },
    unit: '%'
  },
  {
    name:"Sepia",
    property:'sepia',
    value:0,
    range:{
      min:0,
      max:100
    },
    unit: '%'
  },

  {
    name:"Blur",
    property:'blur',
    value:0,
    range:{
      min:0,
      max:20
    },
    unit: 'px'
  },
  {
    name:"Hue Rotate",
    property:'hue-rotate',
    value:0,
    range:{
      min:0,
      max:360
    },
    unit: 'deg'
  },
]

function Main() {
const [selectedOptionIndex,setSelectedOptionIndex]=useState(0)
const [options,setOptions]=useState(FILTER_OPTIONS)
let selectedOption=options[selectedOptionIndex]
let [st,setSt]=useState("")


let handleChangeSlider=({target})=>{
  setOptions(prev=>{
      return prev.map((option,index)=>{
        if(index !== selectedOptionIndex) return option
        setSt({...option,value:target.value})
        return {...option,value:target.value}
      })
  })

}
console.log("sttttt",st)
let getPicStyle=()=>{
let filterdOptions=options.map(option=>{
  return `${option.property}(${option.value}${option.unit})`
})
// console.log(filterdOptions.join(" "))
// setSt({filter:filterdOptions.join(" ")})
return {filter:filterdOptions.join(" ")}
}
// console.log("getPicStyle",filterdOptions)


// let gett=()=>{
//   setSt(getPicStyle)
// }
let src=localStorage.getItem("url")

  return (
    <Box 
    >
      <Box className='container'>
      <Box className='sidebar'>
{options.map((option,index)=>{
  return (
    <SideBarItem
      key={index}
      name={option.name}
      active={index === selectedOptionIndex}
      handleClick={()=>setSelectedOptionIndex(index)}
    />
  )
})}

      </Box>
      <Box className='main-pic'>
      <Image className='img' style={getPicStyle()} src={src} 
        />
        {/* <Image className='img' style={getPicStyle()} src="https://images.pexels.com/photos/4132804/pexels-photo-4132804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        /> */}
      </Box>
      <a href={src} download="mypic" style={getPicStyle()}>download</a>



      {/* <h2>bghbn</h2> */}
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleChangeSlider}

      />

    </Box>

    </Box>
  )
}

export default Main
