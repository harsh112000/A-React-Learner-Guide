import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const RandomColor = () => {
    //seeting default colour type to hex
    const[typeOfColor, setTypeOfColor] = useState('hex');
    //setting default color to black
    const[color, setColor] = useState('#000000');
    const randomColorUtility = (length) =>{
        return Math.floor(Math.random() * length)
    }

    const handleCreateRandomHexColor = () =>{
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i = 0; i < 6; i++){
        
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    const handleCreateRandomRgbColor = () =>{
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'hex'){
            handleCreateRandomHexColor()
        }else{
            handleCreateRandomRgbColor()
        }
       }, [typeOfColor])

  return (
    <div style = {{
        height : '100vh',
        width : '100vw',
        background : color,
    }}>
        <button onClick = {()=>{setTypeOfColor('hex')}}>Create Hex Color</button>
        <button onClick = {() => {setTypeOfColor('rgb')}}>Create RGB Color</button>
        <button onClick = {typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={{
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            flexDirection : 'column',
            color : 'white',
            fontSize : '2rem',
            marginTop : '50px'
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color '}</h3>
            <h1>{color}</h1>
        </div>
        <h1>Generate Random Color</h1>
        <div className="bottom-right-button">
        <Link to="/star-rating">Go to Random Color</Link>
      </div>
    </div>
    
  )
}
export default RandomColor;
