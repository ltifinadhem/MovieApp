import React,{useState} from 'react';

const Search = (props) => {
    return (
        <div>
          <form  class="form-inline my-2 my-lg-0">
      <input 

       onChange={(e) => {
        props.search(e.target.value);
      }}
      class="form-control mr-sm-2"
      type="text"
       name="name"
       placeholder="Search" 
       aria-label="Search"/>
      <button 
       onClick={(e) => {
        props.search(e.target.value);
      }}
      class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>  
        </div>
    );
};

export default Search;