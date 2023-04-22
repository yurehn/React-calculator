import "./index.css"
import ToggleSwitch from './component/ToggleSwitch/ToggleSwitch'
import { useState } from "react"


const buttonLight = "buttonBase buttonWidth-1 buttonLight"
const buttonDarkBlue_strait = "buttonBase buttonWidth-1 buttonDarkBlue"
const buttonDarkBlue_large = "buttonBase buttonWidth-2 buttonDarkBlue"
const buttonDarkRed = "buttonBase buttonWidth-2 buttonDarkRed"

const buttonContent = [
  ['7', buttonLight], ['8', buttonLight], ['9', buttonLight], ['DEL', buttonDarkBlue_strait],
  ['4', buttonLight], ['5', buttonLight], ['6', buttonLight], ['+', buttonLight],
  ['1', buttonLight], ['2', buttonLight], ['3', buttonLight], ['-', buttonLight],
  ['.', buttonLight], ['0', buttonLight], ['/', buttonLight], ['x', buttonLight],
  ['RESET', buttonDarkBlue_large], ['=', buttonDarkRed]
]

// const calculate = (value) => {
//   return value
// }

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleClick = (value) => {

    const lastValue = inputValue.slice(-1)
    const lastNumber = inputValue.split(/[-+x/]/).pop()

    if (!inputValue && ['+', '-', 'x', '/', '=', '.', 'DEL', 'RESET'].includes(value)) {
      return
    }

    if (value === '=') {
      if (!['+', '-', 'x', '/'].includes(lastValue)) {
        try {
          setInputValue(eval(inputValue.replaceAll('x', '*')).toString())
        } catch (error) {
          setInputValue('error')
        }
      }
      return
    }

    if (value === 'DEL') {
      setInputValue(inputValue.slice(0, -1))
      return
    }

    if (value === 'RESET') {
      setInputValue('')
      return
    }

    if (['+', '-', 'x', '/'].includes(value) && ['+', '-', 'x', '/'].includes(lastValue)) {
      setInputValue(inputValue.slice(0, -1) + value)
      return
    }

    if ((lastValue === '.' && ['+', '-', 'x', '/'].includes(value)) ||
      (['+', '-', 'x', '/'].includes(lastValue) && value === '.') ||
      (value === '.' && lastNumber.includes('.'))) {
      return
    }

    setInputValue(inputValue + value)
  }

  return (
    <div className="container">
      <div className="panelTheme">
        <span>calc</span>
        <div className="wrapperToggle">
          <span>Theme</span>
          <ToggleSwitch />
        </div>
      </div>
      <input className="input" type="text" disabled="disabled" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <div className="wrapperButtons">
        {
          buttonContent.map((value) => {
            return (
              <button key={value} className={value[1]} onClick={() => handleClick(value[0])}>
                <span>{value[0]}</span>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
