import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/new' element={<New></New>}></Route>
          <Route path='/edit' element={<Edit />}></Route>
          <Route path='/diary/:id' element={<Diary></Diary>}></Route>
        </Routes>
        <RouteTest></RouteTest>
      
      </div>
    </BrowserRouter>
  )
    
}

export default App;
