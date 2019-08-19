import React, { useState } from 'react'

const Inputer = (props) =>{
        const [userInput, setUserInput] = useState("")
        const commenting = {userInput: userInput} 
        return(
            <React.Fragment>
                <div className="userInput">
                    <textarea className="userInput_textBox" type="text" value={userInput} onChange={e => setUserInput(e.target.value)} name="userInput" id="userInput"></textarea>
                    <button className="userInput_button" onClick={() => props.click(commenting)}><p>Send</p></button>
                </div>
            </React.Fragment>
        )
    }


export default Inputer