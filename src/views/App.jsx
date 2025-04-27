import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.scss'
import MyComponent from './Example/MyComponent'
import ToDoList from './Todos/ToDoList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Example/Home'
import ListUser from './Users/ListUser'




function App() {

  return (
    <>
      {/* <MyComponent /> */}
      {/* <ToDoList /> */}
      
      <BrowserRouter>
      <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<ToDoList />} />
            <Route path="/example" element={<MyComponent />} />
            <Route path="/users" element={<ListUser />} />
          </Routes>
      </BrowserRouter>
      
      <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
    </>
  )
}

export default App
