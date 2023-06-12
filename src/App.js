import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PublicPayout from './layouts/PublicLayout';
import Home from './pages/Home';
import About from './pages/About';
import Building from './pages/Building';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={ <PublicPayout children= { <About/> }/> } />
          <Route path='/' element={ <PublicPayout children= { <Home/> }/> } />
          <Route path='*' element={ <PublicPayout children= { <Building/> }/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
