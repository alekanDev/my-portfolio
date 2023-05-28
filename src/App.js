import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PublicPayout from './layouts/PublicLayout';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <PublicPayout children= { <Home/> }/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
