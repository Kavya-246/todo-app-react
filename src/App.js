import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import SearchTask from './components/SearchTask';
import DeleteTask from './components/DeleteTask';
import All from './components/All';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/Add' element={<AddTask/>}/>
      <Route path='/Search' element={<SearchTask/>}/>
      <Route path='/delete' element={<DeleteTask/>}/>
      <Route path='/All' element={<All/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
