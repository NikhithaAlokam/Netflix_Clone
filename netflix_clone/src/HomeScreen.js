import React from 'react';
import './HomeScreen.css';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Row from './Row.js';
import requests from './Requests.js';

function HomeScreen(){
    return(
        <div className="homeScreen">
        <Nav />
        <Banner />
        <Row 
        Row title="NETFLIX ORIGINALS" 
        fetchurl={requests.fetchNetflixOriginals} 
        isLargeRow={true}
        />
        <Row title="Trending Now" fetchurl={requests.fetchTrending}/>
        <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />

        </div>
    );
}
export default HomeScreen;