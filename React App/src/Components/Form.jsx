import React from "react";
export default function Form(){
    

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg',
    })
    const [allmemes, setallmemes] = React.useState([]);

    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setallmemes(data.data.memes))
            // allmeme = data.data.memes
    },[])
    console.log(allmemes);
    function getMemeImage(){
        const randomImage = Math.floor(Math.random() * allmemes.length);
        const url = allmemes[randomImage].url;
        setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
        }))
    }
    function memeText(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        })
        )
    }
    return(
        <div className="formContainer">
                <div className="inputContainer">
                    <input type="text" name="topText" placeholder="Top Text" value={meme.topText} onChange={memeText}/>
                    <input type="text" name="bottomText" placeholder="Bottom Text" value={meme.bottomText} onChange={memeText}/>
                </div>
                <div className="formButton">
                    <button onClick={getMemeImage}>Get a new meme image</button>
                </div>
                <img src={meme.randomImage} alt="mems" className="memeImage" />
                <h1>{meme.topText}</h1>
                <h1>{meme.bottomText}</h1>
        </div>
        
    )
}