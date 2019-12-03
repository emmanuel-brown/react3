import React from 'react'
import './css/main.scss'
import Inputer from './Components/Inputer'
import Comment from './Components/Comment'
import Navbar from './Components/Navbar'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      whichUser: "Emmanuel",
      comments: [
        {
          user: "Jackson",
          comment: "I like to put the peanut butter before the jelly",
          like: true,
          dislike: false,
          numOfLikes: 0,
          numOfDislike: 0
        },
        {
          user: "Anthony",
          comment: "Me too",
          like: false,
          dislike: false,
          numOfLikes: 0,
          numOfDislike: 0
        }
      ]
    }
  }

  inputer = ({user = this.state.whichUser, userInput}) =>{
    const { comments } = this.state
    let msg = comments.slice();
    msg.push({user: user, comment: userInput})
    this.setState({
      comments: msg
    })
  }

  delete = (id) =>{
    const { comments } = this.state;
    let grabComments = comments.splice(id, 1)
    this.setState({comments})
  }

  like = (id) =>{
    const { comments } = this.state;
    const grabComments = comments.slice()
    grabComments[id].like = !grabComments[id].like
    if(grabComments[id].dislike){
      grabComments[id].dislike = false
    }
    this.setState({comments})
  }

  dislike = (id) =>{
    const { comments } = this.state;
    const grabComments = comments.slice()
    grabComments[id].dislike = !grabComments[id].dislike
    if(grabComments[id].like){
      grabComments[id].like = false
    }
    this.setState({comments})
  }
  render(){
    const { comments } = this.state
    const displayMsg = []
    let numOfDislikes = 0
    let numOfLikes = 0
    comments.map((msg, index) =>{
      if(msg.like){
        numOfLikes += 1
      }
      if(msg.dislike){
        numOfDislikes += 1
      }
      return(
        displayMsg.push(
          <Comment 
            key={`${msg.user}${index}`}
            name={msg.user}
            index={index}
            comment={msg.comment}
            likeToggle={this.like}
            like={msg.like}
            dislikeToggle={this.dislike}
            dislike={msg.dislike}
            delete={this.delete}
          />
        )
      )
    })
    console.log(numOfLikes)
    return (
      <React.Fragment>
        <Navbar numOfDislikes={numOfDislikes} numOfLikes={numOfLikes}/>
        <div className="App">
          <main className="container">
            {displayMsg}
            <Inputer click={this.inputer}/>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
