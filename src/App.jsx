import "./index.css"
import ToggleSwitch from './component/ToggleSwitch/ToggleSwitch'


const buttonContent = [
  '7', '8', '9', 'DEL',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '.', '0', '/', 'x',
  'RESET', '='
]

function App() {
  
  return (
    <div className="container">
      <div className="panelTheme">
        <span>calc</span>
        <div className="wrapperToggle">
          <span>Theme</span>
          <ToggleSwitch />
        </div>
      </div>
      <input className="input" type="text" disabled="disabled" value='399,981' />
      <div className="wrapperButtons">
        {
          buttonContent.map((value) => {
            return (
              <button key={value} className="Button ButtonLight">
                <span>{value}</span>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
