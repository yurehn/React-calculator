// import { useState } from "react"
import "./index.css"

// const calculate = (value) => {
//   return value
// }


function App() {
  // const [value, setValue] = useState('')

  return (
    <div className="container">
      <div className="PanelTheme">
        <span>calc</span>
        <div>
          <span>Theme</span>
        </div>
      </div>
      <input className="input" type="text" disabled="disabled" value='399,981' />
      <div className="wrapperButtons">
        <button className="numberButton">
          <span>7</span>
        </button>
      </div>
    </div>
  )
}

export default App
