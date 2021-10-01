import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layouts/Navbar";
import ExerciseList from "./components/exercises/ExerciseList";
import ExerciseEdit from "./components/exercises/ExerciseEdit";
import ExerciseCreate from "./components/exercises/ExerciseCreate";
import UserList from "./components/users/UserList";
import UserCreate from "./components/users/UserCreate";

function App() {
  return (
    <Router>
      <Navbar />
      <br /> 
      <div className='container'>
      <Route path='/' component={ExerciseList} exact/>
      <Route path='/edit/:id' component={ExerciseEdit} />
      <Route path='/create' component={ExerciseCreate} />
      <Route path='/user' component={UserCreate} />
      </div>
    </Router>
  );
}

export default App;
