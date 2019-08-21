import React, {useState} from 'react'
import { 
    FaThumbsUp, 
    FaThumbsDown,
    FaReply,
    FaToggleOff
} from 'react-icons/fa'

const Comment = (props) =>{
    const [replies, setReplies] = useState([])
    const [textBox, setTextBox] = useState(false)
    const [ReplyInput, setReplyInput] = useState("")
    const [showButtons, setShowButtons] = useState(false)

    const show = showButtons ? "block" : "none";
    
    const displayReplies = function(){
        if(replies !== []){
            return replies.map(reply =>{
                return <p>{reply}</p>
            })
        }
    }
    console.log(show)
   
    return(
        <React.Fragment>
            <div className="comment" onClick={() => setShowButtons(!showButtons)}>
                <div className="comment_txt">
                    <p><b>{props.name}:</b> {props.comment}</p>
                </div>
                <div className="buttons" style={{display: show}}>
                    <span onClick={() => props.likeToggle(props.index)}><FaThumbsUp color={props.like ? "blue" : "black"}/></span>
                    <span onClick={() => props.dislikeToggle(props.index)}><FaThumbsDown color={props.dislike ? "blue" : "black"}/></span>
                    <span onClick={() => props.delete(props.index)}>X</span>
                </div>
            </div>
            <form onSubmit={(e) => {
                setTextBox(false)
                setReplies([...replies, ReplyInput])
                setReplyInput("");
                e.preventDefault();
            }}>
                { displayReplies()}
                {textBox ? <input type="text" onChange={(e) => setReplyInput(e.target.value)} />: null}
            </form>
            <FaReply onClick={() => setTextBox(!textBox)}/>
        </React.Fragment>
    )
}

export default Comment

