import React  from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie"; 
import Filter from "./Components/Filter";


function App() {
 
  return (
    <div className="App">
   <Filter />
      <br />
      <AddMovie/>
      <br />
      <center>
        <MovieList/>
      </center>
    </div>
  );
}

export default App;
