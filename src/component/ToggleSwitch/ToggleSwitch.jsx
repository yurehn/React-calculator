import { useState } from "react";
import "./index.css"

const ToggleSwitch = () => {
  const [checked, setChecked] = useState('left');

  const handleClick = () => {
    if (checked === 'left') {
      setChecked('center')
    } else if (checked === 'center') {
      setChecked('right')
    } else if (checked === 'right') {
      setChecked('left')
    }
    
  }
  
  return (
    <input
      className= {`switch ${checked}`}
      type="checkbox"
      checked={checked}
      onChange={handleClick}
    />
  )
}

export default ToggleSwitch
