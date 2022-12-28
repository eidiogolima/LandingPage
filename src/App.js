import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './JS/Components/Pages/Home';
import Header from './JS/Components/Global/Header';
import Footer from './JS/Components/Global/Footer';



function App() {
  return (
    <main className="App">
      
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path = '/' element={<Home/>}/>


        </Routes>
        <Footer/>
      </BrowserRouter>

    </main>
  );
}

export default App;
