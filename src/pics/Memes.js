import React, { Component } from 'react';
import Meme1 from '../pics/1.jpg';
import Meme2 from '../pics/2.jpg';
import Meme3 from '../pics/3.jpg';
import Meme4 from '../pics/4.jpg';
import Meme5 from '../pics/5.jpg';
import Meme6 from '../pics/6.jpg';
import Meme7 from '../pics/7.jpg';
import Meme8 from '../pics/8.jpg';
import Meme9 from '../pics/9.jpg';


class Memes extends Component {
    render() {
    const images = [Meme1, Meme2, Meme3, Meme4, Meme5 , Meme6, Meme7, Meme8, Meme9];

    let item = Math.floor(Math.random() * images.length)   // to randomly chose a picture from above.
    
    let mapping = images.map((image) => {                  // to loop over the images and make it %50x%50
        return <img src={image} width="30%" height="30%"/>
    })
    console.log(mapping[item]);

  return (
    <div className="App">
      {mapping[item]}
    </div>

    );
  }
}


export default Memes;
