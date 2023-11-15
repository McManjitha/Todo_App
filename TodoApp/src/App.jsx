import React from 'react'
import './App.css';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <Header/>
      <Login />
      <Footer />
    </div>
    // <div className=" bg-slate-400 w-screen min-h-screen flex flex-col items-center justify-center">
    //   <div className="bg-slate-300 flex flex-col items-center rounded-3xl p-5 shadow-xl">
    //     <AddTodo/>
    //     <Todos/>
    //   </div>
    // </div>
  );
}

export default App;
