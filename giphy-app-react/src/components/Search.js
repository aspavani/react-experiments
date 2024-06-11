import React from 'react';
import { useState} from 'react';


function Search() {


    const [input, setInput] = useState("");
    const [gifs, setGifs] = useState([]);

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSearch(){
        fetch(`https://api.giphy.com/v1/gifs/search?rating=g&api_key=QPWuznRV0EgkWwObwhxJ5LonxOO4p1rQ&q=${input}`)
            .then((response) => response.json())
            .then((gifResponse) => {
                        console.log("data from the api", gifResponse.data);
                        setGifs(gifResponse.data);
            })
            .catch((error) => {
                        console.log(error)
          });
        }
    
    return (
        <>
        <h1>Search Page</h1>
        <input type="text" value={input} onChange={handleChange} placeholder= 'Search for gifs'></input>
     <button  onClick={handleSearch}>Search</button>
      <div>
        {gifs.map(gifele => (
          <img key={gifele.id} src={gifele.images.downsized.url} alt="gif image" />
        ))}
      </div>
        
        </>

    );
}

export default Search;