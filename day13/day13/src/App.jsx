import React from 'react'
import {useState} from 'react'

const App = () => {
  const [Name , setName] = useState([])
  function handlechange(event){
    setName(event.target.value);
  }
  function handlesubmit(event){
    event.preventDefault();
    alert(`Hello ${Name}, your form has been submitted successfully!`)
  }

  return (

  <div>
      
    <div>
      <input type="text" placeholder='Enter your name' onChange={handlechange} />
      <h1>Hello {Name}</h1>
      <br />
      <hr />
      <br />
    </div >


    <div>

      <from onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter your name' />
        <input type="email" placeholder='Enter your email' />
        <input type="password" placeholder='Enter your password' />
        <button type='submit' onSubmit={handlesubmit}>Submit</button>
      </from>

    </div>
  </div>
    
  )
}

export default App