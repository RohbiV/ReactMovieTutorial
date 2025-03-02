import './css/App.css'
// import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/movieContext';

function App() {
  // const movieNumber = 1;    

  return (
    // <>
    //   <Home/>
    // </>
    <MovieProvider>
        <NavBar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favorites' element={<Favorites/>} />
          </Routes>
        </main>
    </MovieProvider>
  )
}



export default App
