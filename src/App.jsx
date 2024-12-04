
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
//import reactDOM from 'react-dom'
import {add, div, mul, sub } from './Sample'



function App () {
  const purpleColour = '8e44ad'
  const text = 'Click Me'
  const [ bg, setBg ] = useState( purpleColour )
  const [ name, setName ] = useState( text )

  const [ myName, setMyName ] = useState()
  const [ fullName, setFullName ] = useState()

  const [ lastName, setLastName ] = useState( '' )
  const [ fullLastname, setFullLastName ] = useState( '' )

  const onSubmit = ( event ) => {
    event.preventDefault()
    setFullName( myName )
    setFullLastName( lastName )
  }

  const inputEvent = ( e ) => {
    console.log( e.target.value )
    setMyName( e.target.value )
  }
  const inputEventTwo = ( e ) => {
    console.log( e.target.value )
    setLastName( e.target.value )
  }

  const bgChange = () => {
    console.log( 'Clicked' )
    let newBg = '#e4220b'
    setBg( newBg )
    setName( 'You changed me :' )

  }

  const bgBack = () => {
    setBg( purpleColour )
    setName( text )
  }



  const [ count, setCount ] = useState( 0 )
  const IncNum = () => {
    setCount(count+1)
  }

  let currentTime = new Date().toLocaleTimeString()
  
  //currentTime.getHours().toLocaleString()
   
  console.log(currentTime)

  let greetings;
  const customStyle = {
    color: ""
  };

  if ( currentTime.endsWith('AM')) {
    greetings = "Good Morning";
    customStyle.color = "red";
  } else if ( currentTime.endsWith( 'PM' ) ) {
    greetings = "Good Evening";
    customStyle.color = "green";
  } else {
    greetings = "Good Night";
    customStyle.color = "blue";
  }
  
  let time = new Date().toLocaleTimeString()
  const [ctime, setCTime]=useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCTime(time)
  }

  setInterval( updateTime, 1000 )



  return (

    <>
      <div className='time'> Current time in this country is:  <h3> {ctime} </h3></div>

      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
        <button onDoubleClick={bgChange}>DoubleClick me</button>
      </div>

      {/*forms in react by Thapa Ji */}
      {/* defaultValue=''*/}


      <div>
        <form onSubmit={onSubmit}>
          <h1>Hello {fullName} {fullLastname}</h1>
          <input
            type='text'
            placeholder='Enter your first name'
            onChange={inputEvent}
            value={myName}
          />

          {/* defaultValue=''*/}
          <br />
          <input type='text' placeholder='Enter your last name'
            onChange={inputEventTwo}
            value={lastName}
          />
          <br />
          <button type='submit' > Click Me 😇 </button>
        </form>
      </div>
    </>
  )
}

export default App
