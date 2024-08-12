import { useState } from 'react'
import './App.css'
import TabButton from './components/Buttons/TabButton.jsx'
import Concept from './components/Concept/Concept.jsx'
import { PHONE_DATA } from './assets/data.js'
function App() {
  const [concept, setConcept] = useState()
  function handleClick(btnName) {
    setConcept(btnName);
  }
  let tabContent = (<div className="animated-title">
    <div className="text-top">
      <div>
        <span>Choose</span>
        <span>an iPhone model</span>
      </div>
    </div>
    <div className="text-bottom">
      <div>see its specifications!</div>
    </div>
  </div>) 
  return (
    <div className="content">
      <ul className="nav nav-pills" role="tablist">
        <TabButton isSelected={concept === "iphone12"} onSelect={() => handleClick("iphone12")}>iphone 12</TabButton>
        <TabButton isSelected={concept === "iphone13"} onSelect={() => handleClick("iphone13")}>iphone 13</TabButton>
        <TabButton isSelected={concept === "iphone14"} onSelect={() => handleClick("iphone14")}>iphone 14</TabButton>
        <TabButton isSelected={concept === "iphone15"} onSelect={() => handleClick("iphone15")}>iphone 15</TabButton>
      </ul>
      <div className="tab-content">
        {
          !concept ? tabContent : <Concept {...PHONE_DATA[concept]} />
        }
      </div>

    </div>
  )
}

export default App
