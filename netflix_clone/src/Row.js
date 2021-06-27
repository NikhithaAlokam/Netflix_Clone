import React,{useEffect,useState} from 'react'
import "./Row.css"
import axios from "./axios";
// import request from './Requests'

function Row({ title, fetchurl, isLargeRow = false }) {
    const[movies, setMovies] = useState([]);
    // const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchdata() {
            
        const request = await axios.get(fetchurl);
        setMovies(request.data.results);
       };
       

       fetchdata();

   },[fetchurl])

   console.log(movies)

    return (
        <div className="row">
           <h2>{title}</h2> 
           {/* {movies.map(movie => (
               <img src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
           ))} */}
        </div>
    );
}

export default Row;
