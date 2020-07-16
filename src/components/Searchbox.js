import React from 'react';

function Searchbox({searchChange}){
  console.log();
  return (
    <div className="pa2">
      <input
        className = "pa3 ba b--green bg-lightest-blue" 
        type="search" 
        placeholder="Search Robots Kostaki"
        onChange = {searchChange}
        />
    </div>
  );
}

export default Searchbox;