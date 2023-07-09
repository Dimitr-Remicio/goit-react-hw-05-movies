import { lazy, Suspense, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import './App.css';
import AppBar from './AppBar/AppBar';

const HomePage = lazy(() => import('../Pages/Home/Home' /* webpackChunkName: "home-page" */))
const MoviesPage = lazy(() => import('../Pages/Movies/Movies' /* webpackChunkName: "movies-page" */))
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetails/MovieDetails' /* webpackChunkName: "movie-details-page" */))
const Cast = lazy(() => import('../components/Cast/Cast' /* webpackChunkName: "cast" */))
const Reviews = lazy(() => import('../components/Reviews/Reviews' /* webpackChunkName: "reviews" */))
const Trailer = lazy(() => import('../components/Trailer/Trailer' /* webpackChunkName: "trailer" */))

import Notfound from './Notfound/Notfound';
import Container from './Container/Container';

function App() {
  

  let [color, setColor] = useState("#EF6401");

  return (
    <> 
      <AppBar></AppBar>
      <Routes>
        <Route index element={ <Container><Suspense fallback={<BarLoader color={color}/>}><HomePage></HomePage></Suspense></Container>}></Route>
        <Route path='/movies' element={ <Container><Suspense fallback={<BarLoader color={color}/>}><MoviesPage></MoviesPage></Suspense></Container>}></Route>        
        <Route path='/movies/:movieId' element={<Container><Suspense fallback={<BarLoader color={color}/>}><MovieDetailsPage></MovieDetailsPage></Suspense></Container>}>        
            <Route path='/movies/:movieId/cast' element={<Container><Suspense fallback={<BarLoader color={color}/>}><Cast></Cast></Suspense></Container>}></Route>
            <Route path='/movies/:movieId/reviews' element={<Container><Suspense fallback={<BarLoader color={color}/>}><Reviews></Reviews></Suspense></Container>}></Route>
            <Route path='/movies/:movieId/videos' element={<Container><Suspense fallback={<BarLoader color={color}/>}><Trailer></Trailer></Suspense></Container>}></Route>
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
