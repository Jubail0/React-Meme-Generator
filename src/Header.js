import React from 'react'


export default function Header(){
    return (
        <header className='header'>
         <img className ="header--image" src='../src/images/troll.png'/>   
        <h1 className="header--title">Meme Generator</h1>
        <p className="header--project">React Course-Project 3</p>
        </header>
    )
}