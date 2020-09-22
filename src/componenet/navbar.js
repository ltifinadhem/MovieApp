
  
import React from 'react';
import MovieAdd from './MovieAdd';
import Search from './search';
const Navbar = (props) => {
  const{add,search,useMovie, useRating}=props
    return (
        <div>
<nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Movie</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
      <MovieAdd add={(M) => add(M)}/>
    </li>
    
    </ul>
    <Search 
    useMovie={useMovie} 
    useRating={useRating}
    search={(s) => search(s)}/>
  </div>
</nav>

            </div>
)}

export default Navbar;