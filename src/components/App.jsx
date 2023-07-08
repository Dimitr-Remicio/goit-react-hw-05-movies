import {Routes, Route} from 'react-router-dom';
// import {useState} from 'react';
import './App.css';
import AppBar from './AppBar/AppBar';


import Home from '../Pages/Home/Home';
import Movies from '../Pages/Movies/Movies';
import MovieDetails from '../Pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Trailer from './Trailer/Trailer';
import Reviews from './Reviews/Reviews';

import Notfound from './Notfound/Notfound';
import Container from './Container/Container';

function App() {
  

  return (
    <> 
      <AppBar></AppBar>
      <Routes>
        <Route
         path='/'
         element={ <Container>
           <Home></Home>
          </Container>
           }>
        </Route>

        <Route
         path='/movies'
         element={
          <Container>

            <Movies></Movies>

            </Container>
            }>
        </Route>
        
        <Route path='/movies/:movieId' element={<Container><MovieDetails></MovieDetails></Container>}>        
            <Route path='/movies/:movieId/cast' element={<Container><Cast></Cast></Container>}></Route>
            <Route path='/movies/:movieId/reviews' element={<Container><Reviews></Reviews></Container>}></Route>
            <Route path='/movies/:movieId/videos' element={<Container><Trailer></Trailer></Container>}></Route>
        </Route>


        <Route
         path='*'
         element={
          <Container>
            <div className='pageerror'>
              <Notfound></Notfound>
            </div>
          </Container>
          }>
        </Route>
  
      </Routes> 
    </>
  )
}

//   route for add path /goit-react-hw-05-movies

export default App
