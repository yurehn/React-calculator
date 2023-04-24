import { useState } from "react"
import "./index.css"


const ToggleSwitch = () => {
  const [switchValue, setSwitchValue] = useState("1")

  const handleChange = (event) => {
    setSwitchValue(event.target.value);
  };

  return (
    <div className="wrapperToggleSwitch">
      <div className="infoSwitch">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <ul className="toggleSwitch">
        <li>
          <input
            type="radio"
            name="switch"
            value="1"
            checked={switchValue === "1"}
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="switch"
            value="2"
            checked={switchValue === "2"}
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="switch"
            value="3"
            checked={switchValue === "3"}
            onChange={handleChange}
          />
        </li>
      </ul>
    </div>
  )
}

export default ToggleSwitch
