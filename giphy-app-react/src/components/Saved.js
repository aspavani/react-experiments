import React from 'react';
import {useState, useEffect} from 'react';

function Saved() {


    const [savedGifImages, setSavedGifImages] = useState(() => {
        const savedGifs_json = localStorage.getItem('savedGifs');
        return savedGifs_json ? JSON.parse(savedGifs_json) : [];
      });
    
      useEffect(() => {
        localStorage.setItem('savedGifs', JSON.stringify(savedGifImages));
      }, [savedGifImages]);

      const handleRemove = (index) => {
        savedGifImages.splice(index, 1);
        console.log("hre" + index);
        console.log(savedGifImages);
        setSavedGifImages(savedGifImages);
        console.log(savedGifImages.length);
      };

    return (
        <>
        <h2>Saved GIFS</h2>
        <div>
        {savedGifImages.map((gifUrl, index) => (
          <div key={index}>
            <img src={gifUrl} alt={`Image at ${index}`} />
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
      </>

    );
}

export default Saved;