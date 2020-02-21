import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf";

function App() {
return (
  <Router>
    <div>
      <ul className='navigation'>
        <li>
          <Link className="Home" to="/">Home</Link>
        </li>
        <h2>Smurfs List!</h2>
        <li>
          <Link className="Smurfs" to="/addsmurf">Add Smurf</Link>
        </li>
      </ul>
      <Route exact path="/" component={Smurfs} />
      <Route path="/addsmurf" component={AddSmurf} />

    </div>
  </Router>
);
}

export default App;
