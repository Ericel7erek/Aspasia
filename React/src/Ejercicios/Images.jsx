import React from 'react'
import { useState } from 'react';
import md5 from 'js-md5';
import { Box } from '../app/style';
const Images = () => {
    const ANIMAL_IMAGES = {
        img1: "http://via.placeholder.com/111x111",
        img2: "http://via.placeholder.com/222x222",
        img3: "http://via.placeholder.com/333x333",
    };
    const privateKey ='5ad6d3f5c7f0253df920447f1187d74b13061c62'
    const publicKey = '4e78e097fae13519e7d2fc2fb410bb2c'
    const ts = Date.now();
    const hash = md5(ts+privateKey+publicKey)
    const [images, setImages] = useState()

    const hacerCosas = ()=> {
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
  .then(res => res.json())
  .then(res => {
    const data= res.data.results.map(u => ( 

    <div> {u.name} <img src={u.thumbnail.path+'.'+u.thumbnail.extension} alt="" /> </div>

    ))
    setImages(data)
    console.log(data);
  })
    }


    return (
      <div>
        <Box/>
        <button onClick={hacerCosas}>Pulsar</button>
        {images}
      </div>
    );

  //       <button onClick={()=>setImages(ANIMAL_IMAGES.img1)}>Image 1</button>
  //       <button onClick={()=>setImages(ANIMAL_IMAGES.img2)}>Image 2</button>
  //       <button onClick={()=>setImages(ANIMAL_IMAGES.img3)}>Image 3</button><br />
  //       <img key={images} src={images} alt="" />
  //   </div>
  // )
}

export default Images