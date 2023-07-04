
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import { useReducer, useRef } from 'react';

const reducer = (state,action) => {
  let newState = [];
  switch(action.type){
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE' : {
      newState = state.filter((it)=> it.id !== action.targetId);
      break;
    }
    case 'EDIT' : {
      newState = state.map((it)=>it.id === action.data.id? {...action.data}: it)
      break;
    }
    default:
      return state;
  }
  return newState;
}

function App() {

  const [data,dispatch] = useReducer(reducer,[])

  const dataId = useRef(0);

  const onCreate = (date,content,emotion)=>{
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        data: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  }

  return (
    
    <BrowserRouter>
      <div className="App">
       
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
