import React from 'react'

function Question() {
  return (
    <div>
        <h1>Timer</h1>
        <span>Question  no. {1}</span> <span>What is your  name?</span>
      
        <input type="radio" id="option2" value="Option 2" name="question1" /> <label htmlFor="option2">Option 2</label>

 
    </div>
  )
}

export default Question