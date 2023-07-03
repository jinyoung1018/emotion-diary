import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

<img src={process.env.PUBLIC_URL + `/assets/emotion1.png`}></img>
<img src={process.env.PUBLIC_URL + `/assets/emotion2.png`}></img>
<img src={process.env.PUBLIC_URL + `/assets/emotion3.png`}></img>
<img src={process.env.PUBLIC_URL + `/assets/emotion4.png`}></img>
<img src={process.env.PUBLIC_URL + `/assets/emotion5.png`}></img>


        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/new' element={<New></New>}></Route>
          <Route path='/edit' element={<Edit />}></Route>
          <Route path='/diary/:id' element={<Diary></Diary>}></Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  )
    
}

export default App;
