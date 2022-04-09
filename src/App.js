import {useState, useEffect} from 'react'
import Dice from './images/icon-dice.svg'
import Pattern from './images/pattern-divider-mobile.svg'

function App() {


 const [advice, setadvice] = useState({})

 const getAdvice = async () => {
   let adviceSlip = await fetch('https://api.adviceslip.com/advice')
   return adviceSlip.json()
 }

 const showadvice = () => {
  getAdvice().then(data => {
    setadvice(data.slip)
  })
 }

 
 useEffect(() => {
  showadvice()
 }, [])



  return (
    <div className="App">
      <div className="card">
        <p>advice#{advice.id}</p>
        <h1>"{advice.advice}"</h1>


        <img src="{Pattern}" className='pattern' alt="" />


        <button onClick={showadvice}>
          <img src="{Dice}" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
