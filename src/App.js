import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './JS/Components/Pages/Home';
import Header from './JS/Components/Global/Header';
import Footer from './JS/Components/Global/Footer';
import Contato from './JS/Components/Pages/Contato';



function App() {
  return (
    <main className="App">
      
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/contato' element={<Contato/>}/>


        </Routes>
        <Footer/>
      </BrowserRouter>

    </main>
  );
}

export default App;
