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

const operators = ['+', '-', 'x', '/']



const formatNumber = (numberStr) => {
  
  const [left, right] = numberStr.toString().split('.')
  const numberWithOutDot = left.replace(/,/g, '')
  const formattedLeft = numberWithOutDot.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return right ? `${formattedLeft}.${right}` : formattedLeft
}



function App() {
  const [inputValue, setInputValue] = useState('')

  const handleClick = (value) => {
    // isNaN
    const lastValue = inputValue.slice(-1)
    const lastNumber = inputValue.split(/[-+x/]/).pop()
    

    if (!inputValue && ['+', '-', 'x', '/', '=', '.', 'DEL', 'RESET'].includes(value)) {
      return
    }

    if (value === '=') {
      if (!operators.includes(lastValue)) {
        try {
          const formatStr = eval(inputValue.replaceAll('x', '*').replaceAll(',', '')).toString()
          setInputValue(formatNumber(formatStr))

        } catch (error) {
          setInputValue('error')
        }
      }
      return
    }

    if (value === 'DEL') {
      if(!isNaN(lastValue) && lastNumber.length > 4) {
        setInputValue(inputValue.slice(0, -lastNumber.length) + formatNumber(lastNumber.slice(0, -1)))
        return
      }
      setInputValue(inputValue.slice(0, -1))
      return
    }

    if (value === 'RESET') {
      setInputValue('')
      return
    }

    if (operators.includes(value) && operators.includes(lastValue)) {
      setInputValue(inputValue.slice(0, -1) + value)
      return
    }

    if ((value === '.' && lastNumber.includes('.')) || (lastValue === '.' && operators.includes(value)) ||
      (operators.includes(lastValue) && value === '.')) {
      return
    }


    if (value !== '.' && !operators.includes(lastValue) && !operators.includes(value)) {
      const newNumber = formatNumber(lastNumber+value)
      const strWithOutLastNumber = inputValue.slice(0, -lastNumber.length)
      setInputValue(strWithOutLastNumber + newNumber)

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
