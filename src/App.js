import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element = {<EmployeeList/>}></Route>
      <Route path = '/' element = {<EmployeeList/>}></Route>
      <Route path = '/employeeList' element = {<EmployeeList/>}></Route>
      <Route path = '/addEmployee' element = {<AddEmployee/>}></Route>
      <Route path = '/editEmployee/:id' element = {<UpdateEmployee/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
