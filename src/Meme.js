import React from 'react'
import memesData from './memesData.js'
import {nanoid} from 'nanoid'
import './index.css';
 
export default function Meme(){
    const[allMeme ,setAllMeme]=React.useState([])
    const[meme ,setMeme]=React.useState({
        topText :'',
        bottomText:'',
        url: 'https://i.imgflip.com/1bh3.jpg'
    })
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
        },[])
    
        function newImage(e){
            e.preventDefault()
            const randomNumber= Math.floor(Math.random()*allMeme.length)
            const randomUrl = allMeme[randomNumber].url
            console.log(randomUrl)
            setMeme(prevState => ({
                ...prevState,
                url : randomUrl
            }))
           
        }
        function handleChange(e){
     e.preventDefault()
      let { name ,value}= e.target
      setMeme(prevState=> ({
        ...prevState,
        [name]: value
      }))
        }
    return(
        <main >
            <div className='form'>
            <input type="text" name="topText" value={meme.topText} onChange={handleChange} placeholder='Top Text' className="form--input" />
            <input type="text"  name ="bottomText" value={meme.bottomText} onChange={handleChange} placeholder='Bottom Text' className="form--input" />
            <button onClick={newImage} className="form--button"> Get a new meme image</button>
            </div>
         <div className="meme">
         <img className="meme--image" src={meme.url}></img>
         <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
         </div>
        </main>
    )
}