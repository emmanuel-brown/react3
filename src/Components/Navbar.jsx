import React from 'react'

const Navbar = (props) =>{
    return(
        <nav id="Header">
            <header>
                <h1>Commenting App</h1>
            </header>
            <ul className="stats">
                <li>Likes: {props.numOfLikes}</li>
                <li>Dislikes: {props.numOfDislikes}</li>
            </ul>
        </nav>
    )
}

export default Navbar