import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import './App.css'
import Home from './Home/Home'
import Notfound from './Notfound/Notfound'
import Movie from './Movie/Movie'

import AppBar from './AppBar/AppBar'


function App() {
  const [producto] = useState("🍕") 

  return (
    <> 
      <AppBar></AppBar>
      <Routes>
      <Route
         path='/'
         element={<>
            <h1>Index</h1>
         </>}>
      </Route>
        <Route
         path='/home'
         element={ producto ? <Home prod={producto}></Home>:<h1>No existe el producto</h1>}>
        </Route>

        <Route
         path='/movie'
         element={<Movie></Movie>}>
        </Route>


        <Route
         path='*'
         element={<><h1>404:NOT FOUND</h1><Notfound></Notfound></>}>
        </Route>
  
      </Routes> 
    </>
  )
}

//   route for add path /goit-react-hw-05-movies

export default App
