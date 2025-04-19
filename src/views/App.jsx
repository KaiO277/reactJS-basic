import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.scss'
import MyComponent from './Example/MyComponent'
import ToDoList from './Todos/ToDoList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      {/* <MyComponent /> */}
      <ToDoList />
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
