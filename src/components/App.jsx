import {Routes, Route} from 'react-router-dom';
// import {useState} from 'react';
import './App.css';
import Home from './Home/Home';
import Notfound from './Notfound/Notfound';
import Movies from './Movies/Movies';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';


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
        
        <Route
         path='/movies/:movieId'
         element={
          <Container>

            

            </Container>
            }>
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
