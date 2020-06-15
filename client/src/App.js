import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as router, Route , Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


function Movies(props){
  return <h1>Movies List </h1>;
}




const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Router>
      <SavedList list={savedList} />

      <Route path="/" />
      <

      <Route path="/movies/:id" render= {props =>( 
            <Movie {...props }
              
      )}
   />

      </Router>
  </div>

  );
}


export default App;
