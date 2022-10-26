import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const handleChange = (e) => {
        const value=  e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    }


    const clearData  = (e) => {
        e.preventDefault();
        setEmployee({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
        });
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList");
        }).catch((error) =>{
            console.log(error);
        })
    }

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div> 
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    First Name
                </label>
                <input 
                name = "firstName" 
                value = {employee.firstName}
                onChange = {(e) => handleChange(e)} 
                type="text" 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Last Name
                </label>
                <input 
                name = "lastName" 
                value = {employee.lastName} 
                onChange = {(e) => handleChange(e)}
                type="text" 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Email
                </label>
                <input 
                name = "emailId" 
                value = {employee.emailId} 
                onChange = {(e) => handleChange(e)}
                type="email" 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={saveEmployee} className='rounded text-white font-semibold hover:bg-green-700 bg-green-400 py-2 px-6'>
                    Save
                </button>
                <button onClick = {clearData} className='rounded text-white font-semibold hover:bg-red-700 bg-red-400 py-2 px-6'>
                    Clear
                </button>
            </div>
        </div>
    </div>
  ) 
}

export default AddEmployee;