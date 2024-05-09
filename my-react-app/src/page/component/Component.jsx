import React, {useState} from 'react'
import "../component/Component.css"
import background from "../image/deal_ofthe_week.png"
import {useNavigate} from  "react-router-dom"
 

const Component = () => {
    let time = new Date().toLocaleTimeString();
    const navigate = useNavigate()
    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () =>{
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)

    const handleChangeDirection =() =>{
        navigate('/products')
    }
   
  return (
    <div className='component'>
         <div>
            <img src={background} alt="" className='background-4' />
         </div>
         <div className='timingBox'>
            <p className='time-title'>Deal Of The Week</p>
            <h1>{currentTime}</h1>
            <button className='shopButton' onClick={handleChangeDirection}>SHOP NOW</button>
         </div>
    </div>
  )
}

export default Component