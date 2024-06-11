import React from 'react';
import {useEffect, useState} from 'react';


function Home() {


    const [gifs, setGifs] = useState([]);
    const [saved, setSavedGifs] = useState(() => {
        const savedGifs = localStorage.getItem('savedGifs');
        return savedGifs ? JSON.parse(savedGifs) : [];
      });


    const getTrendingGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/trending?rating=g&api_key=QPWuznRV0EgkWwObwhxJ5LonxOO4p1rQ`)
          .then((response) => response.json())
          .then((gifResponse) => {
            console.log("data from the api", gifResponse.data);
            setGifs(gifResponse.data);
          })
          .catch((error) => {
            console.log(error)
          });
      }

      useEffect(() => {
        getTrendingGifs();
      }, []);

      function handleSave(gifUrl) {
        const addtosavedgifs = [...saved, gifUrl];
        setSavedGifs(addtosavedgifs);
        localStorage.setItem('savedGifs', JSON.stringify(addtosavedgifs));
        
      };
    

    return (
        <>
        <h2>Home Page</h2>
        <div>
            {gifs.map((gifele)=>{
                return (
                     <div key={gifele.id}>
                     {gifs.length}
                     <img src={gifele.images.downsized.url} alt="gif image"/>
                     <button onClick={() => handleSave(gifele.images.downsized.url)}>Save</button>

                     </div>
            );
            })}


        </div>
        </>

    );
}

export default Home;